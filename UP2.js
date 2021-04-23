window.onload = () =>{

if (sessionStorage.x != 1) {
let divPopUp = document.createElement('div');
divPopUp.id = 'popup-newsletter';
divPopUp.innerHTML = '';
divPopUp.style.position = 'relative';
divPopUp.style.zIndex = '999';
document.body.appendChild(divPopUp);
setTimeout(window.onload = () =>{jQuery("#popup-newsletter").load("https://cdn.jsdelivr.net/gh/ZynXI/Popup@main/UP.html");}, 3000);
} else {
  
}
  
}
// Get the modal
var modal = document.getElementById("popup-newsletter");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the <button> element that closes the modal
var button = document.getElementsByClassName("sib-form-block__button-with-loader")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks on the button, close the modal
button.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
