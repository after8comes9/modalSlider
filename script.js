function show(){
    document.querySelector('.hamburger').classList.toggle('open');
    document.querySelector('.navigation').classList.toggle('active');
}

function noShow(){
    document.querySelector('.hamburger').classList.remove('open');
    document.querySelector('.navigation').classList.remove('active');
}

document.querySelector(".hamburger").addEventListener('click', function (e) {
    e.preventDefault();
    show();
    modal.style.opacity = "0%";
    openBtn.style.opacity = "100%";
    greyOut.style.opacity = "0%";
});

let openBtn = document.querySelector(".openModal");
let closeBtn = document.querySelector(".closeModal");
let modal = document.querySelector(".modal");
let greyOut = document.querySelector(".greyOut");

function disableScroll() { 
    document.body.classList.add("stopScrolling"); 
} 

function enableScroll() { 
    document.body.classList.remove("stopScrolling"); 
} 

openBtn.addEventListener('click', function (e) {
    e.preventDefault();
    modal.style.opacity = "100%";
    openBtn.style.opacity = "0%";
    greyOut.style.opacity = "50%";
    disableScroll()
    noShow();
});

closeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    modal.style.opacity = "0%";
    openBtn.style.opacity = "100%";
    greyOut.style.opacity = "0%";
    enableScroll()
});

greyOut.addEventListener('click', function (e) {
    e.preventDefault();
    modal.style.opacity = "0%";
    openBtn.style.opacity = "100%";
    greyOut.style.opacity = "0%";
    enableScroll()
});
