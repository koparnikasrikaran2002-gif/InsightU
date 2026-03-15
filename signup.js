const signupForm = document.getElementById("signupForm");

const fullName = document.getElementById("fullName");
const universityId = document.getElementById("universityId");
const email = document.getElementById("email");
const faculty = document.getElementById("faculty");
const year = document.getElementById("year");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const nameError = document.getElementById("nameError");
const idError = document.getElementById("idError");
const emailError = document.getElementById("emailError");
const facultyError = document.getElementById("facultyError");
const yearError = document.getElementById("yearError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  nameError.textContent = "";
  idError.textContent = "";
  emailError.textContent = "";
  facultyError.textContent = "";
  yearError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

  if (fullName.value.trim() === "") {
    nameError.textContent = "Full name is required.";
    isValid = false;
  }

  if (universityId.value.trim() === "") {
    idError.textContent = "University ID is required.";
    isValid = false;
  }

  if (email.value.trim() === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  }

  if (faculty.value === "") {
    facultyError.textContent = "Please select a faculty.";
    isValid = false;
  }

  if (year.value === "") {
    yearError.textContent = "Please select a year of study.";
    isValid = false;
  }

  if (password.value.trim() === "") {
    passwordError.textContent = "Password is required.";
    isValid = false;
  } else if (password.value.trim().length < 8) {
    passwordError.textContent = "Password must be at least 8 characters.";
    isValid = false;
  }

  if (confirmPassword.value.trim() === "") {
    confirmPasswordError.textContent = "Please confirm your password.";
    isValid = false;
  } else if (password.value !== confirmPassword.value) {
    confirmPasswordError.textContent = "Passwords do not match.";
    isValid = false;
  }

  if (isValid) {
    alert("Registration successful! Redirecting to login page...");
    window.location.href = "login.html";
  }
});