const formElement = document.querySelector(".login-form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = formElement.elements["email"];
  const passwordInput = formElement.elements["password"];

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (emailValue === "" || passwordValue === "") {
    return alert("All form fields must be filled in");
  }

  const formNew = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formNew);
  form.reset();
});
