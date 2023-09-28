const setTime = document.querySelector(".timer");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");

const finalTimerAudio = new Audio("audio/Achievement.wav");
const btnPlay = document.querySelector("#btnPlay");
const btnStop = document.querySelector("#btnStop");
const btnIncreaseTime = document.querySelector("#btnIncreaseTime");
const btnDecreaseTime = document.querySelector("#btnDecreaseTime");

const btnForest = document.querySelector("#btnForest");
const btnRain = document.querySelector("#btnRain");
const btnCoffeeShop = document.querySelector("#btnCoffeeShop");
const btnFirecamp = document.querySelector("#btnFirecamp");

const forestAudio = new Audio("audio/Floresta.wav");
const rainAudio = new Audio("audio/Chuva.wav");
const coffeeShopAudio = new Audio("audio/Cafeteria.wav");
const firecampAudio = new Audio("audio/Lareira.wav");

export {
  setTime,
  minutesDisplay,
  secondsDisplay,
  finalTimerAudio,
  btnPlay,
  btnStop,
  btnIncreaseTime,
  btnDecreaseTime,
  btnForest,
  btnRain,
  btnCoffeeShop,
  btnFirecamp,
  forestAudio,
  rainAudio,
  coffeeShopAudio,
  firecampAudio,
};
