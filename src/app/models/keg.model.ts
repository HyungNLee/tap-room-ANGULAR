export class Keg {
    public amount: number = 124;
    // public onSale: boolean = true;

    constructor(public name: string, public brand: string, public price: number, public alcoholContent: number, public onSale: boolean) {};

    changeOnSale(trueOrFalse: boolean): void {
        this.onSale = trueOrFalse;
    };
}