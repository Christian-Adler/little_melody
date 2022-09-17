(() => {
  const visualize = 2; // 1 wave, 2 frequency bars, 3 frequency line
  const showPeaks = true;
  
  const analyser = audioCtx.createAnalyser();
  gainNode.connect(analyser);
  // analyser.fftSize = 1024; // 2048 fuer line 256 fuer bar;
  analyser.fftSize = 8192; // 2048 fuer line 256 fuer bar;
  analyser.minDecibels = -80;
  analyser.maxDecibels = -10;
  analyser.smoothingTimeConstant = 0.85;
  
  const bufferLength = analyser.frequencyBinCount;
  
  console.log("bufferLength: ", bufferLength);
  
  const dataArray = new Uint8Array(bufferLength);
  const dataPeaksArray = new Uint8Array(bufferLength);
  analyser.getByteTimeDomainData(dataArray);
  
  const updatePeaksArray = () => {
    for (let i = 0; i < dataPeaksArray.length; i++) {
      const dataVal = dataArray[i];
      const peakVal = dataPeaksArray[i];
      if (dataVal > peakVal) dataPeaksArray[i] = dataVal;
      else if (peakVal > 0) dataPeaksArray[i] = dataPeaksArray[i] - 1;
    }
  };
  
  const WIDTH = 1024;
  const HEIGHT = 256;
  
  // draw an oscilloscope of the current audio source
  var canvas = document.getElementById("drawArea");
  //canvas.style.width = WIDTH + 'px';
  var canvasCtx = canvas.getContext("2d");
  //console.log(ctx); // CanvasRenderingContext2D { /* ... */ }
  canvasCtx.width = WIDTH;
  canvasCtx.height = HEIGHT;
  
  canvasCtx.fillStyle = "#090909";
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
  
  let requestAnimationFrameId = null;
  let stopTime = 0;
  
  function draw() {
    /* drawVisual = */
    
    // noch 5s nachzeichnen lassen...
    if (!MUSIC.isPlaying) {
      if (new Date().getTime() - stopTime > 5000) return;
    }
    
    if (visualize === 1) {
      analyser.getByteTimeDomainData(dataArray);
      
      canvasCtx.fillStyle = "rgb(0, 0, 0)";
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
      
      canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = "rgb(255,255,255)";
      canvasCtx.lineJoin = "round";
      canvasCtx.lineCap = "round";
      
      canvasCtx.beginPath();
      
      const sliceWidth = WIDTH / bufferLength;
      // console.log('sliceWidth',sliceWidth);
      let x = sliceWidth * 0.5;
      
      for (let i = 0; i < bufferLength; i++) {
        const value = dataArray[i];
        
        const v = value / 256;
        const y = v * HEIGHT;
        
        if (i === 0) {
          canvasCtx.moveTo(x, y);
        }
        else {
          canvasCtx.lineTo(x, y);
        }
        
        x += sliceWidth;
      }
      
      //canvasCtx.lineTo(WIDTH, HEIGHT / 2);
      canvasCtx.stroke();
    }
    else if (visualize === 2) {
      analyser.getByteFrequencyData(dataArray);
      
      if (showPeaks) updatePeaksArray();
      
      canvasCtx.fillStyle = "#090909";
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
      
      const interrestingBufferLength = bufferLength / 10;
      
      const sliceWidth = WIDTH / interrestingBufferLength; //* 2.5;
      // console.log('sliceWidth',sliceWidth);
      let x = 0; // sliceWidth * 0.5;
      // console.log(JSON.stringify(dataArray));
      for (let i = 0; i < interrestingBufferLength; i++) {
        const value = dataArray[i];
        const peakValue = dataPeaksArray[i];
        
        // const v = value / 256;
        const v = value / 200;
        const y = v * HEIGHT;
        const vP = peakValue / 200;
        const yP = vP * HEIGHT;
        
        // canvasCtx.fillStyle = 'rgb(' + (y / HEIGHT * 255) + ',150,50)';
        canvasCtx.fillStyle =
          "rgb(" + (y / HEIGHT) * 255 + "," + (x / WIDTH) * 255 + ",100)";
        canvasCtx.fillRect(x, HEIGHT - y, sliceWidth, y);
        
        if (showPeaks) {
          canvasCtx.fillStyle = "rgb(255,255,255)";
          canvasCtx.fillRect(x, HEIGHT - yP - 1, sliceWidth, 1);
        }
        
        x += sliceWidth;
      }
    }
    else if (visualize === 3) {
      analyser.getByteFrequencyData(dataArray);
      
      if (showPeaks) updatePeaksArray();
      
      canvasCtx.fillStyle = "#090909";
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
      
      canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = "rgb(255,255,255)";
      canvasCtx.lineJoin = "round";
      canvasCtx.lineCap = "round";
      
      const interrestingBufferLength = bufferLength / 10;
      
      const sliceWidth = WIDTH / interrestingBufferLength; //* 2.5;
      // console.log('sliceWidth',sliceWidth);
      let x = sliceWidth * 0.5;
      
      canvasCtx.beginPath();
      
      for (let i = 0; i < interrestingBufferLength; i++) {
        const value = dataArray[i];
        const peakValue = dataPeaksArray[i];
        
        // const v = value / 256;
        const v = value / 200;
        const y = v * HEIGHT;
        const vP = peakValue / 200;
        const yP = vP * HEIGHT;
        
        // canvasCtx.fillStyle = 'rgb(' + (y / HEIGHT * 256) + ',150,50)';
        // canvasCtx.fillStyle =         "rgb(" + (y / HEIGHT) * 256 + "," + (x / WIDTH) * 256 + ",100)";
        
        if (showPeaks) {
          canvasCtx.fillStyle = "rgb(255,255,255)";
          canvasCtx.fillRect(x, HEIGHT - yP - 1, sliceWidth, 1);
        }
        
        if (i === 0) {
          canvasCtx.moveTo(x, HEIGHT - y);
        }
        else {
          canvasCtx.lineTo(x, HEIGHT - y);
        }
        
        x += sliceWidth;
      }
      canvasCtx.stroke();
    }
    
    requestAnimationFrameId = requestAnimationFrame(draw);
  }
  
  function stopDrawing() {
    // cancelAnimationFrame(draw);
    stopTime = new Date().getTime();
  }
  
  MUSIC.analyserStartDrawing = draw;
  MUSIC.analyserStopDrawing = stopDrawing;
})();
