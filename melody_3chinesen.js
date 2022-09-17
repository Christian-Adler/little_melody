(() => {
  const melody = [
    {
      type: MELODY_ITEM_TYPE.TAKTSTRICH,
    },
    {
      type: MELODY_ITEM_TYPE.NOTE,
      frequency: TON_C1,
      duration: DAUER_DREI_VIERTEL,
    },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_C1, duration: DAUER_VIERTEL },
    {
      type: MELODY_ITEM_TYPE.TAKTSTRICH,
    },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_C1, duration: DAUER_VIERTEL },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_E1, duration: DAUER_VIERTEL },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_D1, duration: DAUER_VIERTEL },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_C1, duration: DAUER_VIERTEL },
    {
      type: MELODY_ITEM_TYPE.TAKTSTRICH,
    },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_D1, duration: DAUER_HALB },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_D1, duration: DAUER_HALB },
    {
      type: MELODY_ITEM_TYPE.TAKTSTRICH,
    },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_D1, duration: DAUER_GANZ },
    {
      type: MELODY_ITEM_TYPE.TAKTSTRICH,
    },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_D1, duration: DAUER_VIERTEL },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_D1, duration: DAUER_VIERTEL },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_D1, duration: DAUER_VIERTEL },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_D1, duration: DAUER_VIERTEL },
    {
      type: MELODY_ITEM_TYPE.TAKTSTRICH,
    },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_D1, duration: DAUER_VIERTEL },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_F1, duration: DAUER_VIERTEL },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_E1, duration: DAUER_VIERTEL },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_D1, duration: DAUER_VIERTEL },
    {
      type: MELODY_ITEM_TYPE.TAKTSTRICH,
    },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_E1, duration: DAUER_HALB },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_E1, duration: DAUER_VIERTEL },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_E1, duration: DAUER_VIERTEL },
    {
      type: MELODY_ITEM_TYPE.TAKTSTRICH,
    },
    {
      type: MELODY_ITEM_TYPE.NOTE,
      frequency: TON_E1,
      duration: DAUER_DREI_VIERTEL,
    },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_C1, duration: DAUER_VIERTEL },
    {
      type: MELODY_ITEM_TYPE.TAKTSTRICH,
    },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_G1, duration: DAUER_VIERTEL },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_G1, duration: DAUER_VIERTEL },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_G1, duration: DAUER_VIERTEL },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_G1, duration: DAUER_VIERTEL },
    {
      type: MELODY_ITEM_TYPE.TAKTSTRICH,
    },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_G1, duration: DAUER_HALB },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_E1, duration: DAUER_VIERTEL },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_C1, duration: DAUER_VIERTEL },
    {
      type: MELODY_ITEM_TYPE.TAKTSTRICH,
    },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_A1, duration: DAUER_HALB },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_A1, duration: DAUER_HALB },
    {
      type: MELODY_ITEM_TYPE.TAKTSTRICH,
    },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_A1, duration: DAUER_GANZ },
    {
      type: MELODY_ITEM_TYPE.TAKTSTRICH,
    },
    {
      type: MELODY_ITEM_TYPE.NOTE,
      frequency: TON_G1,
      duration: DAUER_DREI_VIERTEL,
    },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_A1, duration: DAUER_VIERTEL },
    {
      type: MELODY_ITEM_TYPE.TAKTSTRICH,
    },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_G1, duration: DAUER_VIERTEL },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_F1, duration: DAUER_VIERTEL },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_E1, duration: DAUER_VIERTEL },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_D1, duration: DAUER_VIERTEL },
    {
      type: MELODY_ITEM_TYPE.TAKTSTRICH,
    },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_C1, duration: DAUER_HALB },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_C1, duration: DAUER_HALB },
    {
      type: MELODY_ITEM_TYPE.TAKTSTRICH,
    },
    { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_C1, duration: DAUER_GANZ },
    {
      type: MELODY_ITEM_TYPE.TAKTSTRICH,
    },
  ];
  
  window.MUSIC.addMelody({ title: '3 Chinesen', melody });
})();
