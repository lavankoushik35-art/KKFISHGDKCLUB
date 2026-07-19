
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
