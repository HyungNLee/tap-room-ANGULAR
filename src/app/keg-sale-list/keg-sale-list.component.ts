import { Component, Input, OnInit } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-keg-sale-list',
  templateUrl: './keg-sale-list.component.html',
  styleUrls: ['./keg-sale-list.component.css']
})
export class KegSaleListComponent {
  @Input() childKegList: Keg[];
  // constructor() { }

  // ngOnInit() {
  // }

}
