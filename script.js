const firstPassword = document.querySelector("#password");
const secondPassword = document.querySelector("#confirm-password");
const message = document.querySelector("#message");
const form = document.querySelector("#form1");

form.addEventListener("submit", (event) => {
    if (firstPassword.value !== secondPassword.value){
        message.textContent = "* Passwords do not match";
        firstPassword.classList.add("error");
        secondPassword.classList.add("error");
    }
});