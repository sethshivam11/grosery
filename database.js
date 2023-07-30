const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const { MONGODB_URL } = process.env;
exports.connect = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then().catch((err) => {
        console.log(err);
    });
}