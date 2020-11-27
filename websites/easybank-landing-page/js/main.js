
// show/hide menu on small screens


const menuBtn = document.querySelector(".menu-icon-sm");
const menu = document.querySelector(".menu-items-sm");


menuBtn.addEventListener("click", function() {
    menu.classList.toggle("menu-items-sm-show");
})