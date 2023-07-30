const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const { arch } = require('os');
const path = require('path');
require('./database').connect();

var userSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    password: String,
    products: {
        name: String,
        count: Number
    },
    concern: String
});
var user = mongoose.model('User', userSchema);
app.use(express.static('static'));
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'static/home/home.html'));
});
app.get('/about', (req,res) => {
    res.sendFile(path.join(__dirname, 'static/about/about.html'));
});
app.get('/support', (req,res) => {
    res.sendFile(path.join(__dirname, 'static/support/support.html'));
}); 
app.post('/support', async (req, res) => {
    var query = user(req.body);
    async function ifExist(){
        var find = await user.find({ email: req.body.email });
        if(find.length >= 1){
            return true;
        }
        else{
            return false;
        }}
    var usedMail = await ifExist();
    if(usedMail == true){
        await user.updateOne({ email: req.body.email }, { $set: { concern: req.body.concern } }).then(() => {
            res.redirect('/');
        }).catch((err) => {
            console.log("The error is " + err);
        });
    }
    else{
        var newQuery = new user(req.body);
        await newQuery.save().then(() => {
            res.redirect('/');
        });
    }
});
app.get('/shop', (req,res) => {
    res.sendFile(path.join(__dirname, 'static/shop/shop.html'));
});
app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname, 'static/login/login.html'));
});
app.post('/login', async (req,res) => {
    var mail = req.body.email;
    var pwd = req.body.password;
    async function ifExist() {
        var find = await user.find({ email: mail });
        userid = await user.findOne({email: mail})._id;

        if (find.length >= 1) {
            return true;
        }
        else {
            return false;
        }
    }
    var usedMail = await ifExist();
    if (usedMail == true) {
        user.findOne({ email: mail }).then((user) => {
            if (pwd == user.password) {
                res.redirect('/');
            }
            else {
                res.sendFile(path.join(__dirname + '/static/login/wrong.html'));
            }
        });
    }
    else {
        var newQuery = new user(req.body);
        await newQuery.save().then(() => {
            res.redirect('/');
        });
    }
});
app.get('/cart', (req,res) => {
    res.sendFile(path.join(__dirname, 'static/cart/cart.html'));
});
app.listen(process.env.PORT, () => {
    console.log("App is running on " + process.env.PORT);
});