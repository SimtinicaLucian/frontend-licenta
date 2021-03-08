import { Component, OnInit } from '@angular/core';
import { UserService} from '../services/user.service';

@Component({
  selector: 'app-password-forgot',
  templateUrl: './password-forgot.component.html',
  styleUrls: ['./password-forgot.component.scss']
})
export class PasswordForgotComponent implements OnInit {
  form: any = {};

  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.userService.sendEmail(this.form).subscribe();
    window.location.reload();
  }

}
