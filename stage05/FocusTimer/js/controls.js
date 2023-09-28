export default function Controls({minutesDisplay, timer}) {

  const set = () => {
    let newMinutes = prompt("Quantos minutos?");
    if (!newMinutes) {
      return false;
    }
    return newMinutes;
  };

  const play = () => {
    countdown();
  };

  const stop = () => {
    clearTimeout(timer);
  };

  const increaseFiveMinutes = () => {
    if (Number(minutesDisplay.textContent) <= 96) {
      timer.updateDisplay(Number(minutesDisplay.textContent) + 5);
    }
    if (Number(minutesDisplay.textContent) > 96 && Number(minutesDisplay.textContent) < 100) {
      timer.updateDisplay(Number(minutesDisplay.textContent) + 99 - Number(minutesDisplay.textContent));
    }
  };

  const decreaseFiveMinutes = () => {
    if (Number(minutesDisplay.textContent) >= 5) {
      timer.updateDisplay(Number(minutesDisplay.textContent) - 5);
      return;
    }
    if (Number(minutesDisplay.textContent) > 0 && Number(minutesDisplay.textContent) < 5) {
      timer.updateDisplay(Number(minutesDisplay.textContent) - Number(minutesDisplay.textContent));
    }
  };

  return {
    set,
    play,
    stop,
    increaseFiveMinutes,
    decreaseFiveMinutes,
  };
}
