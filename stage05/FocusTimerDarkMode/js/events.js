export default function Events({
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
}) {
  
  setTime.addEventListener('click', () => {
    let newMinutes = controls.set();
    if(!newMinutes) {
      timer.reset();
      return;
    }

    timer.updateDisplay(newMinutes, 0);
    timer.updateDisplay(newMinutes);
  });

  btnPlay.addEventListener('click', () => {
    timer.countdown();
  });

  btnStop.addEventListener('click', () => {
    timer.stop();
  });

  btnIncreaseTime.addEventListener('click', () => {
    controls.increaseFiveMinutes();
  });

  btnDecreaseTime.addEventListener('click', () => {
    controls.decreaseFiveMinutes();
  });
  
  btnForest.addEventListener('click', () => {
    sounds.handleBtnForest();
  });

  btnRain.addEventListener('click', () => {
    sounds.handleBtnRain();
  });

  btnCoffeeShop.addEventListener('click', () => {
    sounds.handleBtnCoffeeShop();
  });

  btnFirecamp.addEventListener('click', () => {
    sounds.handleBtnFirecamp();
  });

  forestVolume.addEventListener('click', (e) => {
    e.stopPropagation();
  });
  
  rainVolume.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  coffeeVolume.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  firecampVolume.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  forestVolume.addEventListener('input', () => {
    sounds.setVolume();
  });

  rainVolume.addEventListener('input', () => {
    sounds.setVolume();
  });

  coffeeVolume.addEventListener('input', () => {
    sounds.setVolume();
  });

  firecampVolume.addEventListener('input', () => {
    sounds.setVolume();
  });

  themeIcon.addEventListener('click', () => {
    body.classList.toggle('darkMode');
    lightMode.classList.toggle('unselectedTheme');
    darkMode.classList.toggle('unselectedTheme');
  });
}