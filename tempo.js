(() => {
  const rangeTempo = document.getElementById("tempo");
  
  const setTempo = (value = 1, max = 2) => {
    console.log(value);
    stopPlaying();
    const fraction = value / max;
    // Let's use an x*x curve (x-squared) since simple linear (x) does not sound as good.
    tempo = value;
    
    rangeTempo.style.backgroundColor =
      "rgb(" + (1 - fraction) * 256 + ",0,100)";
  };
  
  function changeTempo(rangeEvent) {
    const element = rangeEvent.target;
    const tempo = parseFloat(element.value);
    const max = parseFloat(element.max);
    setTempo(tempo, max);
  }
  
  if (rangeTempo) {
    rangeTempo.addEventListener("input", changeTempo);
    setTempo(parseFloat(rangeTempo.value));
  }
})();
