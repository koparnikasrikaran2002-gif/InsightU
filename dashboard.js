const logoutLink = document.getElementById("logoutLink");

// Logout functionality
if (logoutLink) {
  logoutLink.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
  });
}