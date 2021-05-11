import { Component, OnInit } from '@angular/core';
// import { IncasariService } from '../api/api/incasari.service';
import { IncasariService } from '../services/api/incasari.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from "ngx-alerts";
import { ProgressBarService } from '../services/progress-bar.service';
import { windowTime } from 'rxjs-compat/operator/windowTime';

@Component({
  selector: 'app-modal-delete-incasari',
  templateUrl: './modal-delete-incasari.component.html',
  styleUrls: ['./modal-delete-incasari.component.scss']
})
export class ModalDeleteIncasariComponent implements OnInit {
  rows: any;
  j: any;
  isSuccessful = false;




  constructor(public activeModal: NgbActiveModal, public incasariService: IncasariService,
    public progressBar: ProgressBarService,
    private alertService: AlertService) { }

  ngOnInit(): void {
  }

  getData() {
    this.incasariService.incasariSearchAllGet().subscribe(res => {
      this.rows = res;
    })
  }

  deleteIncasari(id) {
    this.alertService.info('Se verifica stergerea facturii');
    this.progressBar.startLoading();
    console.log(this.j);
    this.incasariService.deleteId(this.j).subscribe(res => {
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
