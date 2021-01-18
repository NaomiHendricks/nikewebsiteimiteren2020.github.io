// JavaScript Document
// Kleurweergave van schoen
// aanroepen
var schoenImage0 = document.querySelector('#plaatje0');
var schoenImage1 = document.querySelector('#plaatje1');
var schoenImage2 = document.querySelector('#plaatje2');
var schoenImage3 = document.querySelector('#plaatje3');
var schoenImage4 = document.querySelector('#plaatje4');

var kleurZwartKnop = document.querySelector('#kleur-zwart');
var kleurWitKnop = document.querySelector('#kleur-wit');

// Gedrag
function maakSchoenenWit(event) {
    kleurWitKnop.className = "bordered";
    kleurZwartKnop.className = "";

    schoenImage0.src = "../images/nike-air-max-wit.jpg";
    schoenImage1.src = "../images/nike-air-max-plus-wit1.jpg";
    schoenImage2.src = "../images/nike-air-max-plus-wit2.jpg";
    schoenImage3.src = "../images/nike-air-max-plus-wit3.jpg";
    schoenImage4.src = "../images/nike-air-max-plus-wit4.jpg";
}

function maakSchoenenZwart(event) {
    kleurZwartKnop.className = "bordered";
    kleurWitKnop.className = "";

    schoenImage0.src = "../images/nike-air-max-plus.jpg";
    schoenImage1.src = "../images/nike-air-max-plus1.jpg";
    schoenImage2.src = "../images/nike-air-max-plus2.jpg";
    schoenImage3.src = "../images/nike-air-max-plus4.jpg";
    schoenImage4.src = "../images/nike-air-max-plus5.jpg";
}

// Activeren
kleurZwartKnop.addEventListener("click", maakSchoenenZwart);
kleurWitKnop.addEventListener("click", maakSchoenenWit);


// menu slider function
function openNav() {
    document.getElementById("mySidenav").style.width = "340px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }