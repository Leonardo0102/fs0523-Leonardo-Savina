class SonAccount{
    protected balanceInit:number=0;
    oneDeposit(amount:number):void{
        this.balanceInit = amount;
    }

    oneWithDraw(amount:number):void{
        if(amount<=this.balanceInit){
            this.balanceInit = amount;
        }else{
            console.log('saldo insufficiente')
        }
    }
    getBalance():number{
        return this.balanceInit
    }


}

class MotherAccount extends SonAccount{
    addInterest():void{
        const interest:number=this.balanceInit*0.10;
        this.balanceInit+=interest;
    }
}

let sonAccount= new SonAccount();
sonAccount.oneDeposit(800);
sonAccount.oneWithDraw(900)
sonAccount.oneDeposit(1000 )



let motherAccount= new MotherAccount();
motherAccount.oneDeposit(3000);
motherAccount.oneWithDraw(500)

motherAccount.addInterest();

console.log('saldo della madre',motherAccount.getBalance())
console.log('saldo conto figlio',sonAccount.getBalance())
