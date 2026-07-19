// =================================
// KK FISH CLUB ADMIN JS
// =================================


// Admin Login Details

const adminUsername = "kkfishgdk@123";

const adminPassword = "kkfishgdkclub";



// Fish Data

let fishes = JSON.parse(
localStorage.getItem("kkfishData")
) || [

{
name:"Kois",
price:350,
offer:"Combo Offer"
},

{
name:"Guppies",
price:60,
offer:"Special Offer"
},

{
name:"Flowerhorn",
price:1800,
offer:"Premium Fish"
}

];





// LOGIN

function login(){


let user =
document.getElementById("username").value;


let pass =
document.getElementById("password").value;



if(
user === adminUsername &&
pass === adminPassword
){


document.getElementById("loginPage")
.style.display="none";


document.getElementById("dashboard")
.style.display="block";


loadFish();


}

else{


alert("❌ Wrong Username or Password");


}


}





// ADD FISH

function addFish(){


let name =
document.getElementById("fishName").value;


let price =
document.getElementById("fishPrice").value;


let offer =
document.getElementById("fishOffer").value;



if(name===""){

alert("Enter Fish Name");

return;

}



fishes.push({

name:name,

price:price,

offer:offer

});



saveFish();


loadFish();



document.getElementById("fishName").value="";

document.getElementById("fishPrice").value="";

document.getElementById("fishOffer").value="";



}






// SHOW FISH


function loadFish(){


let box =
document.getElementById("fishList");


box.innerHTML="";



fishes.forEach((fish,index)=>{


box.innerHTML += `


<div class="fish-card">


<h2>🐠 ${fish.name}</h2>


<p>
💰 Price: ₹${fish.price}
</p>


<p>
🎁 ${fish.offer}
</p>


<button onclick="editFish(${index})">

✏️ Edit

</button>


<button 
class="delete-btn"
onclick="deleteFish(${index})">

🗑 Delete

</button>



</div>


`;



});



document.getElementById("totalFish")
.innerHTML=fishes.length;



}







// EDIT


function editFish(index){


let name =
prompt(
"Fish Name",
fishes[index].name
);


let price =
prompt(
"Price",
fishes[index].price
);


let offer =
prompt(
"Offer",
fishes[index].offer
);



if(name){

fishes[index].name=name;

}


if(price){

fishes[index].price=price;

}


if(offer){

fishes[index].offer=offer;

}



saveFish();


loadFish();



}





// DELETE


function deleteFish(index){


if(confirm("Delete this fish?")){


fishes.splice(index,1);


saveFish();


loadFish();


}


}






// SAVE


function saveFish(){


localStorage.setItem(

"kkfishData",

JSON.stringify(fishes)

);


}






// LOGOUT


function logout(){


document.getElementById("dashboard")
.style.display="none";


document.getElementById("loginPage")
.style.display="flex";



}






console.log(
"🐠 KK FISH CLUB ADMIN READY"
);
