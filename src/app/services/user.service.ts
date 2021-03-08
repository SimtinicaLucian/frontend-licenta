import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';


const API_URL = 'http://localhost:8080/api/';
const API_URL_INC = 'http://localhost:8080/incasari/';
const API_URL_PASSWORD = 'http://localhost:8080/password/';

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


  viewAll(): Observable<any> {
    return this.http.get(API_URL_INC + 'searchAll', { responseType: 'text' });
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

  searchNumber(): Observable<any>{
    return this.http.get(API_URL_INC + 'search' + 'number', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  sendEmail(contact): Observable<any> {
    return this.http.post(API_URL_PASSWORD + 'forgot/' + contact.email, httpOptions);
  }

}

