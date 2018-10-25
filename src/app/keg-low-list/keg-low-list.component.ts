import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';
import { IsEmptyPipe } from '../isEmpty.pipe';

@Component({
  selector: 'app-keg-low-list',
  templateUrl: './keg-low-list.component.html',
  styleUrls: ['./keg-low-list.component.css']
})


export class KegLowListComponent {
  @Input() childKegList: Keg[];
  @Output() refillSender = new EventEmitter();

  listLength() {
    let filteredArray = new IsEmptyPipe().transform(this.childKegList);
    return filteredArray.length > 0;
  }

  refill(kegToRefill) {
    this.refillSender.emit(kegToRefill);
  }
}
