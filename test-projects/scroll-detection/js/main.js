const test = document.querySelector(".test");

test.onwheel = (e) => {
  const indicator = document.createElement("span");

  if (e.deltaY < 0) {
    indicator.innerText = "scrolling up";
    indicator.classList.add("up");
  } else {
    indicator.innerText = "scrolling down";
    indicator.classList.add("down");
  }

  test.appendChild(indicator);
  indicator.classList.add("styled");

  if (test.offsetHeight > window.innerHeight - 300) test.innerHTML = "";
};