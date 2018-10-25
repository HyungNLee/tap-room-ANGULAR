import { Component, OnInit } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterKegList: Keg[] = [
    new Keg("Original White Ale", "Hoegaarden", 3.50, .049, false),
    new Keg("Summer Honey Wheat", "Blue Moon", 2.75, .052, false),          
    new Keg("Pale Lager", "Bia Hanoi", .25, .042, true)
  ];

  selectedKeg: Keg = null;
  newKeg: Keg = null;
  kegToSell: Keg = null;

  editKeg(kegToEdit) {
    this.selectedKeg = kegToEdit;
  }

  finishEditing() {
    this.selectedKeg = null;
  }

  showAddForm() {
    let addingKeg = new Keg();
    this.newKeg = addingKeg;
  }

  addKeg() {
    this.masterKegList.unshift(this.newKeg);
    this.newKeg = null;
  }

  sellKeg(currentKeg) {
    currentKeg.sellPint();
  }  
}
