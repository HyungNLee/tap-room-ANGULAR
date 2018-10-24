import { Component, OnInit } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterKegList: Keg[] = [
    new Keg("Original White Ale", "Hoegaarden", 3.50, 4.9, false),
    new Keg("Summer Honey Wheat", "Blue Moon", 2.75, 5.2, false),
    new Keg("Summer Honey Wheat", "Blue Moon", 2.75, 5.2, false),
    new Keg("Summer Honey Wheat", "Blue Moon", 2.75, 5.2, false),
    new Keg("Summer Honey Wheat", "Blue Moon", 2.75, 5.2, false),
    new Keg("Summer Honey Wheat", "Blue Moon", 2.75, 5.2, false),            
    new Keg("Summer Honey Wheat", "Blue Moon", 2.75, 5.2, false),
    new Keg("Summer Honey Wheat", "Blue Moon", 2.75, 5.2, false),
    new Keg("Summer Honey Wheat", "Blue Moon", 2.75, 5.2, false),
    new Keg("Summer Honey Wheat", "Blue Moon", 2.75, 5.2, false),    
    new Keg("Pale Lager", "Bia Hanoi", .25, 4.2, true)
  ];
}
