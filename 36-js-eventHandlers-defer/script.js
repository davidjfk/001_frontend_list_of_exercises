// opdracht 1: Een click event vastmaken aan een button
const buttonAlertMe = document.getElementById('mybutton');

buttonAlertMe.addEventListener('click', function () { alert("button clicked") });
//but this won't work, beause argument 2 is not a function, but a function call:
buttonAlertMe.addEventListener('click', alert("button clicked"));

// opdracht 2 / 3: 
const buttonChangeBackground = document.getElementById('mybutton2');

const background = document.querySelector('body');
const toggleBackgroundColor = () => {
    background.classList.toggle("red-background");
}
buttonChangeBackground.addEventListener('click', toggleBackgroundColor);
// or: 
buttonChangeBackground.addEventListener('click', function () { toggleBackgroundColor() });
/*
an: so either, add to eventListener as argument 2:  
1) function M, but NOT a call to M  (!!!!!!),  or: 
2) add an anonymous function (that is inherently at the same time an anonymous function call (!!!) and add a call to function M to the body of this anonymous function. 
*/

/*feedback from Winc
or simply:   const bodyElement = document.body; 



*/