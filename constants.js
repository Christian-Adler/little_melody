const DAUER_GANZ = 1; // 1 / 1;
const DAUER_HALB = 1 / 2;
const DAUER_VIERTEL = 1 / 4;
const DAUER_ACHTEL = 1 / 8;
const DAUER_DREI_SECHZENTEL = 3 / 16; // Achtel + Punkt
const DAUER_SECHZENTEL = 1 / 16;
const DAUER_DREI_VIERTEL = 3 / 4; //  Halb + Punkt

//https://de.wikipedia.org/wiki/Frequenzen_der_gleichstufigen_Stimmung
const TON_F0 = 175;
const TON_G0 = 196;
const TON_A0 = 220;
const TON_H0 = 247;
const TON_C1 = 262;
const TON_D1 = 293;
const TON_E1 = 330;
const TON_F1 = 349;
const TON_G1 = 392;
const TON_A1 = 442;
const TON_H1 = 492;
const TON_C2 = 523;
const TON_D2 = 587;
const TON_E2 = 659;
const TON_F2 = 698;
const TON_G2 = 784;
const TON_A2 = 880;
const TON_H2 = 988;
const TON_C3 = 1047;

const MELODY_ITEM_TYPE = {
  NOTE: 1,
  TAKTSTRICH: 2,
  PAUSE: 3,
};

// Dupplizieren strg ^ D

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
  ...liedAnfang,
  ...liedAnfang,
  
  { type: MELODY_ITEM_TYPE.TAKTSTRICH },
  { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_A0, duration: DAUER_VIERTEL, },
  { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_A1, duration: DAUER_DREI_SECHZENTEL, },
  { type: MELODY_ITEM_TYPE.NOTE, frequency: TON_G1, duration: DAUER_SECHZENTEL, },
  { type: MELODY_ITEM_TYPE.TAKTSTRICH },
];

// Pausen:
// { type: MELODY_ITEM_TYPE.PAUSE, duration: DAUER_SECHZENTEL, },
// { type: MELODY_ITEM_TYPE.PAUSE, duration: DAUER_ACHTEL, },
// { type: MELODY_ITEM_TYPE.PAUSE, duration: DAUER_VIERTEL, },
// { type: MELODY_ITEM_TYPE.PAUSE, duration: DAUER_HALB },
// { type: MELODY_ITEM_TYPE.PAUSE, duration: DAUER_GANZ },