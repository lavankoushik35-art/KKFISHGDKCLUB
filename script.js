// =====================================
// KK FISH CLUB
// script.js (PART 1)
// =====================================

// Default Fish List
const defaultFishes = [
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

// Load fish from Admin Panel (if available)
let fishes = JSON.parse(localStorage.getItem("kkfish_fishes"));

if (!fishes || fishes.length === 0) {
    fishes = defaultFishes;
}

// ----------------------------
// LOADING SCREEN
// ----------------------------

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {

        if (loader) {
            loader.style.opacity = "0";

            setTimeout(function () {
                loader.style.display = "none";
            }, 600);
        }

    }, 2500);

});

// ----------------------------
// SCREEN NAVIGATION
// ----------------------------

function showScreen(id) {

    document.querySelectorAll(".container").forEach(function (screen) {

        screen.classList.remove("active");

    });

    document.getElementById(id).classList.add("active");

}

// ----------------------------
// CLUB CODE CHECK
// ----------------------------

function checkClubCode() {

    const code = document
        .getElementById("clubCode")
        .value
        .trim()
        .toLowerCase();

    if (code === "kkfishclub") {

        showScreen("screen2");

    } else {

        alert("❌ Invalid Club Code");

        document.getElementById("clubCode").value = "";

    }

}

// ----------------------------
// OFFER CODE CHECK
// ----------------------------

function checkOfferCode() {

    const code = document
        .getElementById("offerCode")
        .value
        .trim();

    if (code === "123456789") {

        showScreen("screen3");

    } else {

        alert("❌ Invalid Offer Code");

        document.getElementById("offerCode").value = "";

    }

}

// ----------------------------
// CONTINUE BUTTON
// ----------------------------

function showFishes() {

    showScreen("screen4");

    loadFishCards();

}// =====================================
// KK FISH CLUB
// script.js (PART 2)
// =====================================

// Load Fish Cards
function loadFishCards() {

    const grid = document.getElementById("fishGrid");

    if (!grid) return;

    grid.innerHTML = "";

    fishes.forEach(function(fish, index) {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `

            <div class="fish-icon">🐠</div>

            <h2>${fish}</h2>

            <p class="offer">
                🎁 Today's Club Offer Available
            </p>

            <button
                class="offerBtn"
                id="btn${index}"
                onclick="sendOffer(${index})">

                💚 Get Offer

            </button>

        `;

        grid.appendChild(card);

    });

}

// =============================
// SEARCH FISH
// =============================

function searchFish() {

    const input = document
        .getElementById("searchFish")
        .value
        .toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card){

        const name = card
            .querySelector("h2")
            .innerText
            .toLowerCase();

        if(name.includes(input)){

            card.style.display = "block";

        }else{

            card.style.display = "none";

        }

    });

}

// =============================
// REFRESH LIST
// =============================

function refreshFishList(){

    fishes = JSON.parse(
        localStorage.getItem("kkfish_fishes")
    ) || defaultFishes;

    loadFishCards();

}

// =============================
// SORT FISH A-Z
// =============================

function sortFishAZ(){

    fishes.sort();

    loadFishCards();

}

// =============================
// SORT FISH Z-A
// =============================

function sortFishZA(){

    fishes.sort().reverse();

    loadFishCards();

}

// =============================
// RESET LIST
// =============================

function resetFishList(){

    fishes = JSON.parse(
        localStorage.getItem("kkfish_fishes")
    ) || defaultFishes;

    loadFishCards();

}// =====================================
// KK FISH CLUB
// script.js (PART 3)
// =====================================

// WhatsApp Number
const whatsappNumber = "919381687402";

// ----------------------------
// SEND OFFER
// ----------------------------

function sendOffer(index){

    const fish = fishes[index];

    const message =
`🐠 Hello KK FISH GDK,

I want today's offer for:

🐟 Fish : ${fish}

Please send me the combo offer details.

Thank You.`;

    const url =
"https://wa.me/" +
whatsappNumber +
"?text=" +
encodeURIComponent(message);

    // Open WhatsApp
    window.open(url,"_blank");

    // Change Button
    const btn = document.getElementById("btn"+index);

    btn.innerHTML = "✅ Sent";

    btn.style.background = "#28a745";

    btn.disabled = true;

    // Save Click
    saveClick(fish);

}

// ----------------------------
// SAVE CLICK COUNT
// ----------------------------

function saveClick(fish){

    let clicks =
    JSON.parse(localStorage.getItem("fishClicks")) || {};

    if(!clicks[fish]){

        clicks[fish]=0;

    }

    clicks[fish]++;

    localStorage.setItem(
        "fishClicks",
        JSON.stringify(clicks)
    );

}

// ----------------------------
// RESET SENT BUTTONS
// ----------------------------

function resetButtons(){

    loadFishCards();

}

// ----------------------------
// ENTER KEY SUPPORT
// ----------------------------

document.addEventListener("keydown",function(e){

    if(e.key==="Enter"){

        if(document.getElementById("screen1").classList.contains("active")){

            checkClubCode();

        }

        else if(document.getElementById("screen2").classList.contains("active")){

            checkOfferCode();

        }

    }

});

// ----------------------------
// AUTO REFRESH FROM ADMIN
// ----------------------------

window.addEventListener("storage",function(){

    refreshFishList();

});

// ----------------------------
// WELCOME
// ----------------------------

console.log("🐠 Welcome to KK FISH CLUB");

console.log("Created for KK FISH GDK");

// =====================================
// END
// =====================================
