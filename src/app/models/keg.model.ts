export class Keg {
    public amount: number = 124;

    constructor(public name?: string, public brand?: string, public price?: number, public alcoholContent?: number, public onSale: boolean = false) {};

    changeOnSale(trueOrFalse: boolean): void {
        this.onSale = trueOrFalse;
        console.log(this);
    };
}