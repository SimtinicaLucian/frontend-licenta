import { Component, OnInit } from '@angular/core';
// import { IncasariService } from '../api/api/incasari.service';
import { IncasariService } from '../services/api/incasari.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { AlertService } from "ngx-alerts";
import { ProgressBarService } from '../services/progress-bar.service';

@Component({
  selector: 'app-modal-update-incasari',
  templateUrl: './modal-update-incasari.component.html',
  styleUrls: ['./modal-update-incasari.component.scss']
})
export class ModalUpdateIncasariComponent implements OnInit {
  rows: any;
  form: any = {};
  j: any;

  isSuccessful = false;
  isaddFailed = false;
  errorMessage = '';

  constructor(public activeModal: NgbActiveModal, private incasariService: IncasariService,
    public progressBar: ProgressBarService,
    private alertService: AlertService) { }

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

  // updateIncasari(j, f: NgForm) {
  //   console.log(this.j.id);
  //   this.incasariService.updateIncasari(this.j.id, f.value).subscribe(() => { })
  //   location.reload();
  // }



  updateIncasari(j, f: NgForm) {
    console.log(this.j.id);
    this.alertService.info('Checking update invoice');
    this.progressBar.startLoading();
    this.incasariService.updateIncasari(this.j.id, f.value).subscribe(
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
    // this.authService.register(f.value).subscribe(() => { })
    // //location.reload();
    // }
  }