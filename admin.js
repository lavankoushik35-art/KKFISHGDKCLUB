// ==========================================
// KK FISH CLUB ADMIN PANEL
// admin.js - PART 1
// ==========================================

// Admin Login
const ADMIN_USERNAME = "kkfishgdk@123";
const ADMIN_PASSWORD = "kkfishgdkclub";

// Default Fish Data
const defaultFish = [
    {
        name: "Kois",
        price: 350,
        offer: "Today's Offer",
        stock: 20,
        image: ""
    },
    {
        name: "Guppies",
        price: 60,
        offer: "Today's Offer",
        stock: 50,
        image: ""
    },
    {
        name: "Flowerhorn",
        price: 1800,
        offer: "Today's Offer",
        stock: 10,
        image: ""
    },
    {
        name: "Beta Fish",
        price: 180,
        offer: "Today's Offer",
        stock: 30,
        image: ""
    },
    {
        name: "Moulis",
        price: 40,
        offer: "Today's Offer",
        stock: 40,
        image: ""
    },
    {
        name: "Arowana",
        price: 1800,
        offer: "Today's Offer",
        stock: 5,
        image: ""
    },
    {
        name: "Tiger Barbs",
        price: 80,
        offer: "Today's Offer",
        stock: 25,
        image: ""
    },
    {
        name: "Sharks",
        price: 80,
        offer: "Today's Offer",
        stock: 12,
        image: ""
    },
    {
        name: "Panda Moulis",
        price: 60,
        offer: "Today's Offer",
        stock: 35,
        image: ""
    },
    {
        name: "Alligator Gar",
        price: 1500,
        offer: "Today's Offer",
        stock: 4,
        image: ""
    },
    {
        name: "Small Oscars",
        price: 350,
        offer: "Today's Offer",
        stock: 15,
        image: ""
    },
    {
        name: "Big Oscars",
        price: 700,
        offer: "Today's Offer",
        stock: 8,
        image: ""
    },
    {
        name: "Polar Parrots",
        price: 300,
        offer: "Today's Offer",
        stock: 10,
        image: ""
    },
    {
        name: "Parrots",
        price: 300,
        offer: "Today's Offer",
        stock: 15,
        image: ""
    }
];

// Load Saved Fish
let fishes =
JSON.parse(localStorage.getItem("kkfish_data")) ||
defaultFish;

// -----------------------
// LOGIN
// -----------------------

function login(){

    const username =
    document.getElementById("username").value.trim();

    const password =
    document.getElementById("password").value.trim();

    if(
        username===ADMIN_USERNAME &&
        password===ADMIN_PASSWORD
    ){

        document.getElementById("loginPage").style.display="none";

        document.getElementById("dashboard").style.display="block";

        renderFish();

    }

    else{

        alert("❌ Invalid Username or Password");

    }

}

// -----------------------
// SAVE
// -----------------------

function saveData(){

    localStorage.setItem(
        "kkfish_data",
        JSON.stringify(fishes)
    );

    alert("✅ Data Saved");

}

// -----------------------
// UPDATE COUNTER
// -----------------------

function updateCounter(){

    document.getElementById("totalFish").innerHTML =
    fishes.length;

}

// -----------------------
// PAGE LOAD
// -----------------------

window.onload=function(){

    document.getElementById("dashboard").style.display="none";

};// ==========================================
// KK FISH CLUB ADMIN PANEL
// admin.js - PART 2
// ==========================================

// -----------------------
// SHOW FISH TABLE
// -----------------------

function renderFish(){

    const table =
    document.getElementById("fishList");

    table.innerHTML = "";

    fishes.forEach(function(fish,index){

        table.innerHTML += `

        <tr>

            <td>${index+1}</td>

            <td>${fish.name}</td>

            <td>₹${fish.price}</td>

            <td>${fish.offer}</td>

            <td>${fish.stock}</td>

            <td>

                <button onclick="editFish(${index})">
                ✏ Edit
                </button>

                <button onclick="deleteFish(${index})">
                ❌ Delete
                </button>

            </td>

        </tr>

        `;

    });

    updateCounter();

}

// -----------------------
// ADD FISH
// -----------------------

