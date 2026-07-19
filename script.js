// =================================
// KK FISH CLUB
// script.js
// =================================


// Fish List

const fishes = [

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



// WhatsApp Number

const whatsappNumber = "919381687402";




// Loading Screen

window.onload = function(){

setTimeout(()=>{

let loader=document.getElementById("loader");

if(loader){

loader.style.display="none";

}

},2500);


};




// Screen Change

function showScreen(id){


document.querySelectorAll(".container")
.forEach(screen=>{

screen.classList.remove("active");

});


document.getElementById(id)
.classList.add("active");


}




// Club Code

function checkClubCode(){


let code =
document.getElementById("clubCode").value.trim();


if(code === "kkfishclub"){


showScreen("screen2");


}

else{


alert("❌ Wrong Club Code");


}



}




// Offer Code

function checkOfferCode(){


let code =
document.getElementById("offerCode").value.trim();



if(code === "123456789"){


showScreen("screen3");


}

else{


alert("❌ Wrong Offer Code");


}


}




// Show Fish Page

function showFishes(){


showScreen("screen4");


loadFishCards();


}




// Create Fish Cards

function loadFishCards(){


let grid =
document.getElementById("fishGrid");


grid.innerHTML="";



fishes.forEach((fish,index)=>{


let card=document.createElement("div");


card.className="card";



card.innerHTML=`

<div class="fish-icon">
🐠
</div>


<h2>${fish}</h2>


<p>
🎁 KK FISH CLUB OFFER AVAILABLE
</p>


<button onclick="orderFish('${fish}')">

💚 Order Now

</button>

`;



grid.appendChild(card);



});



}




// WhatsApp Order

function orderFish(fish){


let message =

`🐠 KK FISH GDK ORDER

Fish Name:
${fish}

I want details and price.

Thank You.`;



let url =

"https://wa.me/" +

whatsappNumber +

"?text=" +

encodeURIComponent(message);



window.open(url,"_blank");



}




// Search Fish

function searchFish(){


let search =

document.getElementById("searchFish")
.value
.toLowerCase();



let cards =

document.querySelectorAll(".card");



cards.forEach(card=>{


let name =

card.querySelector("h2")
.innerText
.toLowerCase();



if(name.includes(search)){


card.style.display="block";


}

else{


card.style.display="none";


}


});



}



console.log("🐠 KK FISH CLUB Loaded");
