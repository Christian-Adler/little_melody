window.MUSIC = {
  isPlaying: false,
  startTime: 0,
  start: () => {
  },
  stop: () => {
  },
  toggle: () => {
  },
  analyserStartDrawing: () => {
  },
  analyserStopDrawing: () => {
  },
  melodies: [],
  actMelody: [],
  addMelody: (melody) => {
    const select = document.getElementById('selectMelody');
    const opt = document.createElement('option');
    opt.value = '' + MUSIC.melodies.length;
    MUSIC.melodies.push(melody);
    opt.innerHTML = melody.title;
    select.appendChild(opt);
  },
};
