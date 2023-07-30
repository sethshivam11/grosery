let fruits = document.getElementsByClassName('fruit');
let slideIndexF = 0;
showSlideF(slideIndexF);
function plusSlideF(n){
    showSlideF(slideIndexF += n);
}
function showSlideF(n){
    let i;
    if(n > fruits.length){
        slideIndexF = 1;
    }
    if(n < 1){
        slideIndexF = fruits.length;
    }
    for(i = 0; i < fruits.length; i++){
        fruits[i].style.display = 'none';
    }
    fruits[slideIndexF - 1].style.display = 'flex';
}
let veggies = document.getElementsByClassName('veggie');
let slideIndexV = 0;
showSlideV(slideIndexV);
function plusSlideV(n){
    showSlideV(slideIndexV += n);
}
function showSlideV(n){
    let i;
    if(n > veggies.length){
        slideIndexV = 1;
    }
    if(n < 1){
        slideIndexV = veggies.length;
    }
    for(i = 0; i < veggies.length; i++){
        veggies[i].style.display = 'none';
    }
    veggies[slideIndexV - 1].style.display = 'flex';
}
let width = window.innerWidth;
function checksize(){
    if(width < '600'){
        menuBtn.click();
    }
}
let home = document.getElementById('home-btn');
home.addEventListener("click", e=>{
    e.preventDefault();
    checksize();
});
let menuBtn = document.getElementById('menu-toggle');
let menu = document.getElementById('navbar');
menuBtn.addEventListener("click", e=>{
    if(menu.style.transform != 'translateY(-2%)'){
        menu.style.transform = 'translateY(-2%)';
        menuBtn.style.position = 'fixed';
        menuBtn.innerHTML = '<i class="fa fa-times"></i>';
    }
    else if(menu.style.transform != 'translateY(-120%)'){
        menu.style.transform = 'translateY(-120%)';
        menuBtn.style.position = 'absolute';
        menuBtn.innerHTML = '<i class="fa fa-bars"></i>';
    }
});
const swipeElementV = document.getElementById('listed-veggies');
let startXV;
swipeElementV.addEventListener('touchend', touchEndV, false);
function touchStartV(event) {
    event.preventDefault();
    startXV = event.touches[0].clientX;
}
function touchEndV(event) {
    event.preventDefault();
    const endXV = event.changedTouches[0].clientX;
    const deltaXV = endXV - startXV;
    if (deltaXV > 0) {
        console.log('left swipe detected');
        plusSlideV(1);
    } else {
        console.log('right swipe detected');
        plusSlideV(-1);
    }
}
const swipeElementF = document.getElementById('listed-fruits');
let startXF;
swipeElementF.addEventListener('touchend', touchEndF, false);
function touchStartF(event) {
    event.preventDefault();
    startXF = event.touches[0].clientX;
}
function touchEndF(event) {
    event.preventDefault();
    const endXF = event.changedTouches[0].clientX;
    const deltaXF = endXF - startXF;
        if (deltaXF > 0) {
            console.log('left swipe detected');
            plusSlideF(1);
        } else {
            console.log('right swipe detected');
            plusSlideF(-1);
        }
    }