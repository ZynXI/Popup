window.onload = () =>{

if (sessionStorage.x != 1) {
let divPopUp = document.createElement('div');
divPopUp.id = 'popup-newsletter';
divPopUp.innerHTML = '';
divPopUp.style.position = 'relative';
divPopUp.style.zIndex = '999';
document.body.appendChild(divPopUp);
setTimeout(window.onload = () =>{jQuery("#popup-newsletter").load("https://cdn.jsdelivr.net/gh/ZynXI/Popup@main/UP1.html");}, 3000);
} else {
  
}
  
}
// Get the modal
var modalpopup = document.getElementById("popup-newsletter");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the <button> element that closes the modal
var button = document.getElementsByClassName("sib-form-block__button-with-loader")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalpopup.style.display = "none";
}

// When the user clicks on the button, close the modal
button.onclick = function() {
  modalpopup.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modalpopup.style.display = "none";
  }
}
