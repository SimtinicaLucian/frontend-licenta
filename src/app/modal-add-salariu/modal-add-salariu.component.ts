import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../services/user.service';
import { TokenStorageService } from '../services/token-storage.service';
import { AlertService } from "ngx-alerts";
import { ProgressBarService } from '../services/progress-bar.service';
import { SalariuService } from '../services/api/salariu.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-add-salariu',
  templateUrl: './modal-add-salariu.component.html',
  styleUrls: ['./modal-add-salariu.component.scss']
})
export class ModalAddSalariuComponent implements OnInit {
  form: any = {};
  currentUser: any;
  data;

  isSuccessful = false;
  isaddFailed = false;
  errorMessage = '';

  constructor(private salariuService : SalariuService, public activeModal: NgbActiveModal, private token: TokenStorageService, private userService: UserService,
    public progressBar: ProgressBarService,
    private alertService: AlertService) { }

  ngOnInit(): void {
  }


  register(f: NgForm) {
    this.alertService.info('Se verifica adaugarea facturii');
    this.progressBar.startLoading();
    this.salariuService.add(f.value).subscribe(
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
