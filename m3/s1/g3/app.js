"use strict";
class LavoratoreAutonomo {
    constructor(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
    getRedditoAnnuoNetto() {
        return this.redditoannuolordo - this.getTasseinps() - this.getTasseIrpef();
    }
    getTasseinps() {
        return this.tasseinps;
    }
    getTasseIrpef() {
        return this.tasseirpef;
    }
    getUtileTasse() {
        return this.redditoannuolordo - this.getTasseinps() - this.getTasseIrpef();
    }
}
abstract;
getTasseinps();
number;
abstract;
getTasseirpef();
number;
abstract;
getRedditoAnnuoNetto();
number;
abstract;
getUtileTasse();
number;
