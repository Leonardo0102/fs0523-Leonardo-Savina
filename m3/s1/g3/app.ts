abstract class LavoratoreAutonomo{
    constructor(
        public codredd:number,
        public redditoannuolordo:number,
        public tasseinps:number,
        public tasseirpef:number
    ){}
   
    getRedditoAnnuoNetto():number{
        return this.redditoannuolordo - this.getTasseinps()- this.getTasseIrpef()
    }
    getTasseinps():number{
        return this.tasseinps
    }

    getTasseIrpef():number{
        return this.tasseirpef
    }
    getUtileTasse():number{
        return this.redditoannuolordo- this.getTasseinps()- this.getTasseIrpef()
    }
}

 
abstract getTasseinps():number;
abstract getTasseirpef():number;
abstract getRedditoAnnuoNetto():number
abstract getUtileTasse():number





