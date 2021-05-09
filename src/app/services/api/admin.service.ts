
import { Inject, Injectable, Optional } from '@angular/core';
import {
    HttpClient, HttpHeaders, HttpParams,
    HttpResponse, HttpEvent
} from '@angular/common/http';
import { CustomHttpUrlEncodingCodec } from '../api/encoder';

import { Observable } from 'rxjs';

import { Incasari } from '../api/model/incasari';

import { Mail } from '../api/model/mail';

import { User } from '../api/model/user';

import { BASE_PATH, COLLECTION_FORMATS } from '../api/variables';
import { Configuration } from '../api/configuration';
import { isNumber } from 'util';
import { TokenStorageService } from '../token-storage.service';
import {environment} from '../../../environments/environment';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  @Injectable({
    providedIn: 'root'
  })
export class AdminService {

    protected basePath = environment.api;
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public rows: any;
    username: string;

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration, private tokenStorageService: TokenStorageService) {

        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }

    

        /**
     * F
     * M
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
         public searchAllUser(observe?: 'body', reportProgress?: boolean): Observable<any>;
         public searchAllUser(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
         public searchAllUser(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
         public searchAllUser(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
     
             let headers = this.defaultHeaders;
     
             // to determine the Accept header
             let httpHeaderAccepts: string[] = [
                 'application/json'
             ];
             const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
             if (httpHeaderAcceptSelected != undefined) {
                 headers = headers.set('Accept', httpHeaderAcceptSelected);
             }
             // to determine the Content-Type header
             const consumes: string[] = [
             ];
     
             return this.httpClient.get<Array<User>>(`${this.basePath}/api/user/viewAll`,
                 {
                     withCredentials: this.configuration.withCredentials,
                     headers: headers,
                     observe: observe,
                     reportProgress: reportProgress
                 }
             );
         }


         deleteUserId(id) {
            return this.httpClient.delete(`${this.basePath}/api/user/delete/${encodeURIComponent(Number(id))}`)
                .map(res => {
                    this.rows;
                })
        }


           /**
     * Updates a pet in the store with form data
     * @param role_id id that need to be updated
     * @param id
*      @param body Pet object that needs to be added to the store
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUser(role_id: number, id: number,  observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateUser(role_id: number, id: number,  observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateUser(role_id: number, id: number,  observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateUser(role_id: number, id: number,  observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (role_id === null || role_id === undefined) {
            throw new Error('Required parameter username was null or undefined when calling updateUser.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateUser.');
        }




  



        let headers = this.defaultHeaders;

        // authentication (petstore_auth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/xml',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/x-www-form-urlencoded'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void | HttpParams; };
        let useForm = false;
        let convertFormParamsToString = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }



        return this.httpClient.put<any>(`${this.basePath}/api/user/role/update/${encodeURIComponent(Number(role_id))}/${encodeURIComponent(Number(id))}`,     
        {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }
        ).map(res=>
            {
                this.rows;
            })
    }




    




}