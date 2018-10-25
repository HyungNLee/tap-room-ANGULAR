export class Keg {
    public amount: number = 124;
    tappedDate: Date;
    outDate: Date;
    constructor(public name?: string, public brand?: string, public price?: number, public alcoholContent?: number, public onSale: boolean = false) {
        this.tappedDate = new Date();
        this.outDate = null;
        this.amount = Math.ceil(Math.random() * 100) + 24;
    };
    changeOnSale(trueOrFalse: boolean): void {
        this.onSale = trueOrFalse;
    };
    sellPint() {
        if (this.amount > 0) {
            this.amount -= 1;
        }
        if (this.amount === 0) {
            this.isOut();
        }
        
    }
    isOut() {
        this.outDate = new Date();
    }

    editAmount(amount: number) {
        this.amount = amount;
    }
    
}