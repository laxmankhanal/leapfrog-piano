function Data(){

  /* used for generating sound on respective key press */
  this.notesByKeyCode = {
  65: { noteName: 'c4', frequency: 261.6, keyName: 'a', counter: 0},
  83: { noteName: 'd4', frequency: 293.7, keyName: 's', counter: 0},
  68: { noteName: 'e4', frequency: 329.6, keyName: 'd', counter: 0},
  70: { noteName: 'f4', frequency: 349.2, keyName: 'f', counter: 0},
  71: { noteName: 'g4', frequency: 392.00, keyName: 'g', counter: 0},
  72: { noteName: 'a4', frequency: 440.00, keyName: 'h', counter: 0},
  74: { noteName: 'b4', frequency: 493.9, keyName: 'j', counter: 0},
  75: { noteName: 'c5', frequency: 523.3, keyName: 'k', counter: 0},
  76: { noteName: 'd5', frequency: 587.3, keyName: 'l', counter: 0},
  59:{ noteName:'e5',  frequency: 659.3, keyName: ';', counter: 0},
  16:{ noteName:'f5',  frequency: 698.46, keyName: 'shift', counter: 0},
  90:{ noteName:'g5',  frequency: 783.99, keyName: 'z', counter: 0},
  88:{ noteName:'a5',  frequency: 880.00, keyName: 'x', counter: 0},
  67:{ noteName:'b5',  frequency: 987.77, keyName: 'c', counter: 0},
  86:{ noteName:'c6',  frequency: 1046.50, keyName: 'v', counter: 0},
  66:{ noteName:'d6',  frequency: 1174.66, keyName: 'b', counter: 0},
  78:{ noteName:'e6',  frequency: 1318.51, keyName: 'n', counter: 0},
  77:{ noteName:'f6',  frequency: 1396.91, keyName: 'm', counter: 0},
  188:{ noteName:'g6',  frequency: 1567.98, keyName: ',', counter: 0},
  190:{ noteName:'a6',  frequency: 1760.00, keyName: '.', counter: 0},
  32:{ noteName:'b6',  frequency: 1975.53, keyName: '.', counter: 0},
  81: { noteName: 'c4#', frequency: 277.18, keyName: 'q', counter: 0},
  87: { noteName: 'd4#', frequency: 311.13, keyName: 'w', counter: 0},
  69: { noteName: 'f4#', frequency: 369.99, keyName: 'e', counter: 0},
  82: { noteName: 'g4#', frequency: 415.30, keyName: 'r', counter: 0},
  84: { noteName: 'a4#', frequency: 466.16, keyName: 't', counter: 0},
  89: { noteName: 'c5#', frequency: 554.37, keyName: 'y', counter: 0},
  85: { noteName: 'd5#', frequency: 622.25, keyName: 'u', counter: 0},
  73: { noteName: 'f5#', frequency: 739.99, keyName: 'i', counter: 0},
  79: { noteName: 'g5#', frequency: 830.61, keyName: 'o', counter: 0},
  80: { noteName: 'a5#', frequency: 932.33, keyName: 'p', counter: 0},
  219: { noteName: 'c6#', frequency: 1108.73, keyName: '[', counter: 0},
  221: { noteName: 'd6#', frequency: 1244.51, keyName: ']', counter: 0},
  56: { noteName: 'f6#', frequency: 1479.98, keyName: '8', counter: 0},
  57: { noteName: 'g6#', frequency: 1661.22, keyName: '9', counter: 0},
  48: { noteName: 'a6#', frequency: 1864.66, keyName: '0', counter: 0}

};

/* Used for creating  'Piano Keys' */
this.noteList={
  0:{name:'c4', notePitch: 'low'},
  1:{name:'d4', notePitch: 'low'},
  2:{name:'e4', notePitch: 'low'},
  3:{name:'f4', notePitch: 'low'},
  4:{name:'g4', notePitch: 'low'},
  5:{name:'a4', notePitch: 'low'},
  6:{name:'b4', notePitch: 'low'},
  7:{name:'c5', notePitch: 'low'},
  8:{name:'d5', notePitch: 'low'},
  9:{name:'e5', notePitch: 'low'},
  10:{name:'f5', notePitch: 'low'},
  11:{name:'g5', notePitch: 'low'},
  12:{name:'a5', notePitch: 'low'},
  13:{name:'b5', notePitch: 'low'},
  14:{name:'c6', notePitch: 'low'},
  15:{name:'d6', notePitch: 'low'},
  16:{name:'e6', notePitch: 'low'},
  17:{name:'f6', notePitch: 'low'},
  18:{name:'g6', notePitch: 'low'},
  19:{name:'a6', notePitch: 'low'},
  20:{name:'b6', notePitch: 'low'},
  21:{name:'c4#', notePitch: 'high'},
  22:{name:'d4#', notePitch: 'high'},
  23:{name:'f4#', notePitch: 'high'},
  24:{name:'g4#', notePitch: 'high'},
  25:{name:'a4#', notePitch: 'high'},
  26:{name:'c5#', notePitch: 'high'},
  27:{name:'d5#', notePitch: 'high'},
  28:{name:'f5#', notePitch: 'high'},
  29:{name:'g5#', notePitch: 'high'},
  30:{name:'a5#', notePitch: 'high'},
  31:{name:'c6#', notePitch: 'high'},
  32:{name:'d6#', notePitch: 'high'},
  33:{name:'f6#', notePitch: 'high'},
  34:{name:'g6#', notePitch: 'high'},
  35:{name:'a6#', notePitch: 'high'}

};

/* Used for visualizer */
this.freqData = {
  0:{ freqValue : 90}, 1:{ freqValue : 20}, 2:{ freqValue : 80}, 3:{ freqValue : 40}, 
  4:{ freqValue : 80}, 5:{ freqValue : 60}, 6:{ freqValue : 70}, 7:{ freqValue : 80},
  8:{ freqValue : 70}, 9:{ freqValue : 60}, 10:{ freqValue : 50}, 11:{ freqValue : 40},
  12:{ freqValue : 60}, 13:{ freqValue : 6}, 14:{ freqValue : 60}, 15:{ freqValue : 56},
  16:{ freqValue : 70}, 17:{ freqValue : 3}, 18:{ freqValue : 40}, 19:{ freqValue : 23},
  20:{ freqValue : 60}, 21:{ freqValue : 88}, 22:{ freqValue : 50 }, 23:{ freqValue : 65 },
  24:{ freqValue : 50}, 25:{ freqValue : 32 }, 26:{ freqValue : 70 }, 27:{ freqValue : 80 },
  28:{ freqValue : 50 }, 29:{ freqValue : 32 }, 30:{ freqValue : 80 }, 31:{ freqValue : 70 },
  32:{ freqValue : 90 }, 33:{ freqValue : 60 }, 34:{ freqValue : 80 }, 35:{ freqValue : 90 },
  36:{ freqValue : 100 }, 37:{ freqValue : 70 }, 38:{ freqValue : 90 }, 39:{ freqValue : 100 },
  40:{ freqValue : 110 }, 41:{ freqValue : 90 }, 42:{ freqValue : 120 }, 43:{ freqValue : 110 },
  44:{ freqValue : 90 }, 45:{ freqValue : 100 }, 46:{ freqValue : 80 }, 47:{ freqValue : 90 },
  48:{ freqValue : 130 }, 49:{ freqValue : 150 }, 50:{ freqValue : 120 }, 51:{ freqValue : 100 },
  51:{ freqValue : 90 }, 52:{ freqValue : 100 }, 53:{ freqValue : 80 }, 54:{ freqValue : 80 },
  54:{ freqValue : 70 }, 55:{ freqValue : 60 }, 56:{ freqValue : 100 }, 57:{ freqValue : 120 },
  58:{ freqValue : 80 }, 59:{ freqValue : 90 }, 60:{ freqValue : 100 }, 61:{ freqValue : 120 },
 };


/* Used for learning piano*/
this.twinkleTwinkle = [{keyCode: 71, duration: 2000},{keyCode: 72, duration: 2000},
  {keyCode: 71, duration: 1000},{keyCode: 72, duration: 2000},]



}
