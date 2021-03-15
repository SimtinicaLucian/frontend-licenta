import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Router, CanActivate, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { AlertService } from "ngx-alerts";
import { ProgressBarService } from '../services/progress-bar.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private route: ActivatedRoute,private router: Router, private authService: AuthService, private tokenStorage: TokenStorageService, public progressBar: ProgressBarService,
    private alertService: AlertService) { }

  ngOnInit(){
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }


  onSubmit() {
    this.alertService.info('Checking User login');
    this.progressBar.startLoading();
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        
        if(this.isLoggedIn){
          // window.alert("You was successfully log-in!");
          // window.location.reload();

          this.progressBar.setSuccess();
          console.log('User logged in');
          this.alertService.success('Logged In');
          this.progressBar.completeLoading();

          // this.router.navigate(['/home'])
          // window.location.reload();

          
        }
      
      },
      err => {
        this.progressBar.setError();
        console.log(err);
        this.alertService.danger('Unable to Login');
        this.progressBar.completeLoading();
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }





}
