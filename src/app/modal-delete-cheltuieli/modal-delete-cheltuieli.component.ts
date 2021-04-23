import { Component, OnInit } from '@angular/core';
import { CheltuieliService } from '../services/api/cheltuieli.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from "ngx-alerts";
import { ProgressBarService } from '../services/progress-bar.service';
import { windowTime } from 'rxjs-compat/operator/windowTime';

@Component({
  selector: 'app-modal-delete-cheltuieli',
  templateUrl: './modal-delete-cheltuieli.component.html',
  styleUrls: ['./modal-delete-cheltuieli.component.scss']
})
export class ModalDeleteCheltuieliComponent implements OnInit {

  
  rows: any;
  j: any;
  isSuccessful = false;


  constructor(private cheltuieliService : CheltuieliService, public activeModal: NgbActiveModal, public progressBar: ProgressBarService,
    private alertService: AlertService) { }

  ngOnInit(): void {
  }

  getData() {
    this.cheltuieliService.cheltuieliSearchAll().subscribe(res => {
      this.rows = res;
    })
  }

  deleteCheltuieli(id) {
    this.alertService.info('Checking delete invoice');
    this.progressBar.startLoading();
    console.log(this.j);
    this.cheltuieliService.deleteId(this.j).subscribe(res => {
      this.progressBar.setSuccess();
      this.progressBar.completeLoading();
      this.getData()
      this.isSuccessful = true;
      window.location.reload();
    },
      err => {
        this.progressBar.setError();
        console.log(err);
        this.alertService.danger(err.error.message);
        this.progressBar.completeLoading();
      }
    );
  }

}