function addFish(){

    const name =
    document.getElementById("newFish").value.trim();

    const price =
    document.getElementById("fishPrice").value;

    const offer =
    document.getElementById("fishOffer").value.trim();

    const stock =
    document.getElementById("fishStock").value;

    const image =
    document.getElementById("fishImage").value.trim();

    if(name===""){

        alert("Enter Fish Name");

        return;

    }

    fishes.push({

        name:name,

        price:Number(price)||0,

        offer:offer||"Today's Offer",

        stock:Number(stock)||0,

        image:image

    });

    clearInputs();

    renderFish();

}

// -----------------------
// CLEAR INPUTS
// -----------------------

function clearInputs(){

    document.getElementById("newFish").value="";

    document.getElementById("fishPrice").value="";

    document.getElementById("fishOffer").value="";

    document.getElementById("fishStock").value="";

    document.getElementById("fishImage").value="";

}

// -----------------------
// DELETE
// -----------------------

function deleteFish(index){

    if(confirm("Delete "+fishes[index].name+" ?")){

        fishes.splice(index,1);

        renderFish();

    }

}

// -----------------------
// EDIT
// -----------------------

function editFish(index){

    const fish = fishes[index];

    const newName =
    prompt("Fish Name",fish.name);

    if(newName===null) return;

    const newPrice =
    prompt("Price",fish.price);

    if(newPrice===null) return;

    const newOffer =
    prompt("Offer",fish.offer);

    if(newOffer===null) return;

    const newStock =
    prompt("Stock",fish.stock);

    if(newStock===null) return;

    fish.name = newName;

    fish.price = Number(newPrice);

    fish.offer = newOffer;

    fish.stock = Number(newStock);

    renderFish();

}// ==========================================
// KK FISH CLUB ADMIN PANEL
// admin.js - PART 3
// ==========================================

// ---------- SAVE SETTINGS ----------

function saveSettings() {

    const settings = {
        clubCode: document.getElementById("clubCode").value.trim(),
        offerCode: document.getElementById("offerCode").value.trim(),
        whatsapp: document.getElementById("whatsappNumber").value.trim()
    };

    localStorage.setItem(
        "kkfish_settings",
        JSON.stringify(settings)
    );

    alert("✅ Settings Saved");

}

// ---------- LOGOUT ----------

function logout() {

    if (!confirm("Logout from Admin Panel?")) return;

    document.getElementById("dashboard").style.display = "none";
    document.getElementById("loginPage").style.display = "flex";

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

}

// ---------- SORT A-Z ----------

function sortFishAZ() {

    fishes.sort((a, b) => a.name.localeCompare(b.name));

    renderFish();

}

// ---------- SORT Z-A ----------

function sortFishZA() {

    fishes.sort((a, b) => b.name.localeCompare(a.name));

    renderFish();

}

// ---------- RESET LIST ----------

function resetFishList() {

    if (!confirm("Reset to default fish list?")) return;

    fishes = JSON.parse(JSON.stringify(defaultFish));

    renderFish();

    saveData();

}

// ---------- DELETE ALL ----------

function deleteAllFish() {

    if (!confirm("Delete ALL fish?")) return;

    fishes = [];

    renderFish();

    saveData();

}

// ---------- TEST SOUND ----------

function testSound() {

    const enabled = document.getElementById("soundToggle");

    if (!enabled || !enabled.checked) {
        alert("🔇 Sound is disabled.");
        return;
    }

    // Simple browser beep replacement
    alert("🔊 Sound test successful!");

}

// ---------- LOAD SETTINGS ----------

function loadSettings() {

    const settings = JSON.parse(
        localStorage.getItem("kkfish_settings")
    );

    if (!settings) return;

    document.getElementById("clubCode").value =
        settings.clubCode || "kkfishclub";

    document.getElementById("offerCode").value =
        settings.offerCode || "123456789";

    document.getElementById("whatsappNumber").value =
        settings.whatsapp || "9381687402";

}

// ---------- STARTUP ----------

window.onload = function () {

    document.getElementById("dashboard").style.display = "none";

    loadSettings();

    updateCounter();

};

console.log("🐠 KK FISH CLUB Admin Panel Loaded");
