(() => {
  const liedAnfang = [
    ton(TON_A1, DAUER_VIERTEL),
    ton(TON_C2, DAUER_DREI_SECHZENTEL),
    ton(TON_A1, DAUER_SECHZENTEL),
    ton(TON_A1, DAUER_SECHZENTEL),
    ton(TON_A1, DAUER_SECHZENTEL),
    ton(TON_D2, DAUER_ACHTEL),
    ton(TON_A1, DAUER_ACHTEL),
    ton(TON_G1, DAUER_ACHTEL),
    TAKTSTRICH,
    ton(TON_A1, DAUER_VIERTEL),
    ton(TON_E2, DAUER_DREI_SECHZENTEL),
    ton(TON_A1, DAUER_SECHZENTEL),
    ton(TON_A1, DAUER_SECHZENTEL),
    ton(TON_A1, DAUER_SECHZENTEL),
    ton(TON_F2, DAUER_ACHTEL),
    ton(TON_E2, DAUER_ACHTEL),
    ton(TON_C2, DAUER_ACHTEL),
    TAKTSTRICH,
    ton(TON_A1, DAUER_ACHTEL),
    ton(TON_E2, DAUER_ACHTEL),
    ton(TON_A2, DAUER_ACHTEL),
    ton(TON_A1, DAUER_SECHZENTEL),
    ton(TON_G1, DAUER_SECHZENTEL),
    ton(TON_G1, DAUER_SECHZENTEL),
    ton(TON_G1, DAUER_SECHZENTEL),
    ton(TON_E1, DAUER_ACHTEL),
    ton(TON_H1, DAUER_ACHTEL),
    ton(TON_A1, DAUER_ACHTEL),
    TAKTSTRICH,
    ton(TON_A1, DAUER_HALB),
    ton(TON_A2, DAUER_VIERTEL),
    ton(TON_A2, DAUER_VIERTEL),
    TAKTSTRICH,
  ];
  
  const teil2 = [ton(TON_A0, DAUER_VIERTEL),
    ton(TON_A1, DAUER_DREI_SECHZENTEL),
    ton(TON_G1, DAUER_SECHZENTEL),
    ton(TON_G1, DAUER_SECHZENTEL),
    ton(TON_G1, DAUER_SECHZENTEL),
    ton(TON_E1, DAUER_ACHTEL),
    ton(TON_E1, DAUER_ACHTEL),
    ton(TON_G1, DAUER_ACHTEL),
    TAKTSTRICH,
    ton(TON_A0, DAUER_VIERTEL),
    ton(TON_A1, DAUER_VIERTEL),
    PAUSE.SECHZENTEL,
    ton(TON_E1, DAUER_SECHZENTEL),
    ton(TON_E1, DAUER_ACHTEL),
    ton(TON_G1, DAUER_ACHTEL),
    ton(TON_A1, DAUER_ACHTEL),
    TAKTSTRICH,
    ton(TON_F0, DAUER_VIERTEL),
    ton(TON_F1, DAUER_DREI_SECHZENTEL),
    ton(TON_G1, DAUER_SECHZENTEL),
    ton(TON_G1, DAUER_SECHZENTEL),
    ton(TON_G1, DAUER_ACHTEL),
    ton(TON_E1, DAUER_ACHTEL),
    ton(TON_G1, DAUER_ACHTEL),
    ton(TON_E1, DAUER_ACHTEL),
    
    TAKTSTRICH,
    ton(TON_A1, DAUER_HALB),
    PAUSE.SECHZENTEL,
    ton(TON_G1, DAUER_SECHZENTEL),
    ton(TON_E1, DAUER_ACHTEL),
    ton(TON_D1, DAUER_ACHTEL),
    ton(TON_C1, DAUER_ACHTEL),
    
    TAKTSTRICH,];
  
  const melody = [
    ...liedAnfang,
    ...liedAnfang,
    
    ...teil2,
    ...teil2,
    
    ton(TON_A1, DAUER_VIERTEL),
    ton(TON_C2, DAUER_DREI_SECHZENTEL),
    ton(TON_A1, DAUER_SECHZENTEL),
    ton(TON_A1, DAUER_SECHZENTEL),
    ton(TON_A1, DAUER_SECHZENTEL),
    ton(TON_D2, DAUER_ACHTEL),
    ton(TON_A1, DAUER_ACHTEL),
    ton(TON_G1, DAUER_ACHTEL),
    TAKTSTRICH,
    ton(TON_A1, DAUER_VIERTEL),
    ton(TON_E2, DAUER_DREI_SECHZENTEL),
    ton(TON_A1, DAUER_SECHZENTEL),
    ton(TON_A1, DAUER_SECHZENTEL),
    ton(TON_A1, DAUER_SECHZENTEL),
    ton(TON_F2, DAUER_ACHTEL),
    ton(TON_E2, DAUER_ACHTEL),
    ton(TON_C2, DAUER_ACHTEL),
    TAKTSTRICH,
  ];
  
  window.MUSIC.addMelody({ title: 'AxelF', melody });
})();
