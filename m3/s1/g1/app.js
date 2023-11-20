"use strict";
const numeroCaso = numeroCasuale(1, 100);
function numeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(numeroCaso);
function vincitore(numeroCaso, giocatore1, giocatore2) {
    const persona1 = Math.abs(numeroCaso - giocatore1);
    const persona2 = Math.abs(numeroCaso - giocatore2);
    if (giocatore1 === numeroCaso) {
        return 'il giocaotore 1 ha indovinato';
    }
    else if (giocatore2 === numeroCaso) {
        return 'il giocaotore 2 ha indovinato';
    }
    if (persona1 < persona2) {
        return ' giocatore1 si è avvicinato di più al numero';
    }
    else if (persona2 < persona1) {
        return 'giocaotre2 si è avvicinato di più al numero';
    }
}
const giocatore1 = 10;
const giocatore2 = 20;
const risultatoFinale = vincitore(numeroCaso, giocatore1, giocatore2);
console.log(risultatoFinale);
