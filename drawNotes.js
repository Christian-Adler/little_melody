(() => {
    // import
    const MUSIC = window.MUSIC;
    
    const color = "rgb(0,0,0)";
    const canvas = document.getElementById("drawNotes");
    //canvas.style.width = WIDTH + 'px';
    const ctx = canvas.getContext("2d");
    //console.log(ctx); // CanvasRenderingContext2D { /* ... */ }
    
    let WIDTH = 1024;
    const HEIGHT = 120;
    
    const y0 = HEIGHT / 2;
    const lineDistance = 10;
    
    const clear = () => {
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);
    };
    
    const resizeCanvas = () => {
      canvas.width = WIDTH;
      canvas.height = HEIGHT;
      ctx.width = WIDTH;
      ctx.height = HEIGHT;
      clear();
    };
    resizeCanvas();
    
    const drawLines = () => {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = color;
      
      ctx.moveTo(0, y0);
      ctx.lineTo(WIDTH, y0);
      ctx.moveTo(0, y0 + lineDistance);
      ctx.lineTo(WIDTH, y0 + lineDistance);
      ctx.moveTo(0, y0 + 2 * lineDistance);
      ctx.lineTo(WIDTH, y0 + 2 * lineDistance);
      ctx.moveTo(0, y0 - lineDistance);
      ctx.lineTo(WIDTH, y0 - lineDistance);
      ctx.moveTo(0, y0 - 2 * lineDistance);
      ctx.lineTo(WIDTH, y0 - 2 * lineDistance);
      
      ctx.stroke();
    };
    
    const drawActPos = () => {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgb(255,0,0)";
      ctx.moveTo(WIDTH / 2, 0);
      ctx.lineTo(WIDTH / 2, HEIGHT);
      ctx.stroke();
    };
    
    const drawNote = ({
                        duration = DAUER_VIERTEL,
                        frequency = TON_A1,
                        position = 0,
                      }) => {
      // ueberhaupt in sichtbarem Bereich?
      if (position < lineDistance || position > WIDTH + lineDistance) return;
      
      let yPos = y0;
      
      if (frequency === TON_F0) yPos = y0 + 5 * lineDistance;
      else if (frequency === TON_G0) yPos = y0 + 4.5 * lineDistance;
      else if (frequency === TON_A0) yPos = y0 + 4 * lineDistance;
      else if (frequency === TON_H0) yPos = y0 + 3.5 * lineDistance;
      else if (frequency === TON_C1) yPos = y0 + 3 * lineDistance;
      else if (frequency === TON_D1) yPos = y0 + 2.5 * lineDistance;
      else if (frequency === TON_E1) yPos = y0 + 2 * lineDistance;
      else if (frequency === TON_F1) yPos = y0 + 1.5 * lineDistance;
      else if (frequency === TON_G1) yPos = y0 + lineDistance;
      else if (frequency === TON_A1) yPos = y0 + 0.5 * lineDistance;
      else if (frequency === TON_H1) yPos = y0; // + 0 * lineDistance;
      else if (frequency === TON_C2) yPos = y0 - 0.5 * lineDistance;
      else if (frequency === TON_D2) yPos = y0 - /*1 * */ lineDistance;
      else if (frequency === TON_E2) yPos = y0 - 1.5 * lineDistance;
      else if (frequency === TON_F2) yPos = y0 - 2 * lineDistance;
      else if (frequency === TON_G2) yPos = y0 - 2.5 * lineDistance;
      else if (frequency === TON_A2) yPos = y0 - 3 * lineDistance;
      else if (frequency === TON_H2) yPos = y0 - 3.5 * lineDistance;
      else if (frequency === TON_C3) yPos = y0 - 4 * lineDistance;
      
      // Hilfslinie?
      const drawHelpLine = (y) => {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = color;
        ctx.moveTo(position - lineDistance, y);
        ctx.lineTo(position + lineDistance, y);
        ctx.stroke();
      };
      if (yPos >= y0 + 3 * lineDistance) drawHelpLine(y0 + 3 * lineDistance);
      if (yPos >= y0 + 4 * lineDistance) drawHelpLine(y0 + 4 * lineDistance);
      if (yPos >= y0 + 5 * lineDistance) drawHelpLine(y0 + 5 * lineDistance);
      if (yPos <= y0 - 3 * lineDistance) drawHelpLine(y0 - 3 * lineDistance);
      
      // Notenkoerper
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.arc(position, yPos, lineDistance / 2, 0, 2 * Math.PI);
      ctx.stroke();
      if (duration <= DAUER_VIERTEL)
        // gefuellt?
        ctx.fill();
      
      // Punkt nach Note
      if (duration === DAUER_DREI_SECHZENTEL || duration === DAUER_DREI_VIERTEL) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(position + lineDistance, yPos, lineDistance / 4, 0, 2 * Math.PI);
        if (duration <= DAUER_VIERTEL)
          // gefuellt?
          ctx.fill();
      }
      
      if (duration <= DAUER_HALB) {
        // Notenstrich
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = color;
        
        // abhaengig von y hoch oder runter -/+
        if (frequency >= 490) {
          // runter
          ctx.moveTo(position - lineDistance / 2, yPos);
          ctx.lineTo(position - lineDistance / 2, yPos + 3 * lineDistance);
          // Faehnchen?
          if (duration < DAUER_VIERTEL) {
            ctx.lineTo(
              position - lineDistance / 2 - lineDistance / 1.5,
              yPos + 3 * lineDistance - lineDistance / 4
            );
            if (duration < DAUER_ACHTEL) {
              ctx.moveTo(position - lineDistance / 2, yPos + 3 * lineDistance - 2 * lineDistance / 4);
              ctx.lineTo(
                position - lineDistance / 2 - lineDistance / 1.5,
                yPos + 3 * lineDistance - 3 * lineDistance / 4
              );
            }
          }
        }
        else {
          // hoch
          ctx.moveTo(position + lineDistance / 2, yPos);
          ctx.lineTo(position + lineDistance / 2, yPos - 3 * lineDistance);
          // Faehnchen?
          if (duration < DAUER_VIERTEL) {
            ctx.lineTo(
              position + lineDistance / 2 + lineDistance / 1.5,
              yPos - 3 * lineDistance + lineDistance / 4
            );
            if (duration < DAUER_ACHTEL) {
              ctx.moveTo(position + lineDistance / 2, yPos - 3 * lineDistance + 2 * lineDistance / 4);
              ctx.lineTo(
                position + lineDistance / 2 + lineDistance / 1.5,
                yPos - 3 * lineDistance + 3 * lineDistance / 4
              );
            }
          }
        }
        
        ctx.stroke();
      }
    };
    
    const drawPause = ({
                         duration = DAUER_VIERTEL,
                         position = 0,
                       }) => {
      // ueberhaupt in sichtbarem Bereich?
      if (position < lineDistance || position > WIDTH + lineDistance) return;
      
      let yPos = y0;
      
      // https://noten-lesen-lernen.de/pausenwerte/
      if (duration === DAUER_SECHZENTEL) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(position, yPos + lineDistance / 2, lineDistance / 3, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(position + lineDistance / 4, yPos - lineDistance / 2, lineDistance / 3, 0, 2 * Math.PI);
        ctx.fill();
        
        // Strich
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = color;
        
        ctx.moveTo(position + lineDistance / 4, yPos - lineDistance / 4);
        ctx.lineTo(position + lineDistance / 4 + lineDistance * 3 / 4, yPos - lineDistance / 2 - lineDistance / 2);
        ctx.moveTo(position, yPos + lineDistance * 3 / 4);
        ctx.lineTo(position + lineDistance * 3 / 4, yPos + lineDistance / 2 - lineDistance / 2);
        
        ctx.moveTo(position + lineDistance / 4 + lineDistance * 3 / 4, yPos - lineDistance / 2 - lineDistance / 2);
        ctx.lineTo(position + lineDistance / 4, yPos + 2 * lineDistance);
        ctx.stroke();
      }
      else if (duration === DAUER_ACHTEL) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(position + lineDistance / 4, yPos - lineDistance / 2, lineDistance / 3, 0, 2 * Math.PI);
        ctx.fill();
        
        // Strich
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = color;
        
        ctx.moveTo(position + lineDistance / 4, yPos - lineDistance / 4);
        ctx.lineTo(position + lineDistance / 4 + lineDistance * 3 / 4, yPos - lineDistance / 2 - lineDistance / 2);
        
        ctx.moveTo(position + lineDistance / 4 + lineDistance * 3 / 4, yPos - lineDistance / 2 - lineDistance / 2);
        ctx.lineTo(position + lineDistance / 2, yPos + lineDistance);
        ctx.stroke();
      }
      else if (duration === DAUER_VIERTEL) {
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = color;
        
        ctx.moveTo(position, yPos - lineDistance * 3 / 2);
        ctx.lineTo(position + lineDistance / 2, yPos - lineDistance * 2 / 3);
        ctx.lineTo(position, yPos - lineDistance / 3);
        ctx.lineTo(position + lineDistance / 2, yPos + lineDistance * 2 / 3);
        ctx.lineTo(position - lineDistance / 5, yPos + lineDistance * 5 / 12);
        ctx.lineTo(position - lineDistance / 3, yPos + lineDistance * 3 / 4);
        ctx.lineTo(position, yPos + lineDistance * 4 / 3);
        
        ctx.stroke();
      }
      else if (duration === DAUER_HALB) {
        ctx.beginPath();
        ctx.fillStyle = color;
        
        ctx.moveTo(position, yPos);
        ctx.lineTo(position, yPos - lineDistance / 2);
        ctx.lineTo(position + lineDistance, yPos - lineDistance / 2);
        ctx.lineTo(position + lineDistance, yPos);
        
        ctx.fill();
      }
      else if (duration === DAUER_GANZ) {
        ctx.beginPath();
        ctx.fillStyle = color;
        
        ctx.moveTo(position, yPos - lineDistance);
        ctx.lineTo(position, yPos - lineDistance / 2);
        ctx.lineTo(position + lineDistance, yPos - lineDistance / 2);
        ctx.lineTo(position + lineDistance, yPos - lineDistance);
        
        ctx.fill();
      }
    };
    
    const drawTaktstrich = (position) => {
      // ueberhaupt in sichtbarem Bereich?
      if (position < lineDistance || position > WIDTH + lineDistance) return;
      // Notenkoerper
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = color;
      ctx.moveTo(position, y0 - 2 * lineDistance);
      ctx.lineTo(position, y0 + 2 * lineDistance);
      ctx.stroke();
    };
    
    let position = WIDTH / 2;
    const taktWidth = 400; // muss mit Tempo in Relation gesetzt werden... bei tempo 1 ist der Takt in 1s zu bewegen
    let requestAnimationFrameId = null;
    
    const drawMelody = () => {
      clear();
      const melody = MUSIC.actMelody.melody;
      // console.log(position);
      
      drawLines();
      let pos = position;
      for (const melodyItem of melody) {
        if (melodyItem.type === MELODY_ITEM_TYPE.NOTE) {
          const drawPos = pos + (melodyItem.duration / 2) * taktWidth;
          drawNote({ ...melodyItem, position: drawPos });
          pos += melodyItem.duration * taktWidth;
        }
        else if (melodyItem.type === MELODY_ITEM_TYPE.PAUSE) {
          const drawPos = pos + (melodyItem.duration / 2) * taktWidth;
          drawPause({ ...melodyItem, position: drawPos });
          pos += melodyItem.duration * taktWidth;
        }
        else if (melodyItem.type === MELODY_ITEM_TYPE.TAKTSTRICH) {
          drawTaktstrich(pos);
        }
      }
      drawActPos();
      
      if (MUSIC.isPlaying) {
        requestAnimationFrameId = requestAnimationFrame(() => {
          position =
            WIDTH / 2 -
            (taktWidth / tempo) * (audioCtx.currentTime - MUSIC.startTime);
          drawMelody();
        });
      }
    };
    
    const resizeHandler = () => {
      WIDTH = canvas.offsetWidth;
      position = WIDTH / 2;
      // console.log("WIDTH: ", WIDTH);
      resizeCanvas();
      cancelAnimationFrame(requestAnimationFrameId);
      drawMelody();
    };
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    
    const startDrawing = () => {
      position = WIDTH / 2;
      drawMelody();
    };
    
    const stopDrawing = () => {
      cancelAnimationFrame(requestAnimationFrameId);
    };
    
    // export
    MUSIC.start = () => {
      MUSIC.startTime = audioCtx.currentTime;
      MUSIC.isPlaying = true;
      document.getElementById('title').innerText = MUSIC.actMelody.title;
      playMelody();
      startDrawing();
      updatePlayBtn();
      MUSIC.analyserStartDrawing();
    };
    MUSIC.stop = () => {
      MUSIC.isPlaying = false;
      stopPlaying();
      stopDrawing();
      updatePlayBtn();
      MUSIC.analyserStopDrawing();
    };
    MUSIC.toggle = () => {
      if (MUSIC.isPlaying) MUSIC.stop();
      else MUSIC.start();
    };
  }
)();
