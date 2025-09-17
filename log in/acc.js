document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value;

  let adminUser = "admin";
  let adminPass = "12345";

  if (username === adminUser && password === adminPass) {
    alert("Login successful!");
    window.location.href = "admin-dashboard.html";
  } else {
    alert("Invalid username or password!");
  }
});


