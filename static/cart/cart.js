let search = document.getElementById('search');
let toggle = document.getElementById('search-toggle');
let home = document.getElementById('home-btn');
toggle.addEventListener("click", e=>{
    e.preventDefault();
    if(search.style.display != 'flex'){
        search.style.display = 'flex';
        home.classList.remove('active');
        toggle.classList.add('active');
        toggle.innerHTML = 'Search&nbsp;&nbsp;<i class="fa fa-times"></i>';
    }
    else{
        search.style.display = 'none';
        home.classList.add('active');
        toggle.classList.remove('active');
        toggle.innerHTML = '<i class="fa fa-search"></i>&nbsp;&nbsp;Search';
    }
});
let searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener("click", e=>{
    e.preventDefault();
    location.href = '/shop';
});
let width = window.innerWidth;
function checksize(){
    if(width < '600'){
        menuBtn.click();
    }
}
home.addEventListener("click", e=>{
    e.preventDefault();
    search.style.display = 'none';
    toggle.classList.remove('active');
    home.classList.add('active');
    toggle.innerHTML = '<i class="fa fa-search"></i>&nbsp;&nbsp;Search';
    checksize();
});
let menuBtn = document.getElementById('menu-toggle');
let menu = document.getElementById('navbar');
let container = document.getElementById('container');
menuBtn.addEventListener("click", e=>{
    if(menu.style.transform != 'translateY(-2%)'){
        menu.style.transform = 'translateY(-2%)';
        menuBtn.style.position = 'fixed';
        menuBtn.style.color = 'white';
        menuBtn.style.background = 'grey';
        menuBtn.innerHTML = '<i class="fa fa-times"></i>';
    }
    else if(menu.style.transform != 'translateY(-120%)'){
        menu.style.transform = 'translateY(-120%)';
        menuBtn.style.color = 'rgba(94, 94, 94, 0.671)';
        menuBtn.style.background = '#ffffff62';
        menuBtn.style.position = 'absolute';
        menuBtn.innerHTML = '<i class="fa fa-bars"></i>';
        if(search.style.display == 'flex'){
            toggle.click();
        }
    }
});