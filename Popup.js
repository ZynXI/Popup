// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the <button> element that closes the modal
var button = document.getElementsByClassName("sib-form-block__button-with-loader")[0];

// When the user clicks on the button, open the modal
	btn.onclick = function() {
  	modal.style.display = "block";
}

// Affiche la popup automatiquement après 3s 
window.onload = () =>{

if (sessionStorage.x != 1) {
setTimeout("modal.style.display = 'block';", 3000);
sessionStorage.x = 1
} else {



}

}
	
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