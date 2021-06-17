import { Component, OnInit, Input } from '@angular/core';
import { ModalAddCheltuieliComponent } from '../modal-add-cheltuieli/modal-add-cheltuieli.component';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  @Input() cheltuieliAdd?: ModalAddCheltuieliComponent 

  constructor() { }

  ngOnInit(): void {
  }

}
