
// show/hide menu on small screens


const menuBtn = document.querySelector(".menu-icon-sm");
const menu = document.querySelector(".menu-items-sm");
const menuSmall = document.querySelector(".menu-items-sm");



menuBtn.addEventListener("click", function() {
    menu.classList.toggle("menu-items-sm-show");
});


// hide navbar on resize

window.addEventListener("resize", function() {

    if (this.matchMedia("(min-width: 1200px)").matches) { menuSmall.style.display = "none"; } else { menuSmall.style.display = "flex" }
}) 