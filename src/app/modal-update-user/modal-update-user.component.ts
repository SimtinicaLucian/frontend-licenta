import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from "ngx-alerts";
import { ProgressBarService } from '../services/progress-bar.service';
import { AdminService } from '../services/api/admin.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-modal-update-user',
  templateUrl: './modal-update-user.component.html',
  styleUrls: ['./modal-update-user.component.scss']
})
export class ModalUpdateUserComponent implements OnInit {
  rows: any;
  j: any;
  isSuccessful = false;
  isaddFailed = false;
  errorMessage = '';
  selected = '3';

  constructor(public activeModal: NgbActiveModal, public adminService: AdminService,
    public progressBar: ProgressBarService,
    private alertService: AlertService) { }

  ngOnInit(): void {
  }

  getUsers() {
    this.adminService.searchAllUser().subscribe(res => {
      this.rows = res;
    })
  }

  close() {
    this.activeModal.dismiss('Cross click')
    location.reload();
  }


  updateUser(j, ) {
    this.alertService.info('Checking update user');
    this.progressBar.startLoading();
    console.log(this.j.id);
    this.adminService.updateUser(this.j.role_id, this.j.id).subscribe(() => { 
      this.progressBar.setSuccess();
      this.progressBar.completeLoading();
      this.getUsers()
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
