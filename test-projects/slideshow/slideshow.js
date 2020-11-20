const images = document.querySelectorAll(".picture");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function next() {
    const active = document.querySelector(".container .active");
    active.classList.remove("active");
    if (active.nextElementSibling) {
        active.nextElementSibling.classList.add("active");
    } else {
        images[0].classList.add("active");
    }
}

function prev() {
    const active = document.querySelector(".container .active");
    active.classList.remove("active");
    if (active.previousElementSibling) {
        active.previousElementSibling.classList.add("active");
    } else {
        images[images.length - 1].classList.add("active");
    }
}

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);