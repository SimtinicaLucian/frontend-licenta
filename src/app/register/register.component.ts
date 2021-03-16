import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ProgressBarService } from '../services/progress-bar.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = ''
  currentUser: any;
  isLoggedIn = false;

;

  constructor(private authService: AuthService, public progressBar: ProgressBarService,
    private alertService: AlertService) { }

  ngOnInit(){
  }

  onSubmit() {
    this.alertService.info('Working on creating new account');
    this.progressBar.startLoading();
    this.authService.register(this.form).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.progressBar.setSuccess();
        console.log('User created');
        this.alertService.success('Account Created');
        this.progressBar.completeLoading();
        // window.location.reload();
        
      },
      err => {
        this.progressBar.setError();
        console.log(err);
        this.alertService.danger(err.error.message);
        this.progressBar.completeLoading();

        // this.errorMessage = err.error.message;
        this.isSignUpFailed = true;

      }
    );
  }

}
