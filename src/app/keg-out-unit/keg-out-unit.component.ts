import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-keg-out-unit',
  templateUrl: './keg-out-unit.component.html',
  styleUrls: ['./keg-out-unit.component.css']
})
export class KegOutUnitComponent {

  @Input() childKeg: Keg;
  @Output() refillSender = new EventEmitter();

  refill(kegToRefill) {
    this.refillSender.emit(kegToRefill);
  }
  
}
