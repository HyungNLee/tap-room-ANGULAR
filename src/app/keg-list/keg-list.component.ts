import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent {

  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() sellSender = new EventEmitter();
  @Output() refillSender = new EventEmitter();

  editButtonClicked(kegToEdit) {
    this.clickSender.emit(kegToEdit);
  }

  sellButtonClicked(currentKeg) {
    this.sellSender.emit(currentKeg);
  }

  refill(kegToRefill) {
    this.refillSender.emit(kegToRefill);
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
