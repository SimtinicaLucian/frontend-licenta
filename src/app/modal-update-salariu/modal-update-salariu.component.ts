  
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { AlertService } from "ngx-alerts";
import { ProgressBarService } from '../services/progress-bar.service';
import { SalariuService } from '../services/api/salariu.service';


@Component({
  selector: 'app-modal-update-salariu',
  templateUrl: './modal-update-salariu.component.html',
  styleUrls: ['./modal-update-salariu.component.scss']
})
export class ModalUpdateSalariuComponent implements OnInit {
  rows: any;
  form: any = {};
  j: any;

  isSuccessful = false;
  isaddFailed = false;
  errorMessage = '';

  constructor(private salariuService: SalariuService, public progressBar: ProgressBarService,
    private alertService: AlertService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  getData() {
    this.salariuService.salariuSearchAll().subscribe(res => {
      this.rows = res;
    })
  }

  close() {
    this.activeModal.dismiss('Cross click')
    location.reload();
  }



  updateSalariu(j, f: NgForm) {
    console.log(this.j.id);
    this.alertService.info('Checking update invoice');
    this.progressBar.startLoading();
    this.salariuService.updateSalariu(this.j.id, f.value).subscribe(
      value => {
        console.log(f.value);
        if(f.value){
          this.progressBar.setSuccess();
          this.progressBar.completeLoading();

        this.isSuccessful = true;
        this.isaddFailed = false;
        console.log("Succesful?: " +  this.isSuccessful);
        console.log("Failed?: " +  this.isaddFailed );
        // window.alert("You was successfully log-in!");
        this.progressBar.completeLoading();

        location.reload();
        }
        else
        {
          this.isSuccessful = false;
          this.isaddFailed = true;
        }
      },
      err => {

        this.progressBar.setError();
        console.log(err);
        this.alertService.danger(err.error.message);
        this.progressBar.completeLoading();

        // this.errorMessage = err.error.message;
        this.isaddFailed = true;
        console.log("Succesful?: " +  this.errorMessage);
        console.log("Failed?: " +  this.isaddFailed );
      }
    );
  }

}
