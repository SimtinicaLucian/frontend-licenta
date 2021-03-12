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
    // console.log(this.model.token);

    // this.tokenStorage.saveToken(this.route.snapshot.queryParamMap.get('token'))
    // console.log(this.tokenStorage.saveToken(this.model.token));

    
    // this.route.queryParams
    // .filter(params => params.token)
    // .subscribe(params => {
    //   console.log(params);
    //   this.tokenValue = params.token;
    // });
  }




  changePassword() {
    console.log(this.model);
    this.userService.changePassword(this.model).subscribe(() => {
      console.log("success");
    },
    error => {
      console.log("error");
    })
      
    }
    // window.location.reload();
  }


  // onSubmit() {
  //   this.authService.login(this.form).subscribe(
  //     data => {
  //       this.tokenStorage.saveToken(data.accessToken);
  //       this.tokenStorage.saveUser(data);

  //       this.isLoginFailed = false;
  //       this.isLoggedIn = true;
  //       this.roles = this.tokenStorage.getUser().roles;
        
  //       if(this.isLoggedIn){
          
  //         // this.router.navigate(['/home'])
  //         // window.location.reload();
  //         window.alert("You was successfully log-in!");
  //         window.location.reload();
          
  //       }
      
  //     },
  //     err => {
  //       this.errorMessage = err.error.message;
  //       this.isLoginFailed = true;
  //     }
  //   );
  // }



