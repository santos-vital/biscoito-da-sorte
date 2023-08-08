let messages = [
  "A vida trará coisas boas se tiver paciência.",
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão.",
  "Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida."
];

let randomNumber = Math.floor(Math.random() * messages.length);
let randomMessage = messages[randomNumber];

const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const messageElement = document.querySelector(".screen2 p");
messageElement.innerText = randomMessage;

const imgCookie = document.querySelector("#img-cookie");
const btnOpenOtherCookie = document.querySelector("#btnOpenOtherCookie");

imgCookie.addEventListener('mousedown', handleOpenCookie);

btnOpenOtherCookie.addEventListener('click', handleOpenOtherCookie);

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");  
}

function handleOpenCookie(e) {
  if (e.buttons === 1) {
    toggleScreen();
  }
}

function handleOpenOtherCookie() {
  toggleScreen();
  
  randomNumber = Math.floor(Math.random() * messages.length);
  randomMessage = messages[randomNumber];
  messageElement.innerText = randomMessage;
}