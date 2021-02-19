import { Component, OnInit } from '@angular/core';
import { IncasariService } from '../api/api/incasari.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-modal-update-incasari',
  templateUrl: './modal-update-incasari.component.html',
  styleUrls: ['./modal-update-incasari.component.scss']
})
export class ModalUpdateIncasariComponent implements OnInit {
  rows: any;
  form: any = {};
  j: any;

  constructor(public activeModal: NgbActiveModal, private incasariService: IncasariService) { }

  ngOnInit(): void {
  }

  getData() {
    this.incasariService.incasariSearchAllGet().subscribe(res => {
      this.rows = res;
    })
  }

  close() {
    this.activeModal.dismiss('Cross click')
    location.reload();
  }

  updateIncasari(j, f: NgForm) {
    console.log(this.j.id);
    this.incasariService.updateIncasari(this.j.id, f.value).subscribe(() => { })
    location.reload();
  }
}
