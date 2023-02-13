const fildIcon = document.querySelector(".field-icon");
const password = document.getElementById("password-field");
fildIcon.addEventListener("click", () => {
  if (password.type === "password") {
    if (fildIcon.classList.contains("fa-eye-slash")) {
      fildIcon.classList.remove("fa-eye-slash");
    }
    fildIcon.classList.add("fa-eye");
    password.type = "text";
  } else {
    if (fildIcon.classList.contains("fa-eye")) {
      fildIcon.classList.remove("fa-eye");
    }
    fildIcon.classList.add("fa-eye-slash");
    password.type = "password";
  }
});
