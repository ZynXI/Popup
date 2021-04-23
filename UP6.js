window.onload = () =>{

if (sessionStorage.x != 1) {
let divPopUp = document.createElement('div');
divPopUp.id = 'popup-newsletter';
divPopUp.innerHTML = '';
divPopUp.style.position = 'relative';
divPopUp.style.zIndex = '999';
document.body.appendChild(divPopUp);
setTimeout(window.onload = () =>{jQuery("#popup-newsletter").load("https://cdn.jsdelivr.net/gh/ZynXI/Popup@main/UP2.html");}, 3000);
} else {
  
}
  
}

// Get the <button> element that closes the modal
var button = document.getElementsByClassName("sib-form-block__button-with-loader")[0];

// When the user clicks on the button, close the modal
button.onclick = function() {
  modal.style.display = "none";
}
