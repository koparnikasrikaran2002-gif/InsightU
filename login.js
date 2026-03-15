const loginForm = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const forgotPasswordLink = document.getElementById("forgotPasswordLink");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  emailError.textContent = "";
  passwordError.textContent = "";

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

  if (emailValue === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(emailValue)) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  }

  if (passwordValue === "") {
    passwordError.textContent = "Password is required.";
    isValid = false;
  } else if (passwordValue.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  if (isValid) {
    alert("Login successful!");
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "dashboard.html";
  }
});

// Clear login state on visiting login page
localStorage.removeItem("isLoggedIn");

forgotPasswordLink.addEventListener("click", function (event) {
  event.preventDefault();
  alert("Forgot Password link clicked.");
});