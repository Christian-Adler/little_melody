(() => {
  const liedAnfang = [
    { type: MELODY_ITEM_TYPE.TAKTSTRICH }, // Kommentar Taktstrich 1
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_A1, duration: DAUER_VIERTEL },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_C2, duration: DAUER_DREI_SECHZENTEL },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_A1, duration: DAUER_SECHZENTEL, },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_A1, duration: DAUER_SECHZENTEL, },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_A1, duration: DAUER_SECHZENTEL, },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_D2, duration: DAUER_ACHTEL, },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_A1, duration: DAUER_ACHTEL, },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_G1, duration: DAUER_ACHTEL, },
    { type: MELODY_ITEM_TYPE.TAKTSTRICH },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_A1, duration: DAUER_VIERTEL, },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_E2, duration: DAUER_DREI_SECHZENTEL, },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_A1, duration: DAUER_SECHZENTEL, },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_A1, duration: DAUER_SECHZENTEL, },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_A1, duration: DAUER_SECHZENTEL, },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_F2, duration: DAUER_ACHTEL, },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_E2, duration: DAUER_ACHTEL, },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_C2, duration: DAUER_ACHTEL, },
    { type: MELODY_ITEM_TYPE.TAKTSTRICH },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_A1, duration: DAUER_ACHTEL, },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_E2, duration: DAUER_ACHTEL, },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_A2, duration: DAUER_ACHTEL, },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_A1, duration: DAUER_SECHZENTEL, },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_G1, duration: DAUER_SECHZENTEL, },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_G1, duration: DAUER_SECHZENTEL, },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_G1, duration: DAUER_SECHZENTEL, },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_E1, duration: DAUER_ACHTEL, },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_H1, duration: DAUER_ACHTEL, },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_A1, duration: DAUER_ACHTEL, },
    { type: MELODY_ITEM_TYPE.TAKTSTRICH },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_A1, duration: DAUER_HALB, },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_A2, duration: DAUER_VIERTEL, },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_A2, duration: DAUER_VIERTEL, },
  ];
  
  const melody = [
    // ...liedAnfang,
    // ...liedAnfang,
    
    { type: MELODY_ITEM_TYPE.TAKTSTRICH },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_A0, duration: DAUER_VIERTEL, },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_A1, duration: DAUER_DREI_SECHZENTEL, },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_G1, duration: DAUER_SECHZENTEL, },
    
    
    PAUSE.SECHZENTEL,
    { type: MELODY_ITEM_TYPE.TAKTSTRICH },
  ];
  
  window.MUSIC.addMelody({ title: 'AxelF', melody });
})();
