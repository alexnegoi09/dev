const openBtn = document.querySelector("[data-open]");
const modal = document.querySelector("[data-modal]");
const overlay = document.querySelector("[data-overlay]");
const closeBtn = document.querySelector("[data-close]");

openBtn.addEventListener("click", open);

function open() { 
    modal.classList.add("modal-active");
    overlay.classList.add("overlay-active");
}

closeBtn.addEventListener("click", close);

function close() { 
    modal.classList.remove("modal-active");
    overlay.classList.remove("overlay-active");
}