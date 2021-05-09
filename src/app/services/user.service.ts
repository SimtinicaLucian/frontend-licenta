import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { Mail } from './api/model/mail'; 
import {environment} from '../../environments/environment';


const AUTH_API = environment.api + '/password/';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class UserService {
  username: string;
  constructor(private http: HttpClient, private tokenStorageService :TokenStorageService ) { }




  sendEmail(contact): Observable<any> {
    return this.http.post(AUTH_API + 'forgot/' + contact.email, httpOptions);
  }


  changePassword(model: any) {
    return this.http.post(AUTH_API + "change", model);
  }
  


  

}

