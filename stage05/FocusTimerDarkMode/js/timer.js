export default function Timer({secondsDisplay, minutesDisplay, finalTimerAudio}) {
  let timer;
  let minutes = Number(minutesDisplay.textContent);
  
  const updateDisplay = (newMinutes, seconds) => {
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? 0 : seconds;
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  };

  const reset = () => {
    updateDisplay(minutes, 0);
    clearTimeout(timer);
  }

  const stop = () => {
    clearTimeout(timer);
  }

  const countdown = () => {
    timer = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);

      updateDisplay(minutes, 0);

      if (minutes <= 0 && seconds <= 0) {
        finalTimerAudio.play();
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }

      updateDisplay(minutes, String(seconds - 1));

      countdown();
    }, 1000);
  };

  return {
    updateDisplay,
    reset,
    stop,
    countdown,
  };
}
