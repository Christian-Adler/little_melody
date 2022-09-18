const IMG_NOTENSCHLUESSEL = new Image();
// IMG_NOTENSCHLUESSEL.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="640.000000pt" height="1280.000000pt" viewBox="0 0 640.000000 1280.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M4128 12781 c-166 -53 -386 -249 -543 -482 -83 -123 -238 -429 -314 -622 -167 -425 -246 -822 -258 -1307 -9 -350 13 -649 88 -1209 39 -293 40 -305 22 -321 -10 -9 -112 -96 -228 -192 -829 -692 -1259 -1160 -1574 -1715 -183 -323 -306 -697 -352 -1068 -16 -126 -16 -417 0 -555 44 -391 178 -789 374 -1115 138 -230 375 -500 587 -669 400 -318 859 -520 1292 -567 127 -14 488 -5 608 14 47 8 87 13 88 11 2 -1 42 -285 89 -631 l85 -628 2 -235 c1 -249 -5 -311 -51 -475 -106 -384 -378 -636 -766 -710 -103 -20 -326 -19 -439 0 -191 34 -347 104 -443 199 l-60 60 105 8 c315 25 509 136 615 351 52 106 68 196 62 352 -9 227 -71 380 -212 520 -89 89 -157 133 -267 173 -66 24 -86 27 -213 27 -111 0 -151 -4 -195 -19 -242 -83 -419 -260 -499 -501 -43 -128 -55 -219 -48 -360 21 -408 258 -772 627 -963 111 -58 213 -94 354 -124 132 -28 450 -31 590 -5 411 78 705 256 893 543 202 308 250 656 169 1239 -86 627 -167 1237 -164 1239 2 2 39 15 83 30 298 105 598 308 790 537 313 373 455 839 416 1366 -23 312 -79 530 -197 768 -113 229 -270 418 -469 568 -101 76 -308 183 -430 222 -183 60 -417 91 -582 79 -91 -6 -92 -6 -97 17 -3 13 -22 146 -41 294 -20 149 -58 436 -86 640 l-50 370 28 24 c91 77 389 360 514 487 506 518 752 1038 834 1764 57 512 60 849 9 1215 -68 493 -208 904 -401 1177 -133 189 -202 225 -345 179z m284 -1129 c100 -44 172 -142 204 -279 19 -82 21 -275 4 -388 -40 -274 -185 -663 -344 -925 -147 -240 -434 -586 -662 -795 -164 -151 -264 -238 -268 -234 -4 4 -25 147 -46 312 -51 406 -25 763 84 1139 132 451 309 792 526 1008 108 107 171 149 270 177 60 17 173 10 232 -15z m-1043 -4513 l77 -577 -56 -17 c-229 -71 -507 -257 -672 -449 -251 -293 -390 -635 -405 -996 -15 -383 122 -753 372 -1006 143 -146 306 -238 477 -272 71 -14 79 -14 102 2 30 19 34 56 10 81 -9 9 -44 30 -78 47 -249 125 -411 349 -462 641 -73 415 180 878 579 1062 67 31 234 82 242 73 1 -1 77 -563 168 -1248 113 -848 162 -1247 155 -1251 -6 -4 -56 -14 -112 -23 -284 -43 -581 -46 -780 -6 -408 81 -848 336 -1099 639 -305 366 -448 745 -448 1183 0 237 31 425 106 653 139 424 366 769 795 1208 265 272 942 878 949 849 2 -9 38 -276 80 -593z m596 -1415 c166 -32 355 -114 487 -214 95 -72 235 -224 291 -317 135 -225 184 -429 174 -728 -12 -391 -132 -688 -367 -909 -107 -101 -313 -226 -411 -251 l-25 -6 -27 203 c-15 112 -54 401 -87 643 -173 1284 -210 1562 -210 1582 0 21 3 22 48 17 26 -3 83 -12 127 -20z"/></g></svg>');
IMG_NOTENSCHLUESSEL.onload = () => {
  // console.log('Notenschluessel loaded');
  window.dispatchEvent(new Event('resize')); // Resize feuern, damit redraw auf der Melody passiert und somit auch der Notenschluessel gleich sichtbar ist.
};
IMG_NOTENSCHLUESSEL.src = './assets/notenschluessel.svg'


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

// Pausen:
const PAUSE = {
  SECHZENTEL: { type: MELODY_ITEM_TYPE.PAUSE, duration: DAUER_SECHZENTEL, },
  ACHTEL: { type: MELODY_ITEM_TYPE.PAUSE, duration: DAUER_ACHTEL, },
  VIERTEL: { type: MELODY_ITEM_TYPE.PAUSE, duration: DAUER_VIERTEL, },
  HALB: { type: MELODY_ITEM_TYPE.PAUSE, duration: DAUER_HALB },
  GANZ: { type: MELODY_ITEM_TYPE.PAUSE, duration: DAUER_GANZ },
}

const TAKTSTRICH = { type: MELODY_ITEM_TYPE.TAKTSTRICH };

/**
 * MelodyItem erzeugen
 * @param frequency
 * @param duration
 * @returns {{duration: number, type: number, frequency: number}}
 */
const ton = (frequency = TON_A1, duration = DAUER_VIERTEL) => {
  return { type: MELODY_ITEM_TYPE.NOTE, frequency, duration };
};

