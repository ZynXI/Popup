window.onload = () =>{

if (sessionStorage.x != 1) {
let divPopUp = document.createElement('div');
divPopUp.id = 'popup-newsletter';
divPopUp.innerHTML = '';
divPopUp.style.position = 'relative';
divPopUp.style.zIndex = '999';
document.body.appendChild(divPopUp);
setTimeout(window.onload = () =>{jQuery("#popup-newsletter").load("https://cdn.jsdelivr.net/gh/ZynXI/Popup@main/PopUp3.0.html");}, 3000);
sessionStorage.x = 1
} else {
  
}
  
}
