// Variáveis
const closedCookie = document.querySelector('#closedCookie');
const btnReset = document.querySelector('#btnReset');
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
let phrase = document.querySelector('.screen2 p');
let phrases = [
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.', 
  'A vida trará coisas boas se tiver paciência.',
  'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
  'Não compense na ira o que lhe falta na razão.',
  'Defeitos e virtudes são apenas dois lados da mesma moeda.',
];
let randomNumber = Math.floor(Math.random() * 5);


// Funções
const handleCookieClick = () => {
  phrase.innerHTML = phrases[randomNumber];
  hide();
}

const hide = () => {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}

const reset = () => {
  randomNumber = Math.floor(Math.random() * 5);
  hide();
} 

// Eventos
closedCookie.addEventListener('click', handleCookieClick);
btnReset.addEventListener('click', reset);
