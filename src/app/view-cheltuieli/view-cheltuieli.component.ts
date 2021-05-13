import { Component, OnInit } from '@angular/core';
import { CheltuieliService } from '../services/api/cheltuieli.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-cheltuieli',
  templateUrl: './view-cheltuieli.component.html',
  styleUrls: ['./view-cheltuieli.component.scss']
})
export class ViewCheltuieliComponent implements OnInit {
  j: any;
  rows: any;

  constructor(private cheltuieliService : CheltuieliService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  close() {
    this.activeModal.dismiss('Cross click')
    // location.reload();
  }

  searchID(j,) {
    console.log(this.j.id);

    this.cheltuieliService.searchId(this.j.id).subscribe((res: any) => {
        this.rows = res
    })
  }


}
