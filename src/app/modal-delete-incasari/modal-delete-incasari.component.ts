import { Component, OnInit } from '@angular/core';
import { IncasariService } from '../api/api/incasari.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-delete-incasari',
  templateUrl: './modal-delete-incasari.component.html',
  styleUrls: ['./modal-delete-incasari.component.scss']
})
export class ModalDeleteIncasariComponent implements OnInit {
  rows: any;
  j: string;




  constructor(public activeModal: NgbActiveModal, public incasariService: IncasariService) { }

  ngOnInit(): void {
  }

  getData() {
    this.incasariService.incasariSearchAllGet().subscribe(res => {
      this.rows = res;
    })
  }

  deleteIncasari(number) {
    console.log(this.j);
    this.incasariService.deleteData(this.j).subscribe(res => {
      this.getData()

      console.log("delete");
      location.reload();
    })
  }

}
