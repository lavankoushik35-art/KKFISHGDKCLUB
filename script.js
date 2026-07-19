// ============================// KK FISH CLUB
// script.js
// ===============================

// Welcome
console.log("Welcome to KK FISH CLUB");

// Button Animation
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(0.95)";
        setTimeout(() => {
            button.style.transform = "scale(1)";
        }, 150);
    });
});

// ===============================
// Confirmation Codes
// ===============================

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

    const code =
        
