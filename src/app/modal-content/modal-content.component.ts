import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
// import { IncasariService } from '../api';
import { IncasariService } from '../services/api/incasari.service';
import { UserService } from '../services/user.service';
import { TokenStorageService } from '../services/token-storage.service';
@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
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

  constructor(public activeModal: NgbActiveModal, private alimService:IncasariService, private token: TokenStorageService, private userService :UserService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

  // register(f: NgForm) {
  //   this.alimService.add(f.value).subscribe(() => { })
  //   location.reload();
  // }


  register(f: NgForm) {
    this.alimService.add(f.value).subscribe(
      data => {
        console.log(data);
        if(data){
        this.isSuccessful = true;
        this.isaddFailed = false;
        console.log("Succesful?: " +  this.isSuccessful);
        console.log("Failed?: " +  this.isaddFailed );
        // window.alert("You was successfully log-in!");
        window.location.reload();
        }
        else
        {
          this.isSuccessful = false;
          this.isaddFailed = true;
        }
      },
      err => {
        this.errorMessage = err.error.message;
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