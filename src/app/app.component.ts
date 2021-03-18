import { Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';
import { NgProgress } from "@ngx-progressbar/core";
import { ProgressBarService } from "./services/progress-bar.service";
import { AuthService } from "./services/auth.service";
import { Alert, AlertService } from "ngx-alerts";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  title = 'AdCost';
  currentUser: any;


  constructor(private tokenStorageService: TokenStorageService, private progress: NgProgress,
    public progressBar: ProgressBarService,
    public authService: AuthService,
    public alertService: AlertService
     ){}

  ngOnInit() {

    this.currentUser = this.tokenStorageService.getUser();

    this.progressBar.progressRef = this.progress.ref("progressBar");

    
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }


}
