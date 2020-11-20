const navbar = document.getElementById("navbar");
const items = document.querySelectorAll("#navbar > p a");
const mainHeader = document.querySelector("#main-image-container #main-header");


// main header animation

window.onload = () => {
  mainHeader.style.opacity = "1";
}


// navbar animation

window.onscroll = () => {
  if (document.documentElement.scrollTop > 150) {

    // navbar styling

    navbar.style.height = "50px";
    navbar.style.backgroundColor = "rgba(204, 204, 204, 0.9)";
    navbar.style.boxShadow = "1px 1px 1px black";
    navbar.style.lineHeight = "50px";

    // navlinks styling

    items.forEach((item) => {
      item.style.fontSize = "1.2rem";
      item.style.color = "inherit";
    });
  } else {
    navbar.style.height = "initial";
    navbar.style.backgroundColor = "initial";
    navbar.style.boxShadow = "none";
    navbar.style.lineHeight = "70px";

    items.forEach((item) => {
      item.style.fontSize = "1.4rem";
      item.style.color = "white";
    });
  }
}
