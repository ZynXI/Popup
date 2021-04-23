// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
    
// Get the button close
var popupclose = document.getElementById("popupclose");

// Get the <button> element that closes the modal
var button = document.getElementsByClassName("sib-form-block__button-with-loader")[0];


// When the user clicks on the button, close the modal
button.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks on the button, close the modal
popupclose.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
    
