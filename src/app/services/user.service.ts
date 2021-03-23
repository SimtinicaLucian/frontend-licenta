import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { Mail } from './api/model/mail'; 


const API_URL = 'http://localhost:8080/api/';
const API_URL_INC = 'http://localhost:8080/incasari/';
const API_URL_PASSWORD = 'http://localhost:8080/password/';
const changePasswordUrl = "http://localhost:4200/password/reset/";

const API_URL_contact = 'http://localhost:8080/api/user/mail/';

const API_URL_Users = 'http://localhost:8080/api/user/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class UserService {
  username: string;
  constructor(private http: HttpClient, private tokenStorageService :TokenStorageService ) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getPublicContent1(): Observable<any> {
    return this.http.get(API_URL_INC + 'all', { responseType: 'text' });
  }


  add(incasari): Observable<any> {
    const user = this.tokenStorageService.getUser();
    this.username = user.username;
    return this.http.post(API_URL_INC + 'add', {
      data : incasari.data,
      byAdded: this.username,
      furnizor: incasari.furnizor,
      number : incasari.number,
      detalii : incasari.detalii,
      sumaTotala : incasari.sumaTotala,
      sumaFaraTVA : incasari.sumaFaraTVA,
      sumaTVA : incasari.sumaTVA
    }, httpOptions);
  }



  sendEmail(contact): Observable<any> {
    return this.http.post(API_URL_PASSWORD + 'forgot/' + contact.email, httpOptions);
  }


  changePassword(model: any) {
    return this.http.post(API_URL_PASSWORD + "change", model);
  }
  


  

}

