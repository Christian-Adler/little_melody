// https://teropa.info/blog/2016/08/10/frequency-and-pitch.html

// Variablen
// =========
let tempo = 1.0;

const btnPlay = document.getElementById("play");
const updatePlayBtn = () => {
  btnPlay.innerHTML = MUSIC.isPlaying ? "&#9616;&nbsp;&#9612;" : "&#9654;";
};

// create web audio api context
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let oscillator;

const gainNode = audioCtx.createGain();
gainNode.gain.value = 0.2; // setting it to 10%
gainNode.connect(audioCtx.destination);

function playMelody(melody) {
  const melod = [...melody];
  
  // create Oscillator node
  oscillator = audioCtx.createOscillator();
  
  // oscillator.connect(audioCtx.destination); //original
  oscillator.connect(gainNode); // mit lautstaerke
  
  // Das ganze Lied im voraus schedulen - keine Klicks zwischen den Toenen.
  let calculatedTime = audioCtx.currentTime;
  let previousDuration = 0; // den aktuellen Ton immer erst nach der previousDuration
  let previousFrequency = 0;
  const sameFrequencyPause = 0.01;
  for (const melodItem of melod) {
    if (melodItem.type === MELODY_ITEM_TYPE.NOTE) {
      calculatedTime += previousDuration;
      const frequency = melodItem.frequency;
      if (frequency === previousFrequency) {
        // TODO ueber lautstaerke? Am visualiszer sieht man so einen klick
        oscillator.frequency.setValueAtTime(
          0,
          Math.max(0, calculatedTime - sameFrequencyPause)
        );
      }
      oscillator.frequency.setValueAtTime(frequency, calculatedTime);
      
      previousDuration = melodItem.duration * tempo;
      previousFrequency = frequency;
    }
    else if (melodItem.type === MELODY_ITEM_TYPE.PAUSE) {
      calculatedTime += previousDuration;
      
      oscillator.frequency.setValueAtTime(0, calculatedTime);
      
      previousDuration = melodItem.duration * tempo;
      previousFrequency = 0;
    }
  }
  // Am Endo noch letzten Ton spielen und dann auf 0Hz gehen.
  calculatedTime += previousDuration;
  oscillator.frequency.setValueAtTime(0, calculatedTime);
  
  oscillator.start();
  oscillator.onended = () => {
    MUSIC.stop();
  };
  
  oscillator.stop(calculatedTime);
}

const stopPlaying = () => {
  if (oscillator) oscillator.stop(audioCtx.currentTime);
  oscillator = null;
};

btnPlay.addEventListener("click", () => {
  MUSIC.toggle();
});
