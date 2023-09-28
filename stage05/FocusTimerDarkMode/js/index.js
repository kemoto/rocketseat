import Controls from "./controls.js";
import Timer from "./timer.js";
import Events from "./events.js";
import Sounds from "./audio.js"
import {
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
  forestVolume,
  forestAudio,
  rainAudio,
  coffeeShopAudio,
  firecampAudio,
  themeIcon,
  body,
  lightMode,
  darkMode,
} from "./elements.js";


//Injeção de dependência das funções que estão executando

const timer = Timer({
  secondsDisplay,
  minutesDisplay,
  finalTimerAudio,
});

const controls = Controls({
  minutesDisplay,
  timer
});

const sounds = Sounds({
  btnForest,
  btnRain,
  btnCoffeeShop,
  btnFirecamp,
  forestAudio,
  rainAudio,
  coffeeShopAudio,
  firecampAudio,
  forestVolume,
  rainVolume,
  coffeeVolume,
  firecampVolume,
});

Events({
  controls,
  timer,
  sounds,
  setTime,
  btnPlay,
  btnStop,
  btnIncreaseTime,
  btnDecreaseTime,
  btnForest,
  btnRain,
  btnCoffeeShop,
  btnFirecamp,
  forestVolume,
  rainVolume,
  coffeeVolume,
  firecampVolume,
  themeIcon,
  body,
  lightMode,
  darkMode,
  });
