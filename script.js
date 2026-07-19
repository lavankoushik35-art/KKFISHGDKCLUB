// Hide loading screen after 3 seconds
setTimeout(() => {
    document.getElementById("loader").style.display = "none";
}, 3000);

// Fish List
let fishes = JSON.parse(localStorage.getItem("kkfishData")) || [
    "Kois",
    "Guppies",
    "Flowerhorn",
    "Beta Fish",
    "Moulis",
    "Arowana",
    "Tiger Barbs",
    "Sharks",
    "Panda Moulis",
    "Alligator Gar",
    "Small Oscars",
    "Big Oscars",
    "Polar Parrots",
    "Parrots"
];

// Show selected screen
function showScreen(id) {
    document.querySelectorAll(".container").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}

// Check Club Code
function checkClubCode() {

    let code = document.getElementById("clubCode").value.trim().toLowerCase();

    if (code === "kkfishclub") {
        showScreen("screen2");
    } else {
        alert("❌ Wrong Club Code");
    }

}

// Check Offer Code
function checkOfferCode() {

    let code = document.getElementById("offerCode").value.trim();

    if (code === "123456789") {
        showScreen("screen3");
    } else {
        alert("❌ Wrong Offer Code");
    }

}

// Show Fish List
function showFishes() {
       function showFishes() {

    fishes = JSON.parse(localStorage.getItem("kkfishData")) || [];
    showScreen("screen4");

    let grid = document.getElementById("fishGrid");

    grid.innerHTML = "";

    fishes.forEach(fish => {

        let card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <h3>🐠 ${fish}</h3>
            <p>🎁 Today's Club Offer Available</p>
            <button onclick="sendOffer(this,'${fish}')">
                💚 Get Offer
            </button>
        `;

        grid.appendChild(card);

    });

}

// WhatsApp
function sendOffer(button, fish) {

    let number = "919381687402";

    let message =
`Hello KK FISH GDK,

I want today's offer for:

🐠 ${fish}

Please send me the combo offer details.

Thank You.`;

    let url =
"https://wa.me/" + number + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");

    button.innerHTML = "✅ Sent";
    button.style.background = "#28a745";
    button.disabled = true;

}
