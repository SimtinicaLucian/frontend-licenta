import { Component, OnInit } from '@angular/core';
import { UserService} from '../services/user.service';
import { AlertService } from "ngx-alerts";
import { ProgressBarService } from '../services/progress-bar.service';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent implements OnInit {
  form: any = {};

  
  isLoginFailed = false;



  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = ''

  constructor(private userService : UserService, 
    public progressBar: ProgressBarService,
    private alertService: AlertService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.alertService.info('Se lucreaza la trimiterea e-mailului');
    this.progressBar.startLoading();

    this.userService.sendEmail(this.form).subscribe(
      data => {
        this.progressBar.setSuccess();
        this.alertService.success('Verificati adresa de e-mail pentru a schimba parola ');
        console.log('Check email to change password');
        this.progressBar.completeLoading();
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