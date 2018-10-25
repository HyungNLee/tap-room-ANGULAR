export class Keg {
    public amount: number = 124;
    tappedDate: Date;
    constructor(public name?: string, public brand?: string, public price?: number, public alcoholContent?: number, public onSale: boolean = false) {
        this.tappedDate = new Date();
    };
    changeOnSale(trueOrFalse: boolean): void {
        this.onSale = trueOrFalse;
    };
    sellPint() {
        if (this.amount > 0) {
            this.amount -= 1;
        }
    }
}