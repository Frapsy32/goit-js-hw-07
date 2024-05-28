const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const inputForm = document.querySelector(".login-form");

inputForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
}
