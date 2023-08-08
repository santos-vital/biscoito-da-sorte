const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const imgCookie = document.querySelector("#img-cookie");
const btnOpenOtherCookie = document.querySelector("#btnOpenOtherCookie");

imgCookie.addEventListener("mousedown", handleOpenCookie);

btnOpenOtherCookie.addEventListener("click", handleOpenOtherCookie);

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");  
}

function handleOpenCookie(e) {
  if(e.buttons == 1) {
    toggleScreen();
  }
}

function handleOpenOtherCookie(e) {
  if(e) {
    toggleScreen();
  }
}