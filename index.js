/************ Copyright 2021 Lorena Munoz. **************/
/************  All rights reserved. Lorena Projects. **************/


///// DETECTED BUTTON PRESS ///
var numberOfDrumButtoms = document.querySelectorAll(".drum").length;
for (var i = 0; i<numberOfDrumButtoms; i++) {
  // passing a function as a input so that it can be called at a later time.//
  // after I created an anonymous function.
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    //this--- is the identity of the buttont that triggered the event listener//
    //words color
    // this.style.color = "white";
    ///Detecting keyboard press and if a button was pressed and then I check the innerHTML of the button that got pressed
    var buttonInnerHTML = this.innerHTML;
    ///Pass this KEY by calling makeSOUND, passion int he buttonInnerHTML, which is essentially the innerHTML of the button that got pressed.
    makeSound(buttonInnerHTML);

  //calling the method up here
    buttonAnimation(buttonInnerHTML);
});
}
////DETECTING KEYBOARD PRESS /////
//if a key press was detected instead then I send the event.ley so tha key property of the event.

////ADD EVENT LISTENERS TO DETECT KEYBOAR STROKES AND IT WAS ADDED TO THE ENTIRE DOCUMENT INSTEAD OF SPECIFIC METHOD OR BUTTON OR ELEMENT
document.addEventListener("keypress", function(event) {
  ///I got red of the console.log(event); and instead I called makeSound and used the event.key
    makeSound(event.key);
  // alert("Key was pressed");
  //in case of the keyboard key pressed
    buttonAnimation(even.key);
});
///FUNCTION TO MAKE SOUNDS WITH THE KEYS
function makeSound(key) {
////swift here based on the key parameter and then it plays the relevant sound depending on which key was passed in.
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default: console.log(buttonInnerHTML);

  }
}

function buttonAnimation(currentKey) {
//this is the button that is going to change its style
  var activeButton = document.querySelector("." + currentKey);
//add the press class
  activeButton.classList.add("pressed");

  //anonymous function
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}

//////////////////


// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
//what to do when clic detected
