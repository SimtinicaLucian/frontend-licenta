import { Inject, Injectable, Optional } from '@angular/core';
import {
    HttpClient, HttpHeaders, HttpParams,
    HttpResponse, HttpEvent
} from '@angular/common/http';
import { CustomHttpUrlEncodingCodec } from '../api/encoder';

import { Observable } from 'rxjs';

import { Salariu } from '../api/model/salariu';


import { BASE_PATH, COLLECTION_FORMATS } from '../api/variables';
import { Configuration } from '../api/configuration';
import { isNumber } from 'util';
import { TokenStorageService } from '../token-storage.service';
import { environment } from '../../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class SalariuService {

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
* Add a new coast
* 
* @param body Pet object that needs to be added to the store
* @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
* @param reportProgress flag to report request and response progress.
*/
    public add(body: Salariu, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public add(body: Salariu, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public add(body: Salariu, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public add(body: Salariu, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling add.');
        }

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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        const user = this.tokenStorageService.getUser();
        this.username = user.username;

        return this.httpClient.post<any>(`${this.basePath}/salariu/add`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }


    /**
* F
* M
* @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
* @param reportProgress flag to report request and response progress.
*/
    public salariuSearchAll(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public salariuSearchAll(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public salariuSearchAll(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public salariuSearchAll(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.get<Array<Salariu>>(`${this.basePath}/salariu/searchAll`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }


    deleteId(id) {
        return this.httpClient.delete(`${this.basePath}/salariu/delete/${encodeURIComponent(String(id))}`)
            .map(res => {
                this.rows;
            })
    }



           /**
     * Updates a pet in the store with form data
     * @param id id that need to be updated
*      @param body Pet object that needs to be added to the store
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
public updateSalariu(id: number, body: Salariu, observe?: 'body', reportProgress?: boolean): Observable<any>;
public updateSalariu(id: number, body: Salariu, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
public updateSalariu(id: number, body: Salariu, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
public updateSalariu(id: number, body: Salariu, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

    if (id === null || id === undefined) {
        throw new Error('Required parameter username was null or undefined when calling updateUser.');
    }

    if (body === null || body === undefined) {
        throw new Error('Required parameter petId was null or undefined when calling updatePetWithForm.');
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
        formParams = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
    }



    return this.httpClient.put<any>(`${this.basePath}/salariu/update/${encodeURIComponent(String(id))}`,
        body,
        {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }
    ).map(res => {
        this.rows;
    })
}

searchId(id) {
    return this.httpClient.get(`${this.basePath}/salariu/search/id/${encodeURIComponent(String(id))}`)
        .map(res => {
            this.rows;
        })
}

}