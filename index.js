document.getElementById("getStartedBtn").addEventListener("click", function () {
  window.location.href = "login.html";
});

document.getElementById("learnMoreBtn").addEventListener("click", function () {
  window.location.href = "dashboard.html";
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

  // Logout clears session and reloads to refresh nav
  document.getElementById("logoutLink").addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
  });
} else {
  // Guest view: show Contact link (it's hidden by default, toggle on for guests too)
  document.getElementById("navContact").style.display = "block";
}