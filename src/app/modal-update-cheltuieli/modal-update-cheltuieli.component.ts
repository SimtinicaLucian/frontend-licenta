import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { AlertService } from "ngx-alerts";
import { ProgressBarService } from '../services/progress-bar.service';
import { CheltuieliService } from '../services/api/cheltuieli.service';

interface cota_TVA {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-modal-update-cheltuieli',
  templateUrl: './modal-update-cheltuieli.component.html',
  styleUrls: ['./modal-update-cheltuieli.component.scss']
})
export class ModalUpdateCheltuieliComponent implements OnInit {
  rows: any;
  form: any = {};
  j: any;

  isSuccessful = false;
  isaddFailed = false;
  errorMessage = '';

  cotaTVAList: cota_TVA[] = [
    {value: '19', viewValue: '19%'},
    {value: '9', viewValue: '9%'},
    {value: '5', viewValue: '5%'}
  ];

  constructor(private cheltuieliService: CheltuieliService, public progressBar: ProgressBarService,
    private alertService: AlertService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  getData() {
    this.cheltuieliService.cheltuieliSearchAll().subscribe(res => {
      this.rows = res;
    })
  }

  close() {
    this.activeModal.dismiss('Cross click')
    location.reload();
  }


  updateCheltuieli(j, f: NgForm) {
    console.log(this.j.id);
    this.alertService.info('Checking update invoice');
    this.progressBar.startLoading();
    this.cheltuieliService.updateCheltuieli(this.j.id, f.value).subscribe(
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
