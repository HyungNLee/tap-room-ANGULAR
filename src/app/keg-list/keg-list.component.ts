import { Component, Input, OnInit } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent {

  @Input() childKegList: Keg[];
  // constructor() { }

  // ngOnInit() {
  // }

}
