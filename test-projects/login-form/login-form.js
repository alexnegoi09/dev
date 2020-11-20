const btn = document.querySelector(".forms .btn");
const username = document.querySelector(".forms .name");
const password = document.querySelector(".forms .password");
const userText = document.querySelector(".forms .user-text");
const passwordText = document.querySelector(".forms .password-text");

btn.addEventListener("click", checkInfo);

function checkInfo() {
    if (username.value == "") {
            userText.style.display = "block";
            return false;
        } else {
            userText.style.display = "none";
        }

        if (password.value == "") {
            passwordText.style.display = "block";
            return false;
        } else {
            passwordText.style.display = "none";
        }
}
