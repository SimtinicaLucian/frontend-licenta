import { Component, OnInit } from '@angular/core';
import { SalariuService } from '../services/api/salariu.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from "ngx-alerts";
import { ProgressBarService } from '../services/progress-bar.service';
import { windowTime } from 'rxjs-compat/operator/windowTime';

@Component({
  selector: 'app-modal-delete-salariu',
  templateUrl: './modal-delete-salariu.component.html',
  styleUrls: ['./modal-delete-salariu.component.scss']
})
export class ModalDeleteSalariuComponent implements OnInit {
  rows: any;
  j: any;
  isSuccessful = false;

  constructor(private salariuService : SalariuService, public activeModal: NgbActiveModal, public progressBar: ProgressBarService,
    private alertService: AlertService) { }

  ngOnInit(): void {
  }

  getData() {
    this.salariuService.salariuSearchAll().subscribe(res => {
      this.rows = res;
    })
  }


  deleteSalariu(id) {
    this.alertService.info('Checking delete invoice');
    this.progressBar.startLoading();
    console.log(this.j);
    this.salariuService.deleteId(this.j).subscribe(res => {
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
