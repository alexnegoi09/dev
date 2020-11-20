const nav = document.querySelector(".nav");
const iconLabels = document.querySelectorAll(".icon-label");
const resizeBar = document.querySelector(".resize-bar");

resizeBar.addEventListener("click", () => {
    nav.classList.toggle("nav-collapsed");
    iconLabels.forEach((label) => label.classList.toggle("label-none"));
})
