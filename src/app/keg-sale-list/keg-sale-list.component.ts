import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-keg-sale-list',
  templateUrl: './keg-sale-list.component.html',
  styleUrls: ['./keg-sale-list.component.css']
})
export class KegSaleListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() sellSender = new EventEmitter();

  editKeg(kegToEdit) {
    this.clickSender.emit(kegToEdit);
  }
  sellKeg(kegToEdit) {
    this.sellSender.emit(kegToEdit);
  }
  // constructor() { }

  // ngOnInit() {
  // }

}
