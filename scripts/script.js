
let cardBackdrop = document.querySelectorAll(".card"); 
let backdrop = document.querySelector(".backdrop");
let popupOne = document.querySelector(".popup__1");
let popupTwo = document.querySelector(".popup__2");
let popupThree = document.querySelector(".popup__3");
let popupFour = document.querySelector(".popup__4");
let popupFive = document.querySelector(".popup__5");
let popupSix = document.querySelector(".popup__6");

//Side Navbar 
let hamburgerCheckbox = document.querySelector("input[name=checkbox]");
let sideNav = document.getElementById("sideNav");

//Pop up close icon
let popupCloseIcon = document.querySelector(".popup__close");
let popupCloseCheckbox = document.querySelector(".popup__close-checkbox");



for(let i = 0; i < cardBackdrop.length ; i++) {
    cardBackdrop[i].addEventListener("click", function() {

        if(i === 0) {
            backdrop.classList.add("open"); 
            popupOne.classList.add("open");
            popupCloseIcon.classList.add("open");
        } else if(i === 1) {
            backdrop.classList.add("open"); 
            popupTwo.classList.add("open");
            popupCloseIcon.classList.add("open");
        } else if(i === 2) {
            backdrop.classList.add("open"); 
            popupThree.classList.add("open");
            popupCloseIcon.classList.add("open");
        } else if(i === 3) {
            backdrop.classList.add("open"); 
            popupFour.classList.add("open");
            popupCloseIcon.classList.add("open");
        } else if(i === 4) {
            backdrop.classList.add("open"); 
            popupFive.classList.add("open");
            popupCloseIcon.classList.add("open");
        } else if(i === 5) {
            backdrop.classList.add("open"); 
            popupSix.classList.add("open");
            popupCloseIcon.classList.add("open");
        }
        
    });
}




// cardOne.addEventListener("click", function() {
//     popupOne.classList.add("open");
// });
//Close popup

function closePopup() {
    backdrop.classList.remove("open");
    popupOne.classList.remove("open");
    popupTwo.classList.remove("open");
    popupThree.classList.remove("open");
    popupFour.classList.remove("open");
    popupFive.classList.remove("open");
    popupSix.classList.remove("open");
    sideNav.style.width ="0";
    sideNav.style.opacity ="0";
    sideNav.style.visibility ="hidden";
    popupCloseIcon.classList.remove("open");
    
};

backdrop.addEventListener("click", closePopup);



//Hamburger Menu Function

hamburgerCheckbox.addEventListener( 'change', function() {
    if(this.checked) {
        backdrop.classList.add("open");
        sideNav.style.width ="70vw";
        sideNav.style.opacity ="1";
        sideNav.style.visibility ="visible";
    // } else {
    //     backdrop.classList.remove("open");
    //     sideNav.style.width ="0";
    //     sideNav.style.opacity ="0";
    //     sideNav.style.visibility ="hidden";
    }

});

popupCloseCheckbox.addEventListener( 'change', function() {
    if(this.checked) {
        popupOne.classList.remove("open");
        popupTwo.classList.remove("open");
        popupThree.classList.remove("open");
        popupFour.classList.remove("open");
        popupFive.classList.remove("open");
        popupSix.classList.remove("open");
        popupCloseIcon.classList.remove("open");
        backdrop.classList.remove("open");
    } else {
        popupOne.classList.remove("open");
        popupTwo.classList.remove("open");
        popupThree.classList.remove("open");
        popupFour.classList.remove("open");
        popupFive.classList.remove("open");
        popupSix.classList.remove("open");
        popupCloseIcon.classList.remove("open");
        backdrop.classList.remove("open");
    }
});

backdrop.addEventListener("click", function() {
    hamburgerCheckbox.checked = false;
    popupCloseCheckbox.checked = false;
});
