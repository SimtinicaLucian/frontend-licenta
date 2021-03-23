import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from "ngx-alerts";
import { ProgressBarService } from '../services/progress-bar.service';
import { AdminService } from '../services/api/admin.service';

@Component({
  selector: 'app-modal-delete-user',
  templateUrl: './modal-delete-user.component.html',
  styleUrls: ['./modal-delete-user.component.scss']
})
export class ModalDeleteUserComponent implements OnInit {
  rows: any;
  j: any;
  isSuccessful = false;

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



  deleteUser(id) {
    this.alertService.info('Checking delete invoice');
    this.progressBar.startLoading();
    console.log(this.j);
    this.adminService.deleteUserId(this.j).subscribe(res => {
      this.progressBar.setSuccess();
      this.progressBar.completeLoading();
      this.getUsers()
      this.isSuccessful = true;
      // window.location.reload();
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
