const input = document.getElementById("validation-input");

input.addEventListener("blur", (e) => {
  const allowedLength = +e.target.dataset.length;
  const actualLength = e.target.value.trim().length;

  if (actualLength === allowedLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    return;
  }

  input.classList.add("invalid");
  input.classList.remove("valid");
});
