// =================================
// KK FISH CLUB ADMIN
// admin.js
// =================================


// LOGIN DETAILS

const username = "kkfishgdk@123";
const password = "kkfishgdkclub";



// LOAD SAVED FISH

let fishes = JSON.parse(
localStorage.getItem("kkfishData")
) || [];




// LOGIN FUNCTION

function login(){


let user =
document.getElementById("username").value;


let pass =
document.getElementById("password").value;



if(user === username && pass === password){


document.getElementById("loginPage")
.style.display="none";


document.getElementById("dashboard")
.style.display="block";


loadFish();


}

else{


alert("❌ Wrong Login Details");


}


}




// ADD FISH

function addFish(){


let name =
document.getElementById("fishName").value;


let price =
document.getElementById("fishPrice").value;
let image = document.getElementById("fishImage").value;

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





// DISPLAY FISH


function loadFish(){


let list =
document.getElementById("fishList");


if(!list)return;



list.innerHTML="";



fishes.forEach((fish,index)=>{


list.innerHTML += `


<div class="fish-card">


<h2>🐠 ${fish.name}</h2>


<p>
💰 Price: ₹${fish.price}
</p>


<p>
🎁 Offer: ${fish.offer}
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





// EDIT FISH


function editFish(index){


let name =
prompt(
"Enter Fish Name",
fishes[index].name
);



let price =
prompt(
"Enter Price",
fishes[index].price
);



let offer =
prompt(
"Enter Offer",
fishes[index].offer
);



fishes[index]={

name:name,

price:price,

offer:offer

};



saveFish();


loadFish();


}





// DELETE FISH


function deleteFish(index){


let check =
confirm("Delete this fish?");


if(check){


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
"🐠 ADMIN PANEL READY"
);
