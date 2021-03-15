import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { IncasariService } from '../services//api/incasari.service';
import { TokenStorageService } from '../services/token-storage.service';


@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {
  form: any = {};
  model: any = {};
  requestParams: any = {};
  tokenValue: string;
  public rows: any;
  token: string;
  constructor(private userService: UserService, private incasariService: IncasariService, private route: ActivatedRoute, private tokenStorage: TokenStorageService) {
  }

  ngOnInit() {
    this.model.token = this.route.snapshot.queryParamMap.get('token');

  }




  changePassword() {
    console.log(this.model);
    this.userService.changePassword(this.model).subscribe(() => {
      console.log("success");
      window.location.reload();
    },
    error => {
      console.log("error");
    })
      
    }
    
  }





