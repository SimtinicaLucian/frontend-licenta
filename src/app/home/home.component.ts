import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { TokenStorageService } from '../services/token-storage.service';
import { Router, CanActivate, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import {UserService} from '../services/user.service';
import { NgForm } from '@angular/forms';
import { IncasariService } from '../services/api/incasari.service';
import { AlertService } from "ngx-alerts";
import { ProgressBarService } from '../services/progress-bar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  currentUser : any;
  public rows: any;


  constructor(private route: ActivatedRoute,private router: Router, private incasariService : IncasariService, private userService: UserService, public progressBar: ProgressBarService,
    private alertService: AlertService ) { }

  ngOnInit() {

  }

  
  onSubmit(f:NgForm) {
    this.alertService.info('Se lucrează la trimiterea e-mailului ');
    this.progressBar.startLoading();

    this.incasariService.send(f.value).subscribe(
      data => {
        this.progressBar.setSuccess();
        this.alertService.success('Mesajul a fost trimis cu succes');
        console.log('Check email to change password');
        this.progressBar.completeLoading();
        location.reload();
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

