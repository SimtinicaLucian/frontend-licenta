import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { IncasariService } from '../services//api/incasari.service';
import { TokenStorageService } from '../services/token-storage.service';
import { AlertService } from "ngx-alerts";
import { ProgressBarService } from '../services/progress-bar.service';



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


  isLoginFailed = false;

  roles: string[] = [];
  fieldTextType: boolean;


  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = ''

  
  
  constructor(private userService: UserService, private incasariService: IncasariService, private route: ActivatedRoute, private tokenStorage: TokenStorageService,
    public progressBar: ProgressBarService,
    private alertService: AlertService,
    private router: Router) {
  }

  ngOnInit() {
    this.model.token = this.route.snapshot.queryParamMap.get('token');

  }




  changePassword() {
    this.alertService.info('Se lucreaza la schimbarea parolei ');
    this.progressBar.startLoading();
    this.userService.changePassword(this.model).subscribe(() => {
      this.progressBar.setSuccess();
      console.log("success");
      this.alertService.success('Parola schimbata');
      this.progressBar.completeLoading();
      this.router.navigate(['/login'])
    }, error => {
      this.progressBar.setError();
      console.log(error);
      this.alertService.danger('Unable to change password');
      this.progressBar.completeLoading();
    })
  }
    
  }





