import { Component, Input, OnInit } from '@angular/core';
import { Keg } from '../models/keg.model';
@Component({
  selector: 'app-keg-sale',
  templateUrl: './keg-sale.component.html',
  styleUrls: ['./keg-sale.component.css']
})
export class KegSaleComponent {
  @Input() childKeg: Keg;

  
  // constructor() { }

  // ngOnInit() {
  // }

}
