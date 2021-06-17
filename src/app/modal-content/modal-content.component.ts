import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
// import { IncasariService } from '../api';
import { IncasariService } from '../services/api/incasari.service';
import { UserService } from '../services/user.service';
import { TokenStorageService } from '../services/token-storage.service';
import { AlertService } from "ngx-alerts";
import { ProgressBarService } from '../services/progress-bar.service';

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

interface cota_TVA {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
  encapsulation: ViewEncapsulation.None
})
export class ModalContentComponent implements OnInit {
  @Input() public user;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  form: any = {};
  currentUser: any;
  data;

  isSuccessful = false;
  isaddFailed = false;
  errorMessage = '';


  cotaTVAList: cota_TVA[] = [
    {value: '19', viewValue: '19%'},
    {value: '9', viewValue: '9%'},
    {value: '5', viewValue: '5%'}
  ];

  constructor(public activeModal: NgbActiveModal, private alimService: IncasariService, private token: TokenStorageService, private userService: UserService,
    public progressBar: ProgressBarService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

  // register(f: NgForm) {
  //   this.alimService.add(f.value).subscribe(() => { })
  //   location.reload();
  // }


  register(f: NgForm) {
    this.alertService.info('Se verifica adaugarea facturii');
    this.progressBar.startLoading();
    this.alimService.add(f.value).subscribe(
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
  // this.authService.register(f.value).subscribe(() => { })
  // //location.reload();
  // }
}