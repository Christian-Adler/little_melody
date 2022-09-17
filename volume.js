(() => {
  const rangeVolume = document.getElementById("volume");

  const setVolume = (value = 20, max = 100) => {
    const fraction = value / max;
    // Let's use an x*x curve (x-squared) since simple linear (x) does not sound as good.
    gainNode.gain.value = fraction * fraction;

    rangeVolume.style.backgroundColor = "rgb(" + fraction * 256 + ",0,100)";
  };

  function changeVolume(rangeEvent) {
    const element = rangeEvent.target;
    const volume = parseInt(element.value);
    const max = parseInt(element.max);
    setVolume(volume, max);
  }

  if (rangeVolume) {
    rangeVolume.addEventListener("input", changeVolume);
    //rangeVolume.value = 40;
    setVolume(20);
  }
})();
