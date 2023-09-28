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

}