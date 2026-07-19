// Welcome
console.log("Welcome to KK FISH CLUB");

// Confirmation Codes
const validCodes = [
  "KKFISHGDK",
  "KKFISHHEAVEN",
  "KKAQUA",
  "KKAQUARIUMS",
  "GDKHEAVENFISHES"
];

// Check Confirmation Code
function checkCode() {
  const input = document.getElementById("code");

  if (!input) {
    alert("Code input not found.");
    return;
  }

  const code = input.value.trim().toUpperCase();

  if (validCodes.includes(code)) {
    window.location.href = "password.html";
  } else {
    alert("Invalid Confirmation Code");
  }
}

// Customer Login
function customerLogin() {
  const pass = document.getElementById("pass");

  if (pass.value === "kkfishmember") {
    window.location.href = "customer.html";
  } else {
    alert("Wrong Password");
  }
}

// Admin Login
function adminLogin() {
  const admin = document.getElementById("adminid");

  if (admin.value === "KKFISHADMIN.GDK") {
    window.location.href = "admin.html";
  } else {
    alert("Invalid Admin ID");
  }
}
