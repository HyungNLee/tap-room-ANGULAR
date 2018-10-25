import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';
@Component({
  selector: 'app-keg-sale',
  templateUrl: './keg-sale.component.html',
  styleUrls: ['./keg-sale.component.css']
})
export class KegSaleComponent {
  @Input() childKeg: Keg;
  @Output() clickSender = new EventEmitter();
  @Output() sellSender = new EventEmitter();

  editKeg(kegToEdit) {
    this.clickSender.emit(kegToEdit);
  }
  sellKeg(kegToEdit) {
    this.sellSender.emit(kegToEdit);
  }

  progressBarClass(selectedKeg) {
    if (selectedKeg.amount <= 10) {
      return "bg-danger";
    } else if (selectedKeg.amount <= 25) {
      return "bg-warning";
    } else if (selectedKeg.amount <= 99) {
      return "bg-success";
    } else if (selectedKeg.amount <= 124) {
      return "bg-primary";
    }
  }


}
