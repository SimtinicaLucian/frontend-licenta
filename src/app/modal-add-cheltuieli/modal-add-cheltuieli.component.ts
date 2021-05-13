import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../services/user.service';
import { TokenStorageService } from '../services/token-storage.service';
import { AlertService } from "ngx-alerts";
import { ProgressBarService } from '../services/progress-bar.service';
import { CheltuieliService } from '../services/api/cheltuieli.service';
import { NgForm } from '@angular/forms';

import * as _moment from 'moment';

import {default as _rollupMoment} from 'moment'; 

import { MAT_DATE_FORMATS, DateAdapter,MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY.MM.DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-modal-add-cheltuieli',
  templateUrl: './modal-add-cheltuieli.component.html',
  styleUrls: ['./modal-add-cheltuieli.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
  encapsulation: ViewEncapsulation.None
})



export class ModalAddCheltuieliComponent implements OnInit {
  form: any = {};
  currentUser: any;
  data;

  isSuccessful = false;
  isaddFailed = false;
  errorMessage = '';


  constructor(private cheltuieliService : CheltuieliService, public activeModal: NgbActiveModal, private token: TokenStorageService, private userService: UserService,
    public progressBar: ProgressBarService,
    private alertService: AlertService) { }

  ngOnInit(): void {
  }


  register(f: NgForm) {
    this.alertService.info('Se verifica adaugarea facturii');
    this.progressBar.startLoading();
    this.cheltuieliService.add(f.value).subscribe(
      data => {
        console.log(data);
        if (data) {
          this.progressBar.setSuccess();
          this.progressBar.completeLoading();

          this.isSuccessful = true;
          this.isaddFailed = false;
          console.log("Succesful?: " + this.isSuccessful);
          console.log("Failed?: " + this.isaddFailed);
          
          this.progressBar.completeLoading();


          // window.alert("You was successfully log-in!");
          // window.location.reload();
          location.reload();
        }
        else {
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
        console.log("Succesful?: " + this.errorMessage);
        console.log("Failed?: " + this.isaddFailed);
      }
    );
  }

}