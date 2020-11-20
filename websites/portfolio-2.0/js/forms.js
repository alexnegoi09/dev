const sendBtn = document.querySelector("#contact-section #main-form p button");

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const inputs = document.querySelectorAll("#contact-section #main-form p .form-styling");

  inputs.forEach((input) => {
    if (!input.value) {
      input.style.border = "1px solid red";
      return;
    }
  })
});
