export default function Sounds({
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
}) {

  const handleBtnForest = () => {
    btnForest.classList.toggle('selected');
    btnRain.classList.remove('selected');
    btnCoffeeShop.classList.remove('selected');
    btnFirecamp.classList.remove('selected');
    
    if(btnForest.classList == 'selected') {
      rainAudio.pause();
      coffeeShopAudio.pause();
      firecampAudio.pause();
  
      forestAudio.play();
      forestAudio.loop = true;
    } else {
      forestAudio.pause();
    }
  }
  
  const handleBtnRain = () => {
    btnRain.classList.toggle('selected');
    btnForest.classList.remove('selected');
    btnCoffeeShop.classList.remove('selected');
    btnFirecamp.classList.remove('selected');
  
    if(btnRain.classList == 'selected') {
      forestAudio.pause();
      coffeeShopAudio.pause();
      firecampAudio.pause();
  
      rainAudio.play();
      rainAudio.loop = true;
    } else {
      rainAudio.pause();
    }
  }
  
  const handleBtnCoffeeShop = () => {
    btnCoffeeShop.classList.toggle('selected');
    btnForest.classList.remove('selected');
    btnRain.classList.remove('selected');
    btnFirecamp.classList.remove('selected');
  
    if(btnCoffeeShop.classList == 'selected') {
      forestAudio.pause();
      rainAudio.pause();
      firecampAudio.pause();
      
      coffeeShopAudio.play();
      coffeeShopAudio.loop = true;
    } else {
      coffeeShopAudio.pause();
    }
  }
  
  const handleBtnFirecamp = () => {
    btnFirecamp.classList.toggle('selected');
    btnForest.classList.remove('selected');
    btnRain.classList.remove('selected');
    btnCoffeeShop.classList.remove('selected');
  
    if(btnFirecamp.classList == 'selected') {
      forestAudio.pause();
      rainAudio.pause();
      coffeeShopAudio.pause();
  
      firecampAudio.play();
      firecampAudio.loop = true;
    } else {
      firecampAudio.pause();
    }
  }

  const setVolume = () => {
    forestAudio.volume = forestVolume.value / 100;
    rainAudio.volume = rainVolume.value / 100;
    coffeeShopAudio.volume = coffeeVolume.value / 100;
    firecampAudio.volume = firecampVolume.value / 100;
  }

  return {
    handleBtnForest,
    handleBtnRain,
    handleBtnCoffeeShop,
    handleBtnFirecamp,
    setVolume,
  }
}
