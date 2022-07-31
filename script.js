// Mobile Menu close and open Variables
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar-collapse');
const homePage = document.querySelector('body');
const burger2 = document.querySelector('.burger2');
const navLinks = document.querySelectorAll('.nav-links');

// DropBox variables
const dropBtn = document.querySelector('.dropdown-btn');
const dropBox = document.querySelector('.dropdown-menu');
const dropBtn2 = document.querySelector('.dropdown-btn2');
const dropBox2 = document.querySelector('.dropdown-menu2');
const moveDown = document.querySelectorAll('.mm-down');
const moveDown2 = document.querySelector('.mm-down2');

// Event Listener for menu button
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    burger2.classList.toggle("active");
    // homePage.classList.toggle("active");
    // navMenu.classList.toggle("active");
}

burger2.addEventListener("click", closeMenu) ;
// // // let i = 1;

// // // navLinks.forEach(n => burger2.addEventListener("click", closeMenu()));

function closeMenu(){
    burger2.classList.remove("active");
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Event Listener for Dropdown buttons
// Features button
dropBtn.addEventListener("click", showSubMenu);

function showSubMenu() {
    dropBtn.classList.toggle("show");
    dropBox.classList.toggle("show");
    moveDown.classList.toggle("show");
    dropBox.classList.toggle("show");
}

// showSubMenu();

// Company button
dropBtn2.addEventListener("click", showSubMenu2);

function showSubMenu2() {
    dropBtn2.classList.toggle("show");
    dropBox2.classList.toggle("show");
}
