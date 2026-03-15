const contactForm = document.getElementById("contactForm");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const subjectError = document.getElementById("subjectError");
const messageError = document.getElementById("messageError");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  nameError.textContent = "";
  emailError.textContent = "";
  subjectError.textContent = "";
  messageError.textContent = "";

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

  if (fullName.value.trim() === "") {
    nameError.textContent = "Full name is required.";
    isValid = false;
  }

  if (email.value.trim() === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  }

  if (subject.value.trim() === "") {
    subjectError.textContent = "Subject is required.";
    isValid = false;
  }

  if (message.value.trim() === "") {
    messageError.textContent = "Message is required.";
    isValid = false;
  } else if (message.value.trim().length < 10) {
    messageError.textContent = "Message should be at least 10 characters.";
    isValid = false;
  }

  if (isValid) {
    alert("Your message has been sent successfully!");
    contactForm.reset();
  }
});

// Manage navbar based on login state
const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

if (isLoggedIn) {
  // Show logged-in items
  document.getElementById("navDashboard").style.display = "block";
  document.getElementById("navContact").style.display = "block";
  document.getElementById("navLogout").style.display = "block";
  // Hide guest items
  document.getElementById("navLogin").style.display = "none";
  document.getElementById("navSignup").style.display = "none";

  // Logout clears session and goes to login page
  document.getElementById("logoutLink").addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
  });
} else {
  // Guest: only Login and Sign Up are visible (already the default)
  // Contact link still visible to guests (it's the current page)
  document.getElementById("navContact").style.display = "block";
}