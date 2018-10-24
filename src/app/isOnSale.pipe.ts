import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe({
    name: "isOnSale",
    pure: false
})

export class IsOnSalePipe implements PipeTransform {
    transform(input: Keg[], desiredSaleState) {
        let output: Keg[] = [];
        for (let i = 0; i < input.length; i++) {
            if (input[i].onSale === desiredSaleState) {
                output.push(input[i]);
            }
        }
        return output;
    }
}