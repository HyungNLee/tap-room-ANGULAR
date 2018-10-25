import { Component, OnInit } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterKegList: Keg[] = [
    new Keg("Original White Ale", "Hoegaarden", 3.50, 4.9),
    new Keg("Summer Honey Wheat", "Blue Moon", 2.75, 5.2),  
    new Keg("Pale Lager", "Bia Hanoi", .25, 4.2, true)
  ];

  selectedKeg: Keg = null;
  newKeg: Keg = null;

  editKeg(kegToEdit) {
    this.selectedKeg = kegToEdit;
  }

  finishEditing() {
    this.selectedKeg = null;
  }

  showAddForm() {
    let addingKeg = new Keg();
    this.newKeg = addingKeg;
    console.log(this.newKeg);
  }

  addKeg() {
    this.masterKegList.push(this.newKeg);
    this.newKeg = null;
  }
}
