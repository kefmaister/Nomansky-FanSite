const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

document.getElementById("readMore").addEventListener( 'click' , changeClass);

function changeClass() {
    let content = document.getElementById("showMore");
    let btn = document.getElementById("readMore");
    content.classList.toggle('show');
    
    if (content.classList.contains("show")) {
            btn.innerHTML = "Show Less";
        } else {
            btn.innerHTML = "Show More";
        }
}

let card = document.querySelector(".cardLink");


card.addEventListener("click", showContent);

function showContent() {
    
}