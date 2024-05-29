const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  event.preventDefault;
  nameOutput.textContent = event.currentTarget.value;

  const user = nameInput.value.trim();
  if (user === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = user;
  }
});
