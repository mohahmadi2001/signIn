const fildIcon = document.querySelector(".field-icon");
const password = document.getElementById("password-field");
fildIcon.addEventListener("click", () => {
  if (password.type === "password") password.type = "text";
  else password.type = "password";
});
