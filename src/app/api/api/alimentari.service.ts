
import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { Alimentari } from '../model/alimentari';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { isNumber } from 'util';


@Injectable()
export class AlimentariService {

    protected basePath = 'http://localhost:8080';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
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


///////////////////////////////////////////////

 
    /**
     * Deletes a pet
     * 
     * @param number ID of pet to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deletePet(number: number, observe?: 'body', reportProgress?: boolean): Observable<Alimentari>;
    public deletePet(number: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Alimentari>>;
    public deletePet(number: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Alimentari>>;
    public deletePet(number: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (number === null || number === undefined) {
            throw new Error('Required parameter number was null or undefined when calling deletePet.');
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
        ];

        return this.httpClient.delete<Alimentari>(`${this.basePath}/alimentari/delete/${encodeURIComponent(String(number))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }


///////////////////////////////////////////////






    


    /**
     * Add a new coast
     * 
     * @param body Pet object that needs to be added to the store
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public add(body: Alimentari, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public add(body: Alimentari, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public add(body: Alimentari, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public add(body: Alimentari, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<any>(`${this.basePath}/alimentari/add`,
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
    public alimentariSearchAllGet(observe?: 'body', reportProgress?: boolean): Observable<Array<Alimentari>>;
    public alimentariSearchAllGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Alimentari>>>;
    public alimentariSearchAllGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Alimentari>>>;
    public alimentariSearchAllGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<Alimentari>>(`${this.basePath}/alimentari/searchAll`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Find pet by ID
     * Returns a single pet
     * @param number ID of pet to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPetById(number: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Alimentari>>;
    public getPetById(number: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Alimentari>>>;
    public getPetById(number: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Alimentari>>>;
    public getPetById(number: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (number === null || number === undefined) {
            throw new Error('Required parameter number was null or undefined when calling getPetById.');
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
        ];

        return this.httpClient.get<Array<Alimentari>>(`${this.basePath}/alimentari/search/number/${encodeURIComponent(String(number))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }



       /**
     * Find pet by ID
     * Returns a single pet
     * @param furnizor ID of pet to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPetByFurnizor(furnizor: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Alimentari>>;
    public getPetByFurnizor(furnizor: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Alimentari>>>;
    public getPetByFurnizor(furnizor: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Alimentari>>>;
    public getPetByFurnizor(furnizor: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (furnizor === null || furnizor === undefined) {
            throw new Error('Required parameter furnizor was null or undefined when calling getPetByFurnizor.');
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
        ];

        return this.httpClient.get<Array<Alimentari>>(`${this.basePath}/alimentari/search/furnizor/${encodeURIComponent(String(furnizor))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    
}