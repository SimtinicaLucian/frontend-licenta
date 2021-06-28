
import { Inject, Injectable, Optional } from '@angular/core';
import {
    HttpClient, HttpHeaders, HttpParams,
    HttpResponse, HttpEvent
} from '@angular/common/http';
import { CustomHttpUrlEncodingCodec } from '../api/encoder';

import { Observable } from 'rxjs';

import { Cheltuieli } from '../api/model/cheltuieli';
import { Incasari } from '../api/model/incasari';


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
export class StatisticsService {

    protected basePath = environment.api + '/statistics';
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
    public calculareSumaTotalaCuTVA_Incasari(observe?: 'body', reportProgress?: boolean): Observable<Number>;
    public calculareSumaTotalaCuTVA_Incasari(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
    public calculareSumaTotalaCuTVA_Incasari(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
    public calculareSumaTotalaCuTVA_Incasari(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.get<Number>(`${this.basePath}/incasari/calculareSumaTotalaCuTVA`,
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
    public calculareSumaTotalaCuTVA_Cheltuieli(observe?: 'body', reportProgress?: boolean): Observable<Number>;
    public calculareSumaTotalaCuTVA_Cheltuieli(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
    public calculareSumaTotalaCuTVA_Cheltuieli(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
    public calculareSumaTotalaCuTVA_Cheltuieli(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.get<Number>(`${this.basePath}/cheltuieli/calculareSumaTotalaCuTVA`,
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
public calculareSalariuNet_Total(observe?: 'body', reportProgress?: boolean): Observable<Number>;
public calculareSalariuNet_Total(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
public calculareSalariuNet_Total(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
public calculareSalariuNet_Total(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

    return this.httpClient.get<Number>(`${this.basePath}/salariu/salariuNet_Total`,
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
    public calculareSumaTotalaFaraTVA_Incasari(observe?: 'body', reportProgress?: boolean): Observable<Number>;
    public calculareSumaTotalaFaraTVA_Incasari(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
    public calculareSumaTotalaFaraTVA_Incasari(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
    public calculareSumaTotalaFaraTVA_Incasari(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.get<Number>(`${this.basePath}/incasari/calculareSumaTotalaFaraTVA`,
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
    public calculareSumaTotalaFaraTVA_Cheltuieli(observe?: 'body', reportProgress?: boolean): Observable<Number>;
    public calculareSumaTotalaFaraTVA_Cheltuieli(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
    public calculareSumaTotalaFaraTVA_Cheltuieli(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
    public calculareSumaTotalaFaraTVA_Cheltuieli(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.get<Number>(`${this.basePath}/cheltuieli/calculareSumaTotalaFaraTVA`,
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
    public calculareSumaTotalaTVA_Incasari(observe?: 'body', reportProgress?: boolean): Observable<Number>;
    public calculareSumaTotalaTVA_Incasari(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
    public calculareSumaTotalaTVA_Incasari(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
    public calculareSumaTotalaTVA_Incasari(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.get<Number>(`${this.basePath}/incasari/calculareSumaTotalaTVA`,
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
    public calculareSumaTotalaTVA_Cheltuieli(observe?: 'body', reportProgress?: boolean): Observable<Number>;
    public calculareSumaTotalaTVA_Cheltuieli(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
    public calculareSumaTotalaTVA_Cheltuieli(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
    public calculareSumaTotalaTVA_Cheltuieli(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.get<Number>(`${this.basePath}/cheltuieli/calculareSumaTotalaTVA`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }



    /**
     * Get user by user name
     * 
     * @param data1 The name that needs to be fetched. Use user1 for testing. 
     * @param data2 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public calculareSumaTotalaCuTVADataMinDataMax_Incasari(data1: string, data2?: string, observe?: 'body', reportProgress?: boolean): Observable<Number>;
    public calculareSumaTotalaCuTVADataMinDataMax_Incasari(data1: string, data2?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
    public calculareSumaTotalaCuTVADataMinDataMax_Incasari(data1: string, data2?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
    public calculareSumaTotalaCuTVADataMinDataMax_Incasari(data1: string, data2?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (data1 === null || data1 === undefined) {
            throw new Error('Data1 is null');
        }


        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (data1 !== undefined && data1 !== null) {
            queryParameters = queryParameters.set('data1', <any>data1);
        }
        if (data2 !== undefined && data2 !== null) {
            queryParameters = queryParameters.set('data2', <any>data2);
        }

        let headers = this.defaultHeaders;

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
        ];

        return this.httpClient.get<Number>(`${this.basePath}/incasari/calculareSumaTotalaCuTVADataMinDataMax`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }




    /**
* Get user by user name
* 
* @param data1 The name that needs to be fetched. Use user1 for testing. 
* @param data2 
* @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
* @param reportProgress flag to report request and response progress.
*/
    public calculareSumaTotalaCuTVADataMinDataMax_Cheltuieli(data1: string, data2?: string, observe?: 'body', reportProgress?: boolean): Observable<Number>;
    public calculareSumaTotalaCuTVADataMinDataMax_Cheltuieli(data1: string, data2?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
    public calculareSumaTotalaCuTVADataMinDataMax_Cheltuieli(data1: string, data2?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
    public calculareSumaTotalaCuTVADataMinDataMax_Cheltuieli(data1: string, data2?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (data1 === null || data1 === undefined) {
            throw new Error('Data1 is null');
        }


        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (data1 !== undefined && data1 !== null) {
            queryParameters = queryParameters.set('data1', <any>data1);
        }
        if (data2 !== undefined && data2 !== null) {
            queryParameters = queryParameters.set('data2', <any>data2);
        }

        let headers = this.defaultHeaders;

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
        ];

        return this.httpClient.get<Number>(`${this.basePath}/cheltuieli/calculareSumaTotalaCuTVADataMinDataMax`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }


    /**
* Get user by user name
* 
* @param data1 The name that needs to be fetched. Use user1 for testing. 
* @param data2 
* @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
* @param reportProgress flag to report request and response progress.
*/
    public calculareSumaTotalaFaraTVADataMinDataMax_Incasari(data1: string, data2?: string, observe?: 'body', reportProgress?: boolean): Observable<Number>;
    public calculareSumaTotalaFaraTVADataMinDataMax_Incasari(data1: string, data2?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
    public calculareSumaTotalaFaraTVADataMinDataMax_Incasari(data1: string, data2?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
    public calculareSumaTotalaFaraTVADataMinDataMax_Incasari(data1: string, data2?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (data1 === null || data1 === undefined) {
            throw new Error('Data1 is null');
        }


        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (data1 !== undefined && data1 !== null) {
            queryParameters = queryParameters.set('data1', <any>data1);
        }
        if (data2 !== undefined && data2 !== null) {
            queryParameters = queryParameters.set('data2', <any>data2);
        }

        let headers = this.defaultHeaders;

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
        ];

        return this.httpClient.get<Number>(`${this.basePath}/incasari/calculareSumaTotalaFaraTVADataMinDataMax`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }


    /**
* Get user by user name
* 
* @param data1 The name that needs to be fetched. Use user1 for testing. 
* @param data2 
* @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
* @param reportProgress flag to report request and response progress.
*/
    public calculareSumaTotalaFaraTVADataMinDataMax_Cheltuieli(data1: string, data2?: string, observe?: 'body', reportProgress?: boolean): Observable<Number>;
    public calculareSumaTotalaFaraTVADataMinDataMax_Cheltuieli(data1: string, data2?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
    public calculareSumaTotalaFaraTVADataMinDataMax_Cheltuieli(data1: string, data2?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
    public calculareSumaTotalaFaraTVADataMinDataMax_Cheltuieli(data1: string, data2?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (data1 === null || data1 === undefined) {
            throw new Error('Data1 is null');
        }


        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (data1 !== undefined && data1 !== null) {
            queryParameters = queryParameters.set('data1', <any>data1);
        }
        if (data2 !== undefined && data2 !== null) {
            queryParameters = queryParameters.set('data2', <any>data2);
        }

        let headers = this.defaultHeaders;

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
        ];

        return this.httpClient.get<Number>(`${this.basePath}/cheltuieli/calculareSumaTotalaFaraTVADataMinDataMax`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }


    /**
* Get user by user name
* 
* @param data1 The name that needs to be fetched. Use user1 for testing. 
* @param data2 
* @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
* @param reportProgress flag to report request and response progress.
*/
    public calculareSumaTotalaTVADataMinDataMax_Incasari(data1: string, data2?: string, observe?: 'body', reportProgress?: boolean): Observable<Number>;
    public calculareSumaTotalaTVADataMinDataMax_Incasari(data1: string, data2?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
    public calculareSumaTotalaTVADataMinDataMax_Incasari(data1: string, data2?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
    public calculareSumaTotalaTVADataMinDataMax_Incasari(data1: string, data2?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (data1 === null || data1 === undefined) {
            throw new Error('Data1 is null');
        }


        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (data1 !== undefined && data1 !== null) {
            queryParameters = queryParameters.set('data1', <any>data1);
        }
        if (data2 !== undefined && data2 !== null) {
            queryParameters = queryParameters.set('data2', <any>data2);
        }

        let headers = this.defaultHeaders;

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
        ];

        return this.httpClient.get<Number>(`${this.basePath}/incasari/calculareSumaTotalaTVADataMinDataMax`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }



    /**
* Get user by user name
* 
* @param data1 The name that needs to be fetched. Use user1 for testing. 
* @param data2 
* @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
* @param reportProgress flag to report request and response progress.
*/
    public calculareSumaTotalaTVADataMinDataMax_Cheltuieli(data1: string, data2?: string, observe?: 'body', reportProgress?: boolean): Observable<Number>;
    public calculareSumaTotalaTVADataMinDataMax_Cheltuieli(data1: string, data2?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
    public calculareSumaTotalaTVADataMinDataMax_Cheltuieli(data1: string, data2?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
    public calculareSumaTotalaTVADataMinDataMax_Cheltuieli(data1: string, data2?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (data1 === null || data1 === undefined) {
            throw new Error('Data1 is null');
        }


        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (data1 !== undefined && data1 !== null) {
            queryParameters = queryParameters.set('data1', <any>data1);
        }
        if (data2 !== undefined && data2 !== null) {
            queryParameters = queryParameters.set('data2', <any>data2);
        }

        let headers = this.defaultHeaders;

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
        ];

        return this.httpClient.get<Number>(`${this.basePath}/cheltuieli/calculareSumaTotalaTVADataMinDataMax`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }


    /**
      * Get user by user name
      * 
      * @param month The name that needs to be fetched. Use user1 for testing. 
      * @param year 
      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
      * @param reportProgress flag to report request and response progress.
      */
    public calculareSumaTotalaCuTVAMonthAndYear_Incasari(month: string, year?: string, observe?: 'body', reportProgress?: boolean): Observable<Number>;
    public calculareSumaTotalaCuTVAMonthAndYear_Incasari(month: string, year?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
    public calculareSumaTotalaCuTVAMonthAndYear_Incasari(month: string, year?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
    public calculareSumaTotalaCuTVAMonthAndYear_Incasari(month: string, year?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (month === null || month === undefined) {
            throw new Error('Month is null');
        }


        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (month !== undefined && month !== null) {
            queryParameters = queryParameters.set('month', <any>month);
        }
        if (year !== undefined && year !== null) {
            queryParameters = queryParameters.set('year', <any>year);
        }

        let headers = this.defaultHeaders;

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
        ];

        return this.httpClient.get<Number>(`${this.basePath}/incasari/calculareSumaTotalaCuTVAMonthAndYear`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }




    /**
  * Get user by user name
  * 
  * @param month The name that needs to be fetched. Use user1 for testing. 
  * @param year 
  * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
  * @param reportProgress flag to report request and response progress.
  */
    public calculareSumaTotalaCuTVAMonthAndYear_Cheltuieli(month: string, year?: string, observe?: 'body', reportProgress?: boolean): Observable<Number>;
    public calculareSumaTotalaCuTVAMonthAndYear_Cheltuieli(month: string, year?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
    public calculareSumaTotalaCuTVAMonthAndYear_Cheltuieli(month: string, year?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
    public calculareSumaTotalaCuTVAMonthAndYear_Cheltuieli(month: string, year?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (month === null || month === undefined) {
            throw new Error('Month is null');
        }


        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (month !== undefined && month !== null) {
            queryParameters = queryParameters.set('month', <any>month);
        }
        if (year !== undefined && year !== null) {
            queryParameters = queryParameters.set('year', <any>year);
        }

        let headers = this.defaultHeaders;

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
        ];

        return this.httpClient.get<Number>(`${this.basePath}/cheltuieli/calculareSumaTotalaCuTVAMonthAndYear`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }


        /**
  * Get user by user name
  * 
  * @param month The name that needs to be fetched. Use user1 for testing. 
  * @param year 
  * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
  * @param reportProgress flag to report request and response progress.
  */
         public calculareSalariuNetTotalMonthAndYear_Salariu(month: string, year?: string, observe?: 'body', reportProgress?: boolean): Observable<Number>;
         public calculareSalariuNetTotalMonthAndYear_Salariu(month: string, year?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
         public calculareSalariuNetTotalMonthAndYear_Salariu(month: string, year?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
         public calculareSalariuNetTotalMonthAndYear_Salariu(month: string, year?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
     
             if (month === null || month === undefined) {
                 throw new Error('Month is null');
             }
     
     
             let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
             if (month !== undefined && month !== null) {
                 queryParameters = queryParameters.set('month', <any>month);
             }
             if (year !== undefined && year !== null) {
                 queryParameters = queryParameters.set('year', <any>year);
             }
     
             let headers = this.defaultHeaders;
     
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
             ];
     
             return this.httpClient.get<Number>(`${this.basePath}/salariu/calculareSalariuNetTotalMonthAndYear`,
                 {
                     params: queryParameters,
                     withCredentials: this.configuration.withCredentials,
                     headers: headers,
                     observe: observe,
                     reportProgress: reportProgress
                 }
             );
         }




    /**
  * Get user by user name
  * 
  * @param month The name that needs to be fetched. Use user1 for testing. 
  * @param year 
  * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
  * @param reportProgress flag to report request and response progress.
  */
    public calculareSumaTotalaFaraTVAMonthAndYear_Incasari(month: string, year?: string, observe?: 'body', reportProgress?: boolean): Observable<Number>;
    public calculareSumaTotalaFaraTVAMonthAndYear_Incasari(month: string, year?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
    public calculareSumaTotalaFaraTVAMonthAndYear_Incasari(month: string, year?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
    public calculareSumaTotalaFaraTVAMonthAndYear_Incasari(month: string, year?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (month === null || month === undefined) {
            throw new Error('Month is null');
        }


        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (month !== undefined && month !== null) {
            queryParameters = queryParameters.set('month', <any>month);
        }
        if (year !== undefined && year !== null) {
            queryParameters = queryParameters.set('year', <any>year);
        }

        let headers = this.defaultHeaders;

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
        ];

        return this.httpClient.get<Number>(`${this.basePath}/incasari/calculareSumaTotalaFaraTVAMonthAndYear`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }


    /**
* Get user by user name
* 
* @param month The name that needs to be fetched. Use user1 for testing. 
* @param year 
* @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
* @param reportProgress flag to report request and response progress.
*/
    public calculareSumaTotalaFaraTVAMonthAndYear_Cheltuieli(month: string, year?: string, observe?: 'body', reportProgress?: boolean): Observable<Number>;
    public calculareSumaTotalaFaraTVAMonthAndYear_Cheltuieli(month: string, year?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
    public calculareSumaTotalaFaraTVAMonthAndYear_Cheltuieli(month: string, year?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
    public calculareSumaTotalaFaraTVAMonthAndYear_Cheltuieli(month: string, year?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (month === null || month === undefined) {
            throw new Error('Month is null');
        }


        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (month !== undefined && month !== null) {
            queryParameters = queryParameters.set('month', <any>month);
        }
        if (year !== undefined && year !== null) {
            queryParameters = queryParameters.set('year', <any>year);
        }

        let headers = this.defaultHeaders;

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
        ];

        return this.httpClient.get<Number>(`${this.basePath}/cheltuieli/calculareSumaTotalaFaraTVAMonthAndYear`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }


        /**
* Get user by user name
* 
* @param month The name that needs to be fetched. Use user1 for testing. 
* @param year 
* @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
* @param reportProgress flag to report request and response progress.
*/
public calculareSumaTotalaTVAMonthAndYear_Incasari(month: string, year?: string, observe?: 'body', reportProgress?: boolean): Observable<Number>;
public calculareSumaTotalaTVAMonthAndYear_Incasari(month: string, year?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
public calculareSumaTotalaTVAMonthAndYear_Incasari(month: string, year?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
public calculareSumaTotalaTVAMonthAndYear_Incasari(month: string, year?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

    if (month === null || month === undefined) {
        throw new Error('Month is null');
    }


    let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
    if (month !== undefined && month !== null) {
        queryParameters = queryParameters.set('month', <any>month);
    }
    if (year !== undefined && year !== null) {
        queryParameters = queryParameters.set('year', <any>year);
    }

    let headers = this.defaultHeaders;

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
    ];

    return this.httpClient.get<Number>(`${this.basePath}/incasari/calculareSumaTotalaTVAMonthAndYear`,
        {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }
    );
}



        /**
* Get user by user name
* 
* @param month The name that needs to be fetched. Use user1 for testing. 
* @param year 
* @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
* @param reportProgress flag to report request and response progress.
*/
public calculareSumaTotalaTVAMonthAndYear_Cheltuieli(month: string, year?: string, observe?: 'body', reportProgress?: boolean): Observable<Number>;
public calculareSumaTotalaTVAMonthAndYear_Cheltuieli(month: string, year?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
public calculareSumaTotalaTVAMonthAndYear_Cheltuieli(month: string, year?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
public calculareSumaTotalaTVAMonthAndYear_Cheltuieli(month: string, year?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

    if (month === null || month === undefined) {
        throw new Error('Month is null');
    }


    let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
    if (month !== undefined && month !== null) {
        queryParameters = queryParameters.set('month', <any>month);
    }
    if (year !== undefined && year !== null) {
        queryParameters = queryParameters.set('year', <any>year);
    }

    let headers = this.defaultHeaders;

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
    ];

    return this.httpClient.get<Number>(`${this.basePath}/cheltuieli/calculareSumaTotalaTVAMonthAndYear`,
        {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }
    );
}


        /**
* Get user by user name
* 
* @param year 
* @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
* @param reportProgress flag to report request and response progress.
*/
public calculareSumaTotalaCuTVAPerYear_Incasari(year?: string, observe?: 'body', reportProgress?: boolean): Observable<Number>;
public calculareSumaTotalaCuTVAPerYear_Incasari(year?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
public calculareSumaTotalaCuTVAPerYear_Incasari(year?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
public calculareSumaTotalaCuTVAPerYear_Incasari(year?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

    if (year === null || year === undefined) {
        throw new Error('year is null');
    }


    let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
    if (year !== undefined && year !== null) {
        queryParameters = queryParameters.set('year', <any>year);
    }

    let headers = this.defaultHeaders;

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
    ];

    return this.httpClient.get<Number>(`${this.basePath}/incasari/calculareSumaTotalaCuTVAPerYear`,
        {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }
    );
}




        /**
* Get user by user name
* 
* @param year 
* @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
* @param reportProgress flag to report request and response progress.
*/
public calculareSumaTotalaCuTVAPerYear_Cheltuieli(year?: string, observe?: 'body', reportProgress?: boolean): Observable<Number>;
public calculareSumaTotalaCuTVAPerYear_Cheltuieli(year?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
public calculareSumaTotalaCuTVAPerYear_Cheltuieli(year?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
public calculareSumaTotalaCuTVAPerYear_Cheltuieli(year?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

    if (year === null || year === undefined) {
        throw new Error('year is null');
    }


    let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
    if (year !== undefined && year !== null) {
        queryParameters = queryParameters.set('year', <any>year);
    }

    let headers = this.defaultHeaders;

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
    ];

    return this.httpClient.get<Number>(`${this.basePath}/cheltuieli/calculareSumaTotalaCuTVAPerYear`,
        {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }
    );
}



        /**
* Get user by user name
* 
* @param year 
* @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
* @param reportProgress flag to report request and response progress.
*/
public calculareSalariuNetTotalPerYear_Salariu(year?: string, observe?: 'body', reportProgress?: boolean): Observable<Number>;
public calculareSalariuNetTotalPerYear_Salariu(year?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
public calculareSalariuNetTotalPerYear_Salariu(year?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
public calculareSalariuNetTotalPerYear_Salariu(year?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

    if (year === null || year === undefined) {
        throw new Error('year is null');
    }


    let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
    if (year !== undefined && year !== null) {
        queryParameters = queryParameters.set('year', <any>year);
    }

    let headers = this.defaultHeaders;

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
    ];

    return this.httpClient.get<Number>(`${this.basePath}/salariu/calculareSalariuNetTotalPerYear`,
        {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }
    );
}


        /**
* Get user by user name
* 
* @param year 
* @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
* @param reportProgress flag to report request and response progress.
*/
public calculareSumaTotalaFaraTVAPerYear_Incasari(year?: string, observe?: 'body', reportProgress?: boolean): Observable<Number>;
public calculareSumaTotalaFaraTVAPerYear_Incasari(year?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
public calculareSumaTotalaFaraTVAPerYear_Incasari(year?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
public calculareSumaTotalaFaraTVAPerYear_Incasari(year?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

    if (year === null || year === undefined) {
        throw new Error('year is null');
    }


    let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
    if (year !== undefined && year !== null) {
        queryParameters = queryParameters.set('year', <any>year);
    }

    let headers = this.defaultHeaders;

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
    ];

    return this.httpClient.get<Number>(`${this.basePath}/incasari/calculareSumaTotalaFaraTVAPerYear`,
        {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }
    );
}

        /**
* Get user by user name
* 
* @param year 
* @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
* @param reportProgress flag to report request and response progress.
*/
public calculareSumaTotalaFaraTVAPerYear_Cheltuieli(year?: string, observe?: 'body', reportProgress?: boolean): Observable<Number>;
public calculareSumaTotalaFaraTVAPerYear_Cheltuieli(year?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
public calculareSumaTotalaFaraTVAPerYear_Cheltuieli(year?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
public calculareSumaTotalaFaraTVAPerYear_Cheltuieli(year?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

    if (year === null || year === undefined) {
        throw new Error('year is null');
    }


    let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
    if (year !== undefined && year !== null) {
        queryParameters = queryParameters.set('year', <any>year);
    }

    let headers = this.defaultHeaders;

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
    ];

    return this.httpClient.get<Number>(`${this.basePath}/cheltuieli/calculareSumaTotalaFaraTVAPerYear`,
        {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }
    );
}


        /**
* Get user by user name
* 
* @param year 
* @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
* @param reportProgress flag to report request and response progress.
*/
public calculareSumaTotalaTVAPerYear_Incasari(year?: string, observe?: 'body', reportProgress?: boolean): Observable<Number>;
public calculareSumaTotalaTVAPerYear_Incasari(year?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
public calculareSumaTotalaTVAPerYear_Incasari(year?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
public calculareSumaTotalaTVAPerYear_Incasari(year?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

    if (year === null || year === undefined) {
        throw new Error('year is null');
    }


    let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
    if (year !== undefined && year !== null) {
        queryParameters = queryParameters.set('year', <any>year);
    }

    let headers = this.defaultHeaders;

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
    ];

    return this.httpClient.get<Number>(`${this.basePath}/incasari/calculareSumaTotalaTVAPerYear`,
        {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }
    );
}


        /**
* Get user by user name
* 
* @param year 
* @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
* @param reportProgress flag to report request and response progress.
*/
public calculareSumaTotalaTVAPerYear_Cheltuieli(year?: string, observe?: 'body', reportProgress?: boolean): Observable<Number>;
public calculareSumaTotalaTVAPerYear_Cheltuieli(year?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
public calculareSumaTotalaTVAPerYear_Cheltuieli(year?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
public calculareSumaTotalaTVAPerYear_Cheltuieli(year?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

    if (year === null || year === undefined) {
        throw new Error('year is null');
    }


    let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
    if (year !== undefined && year !== null) {
        queryParameters = queryParameters.set('year', <any>year);
    }

    let headers = this.defaultHeaders;

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
    ];

    return this.httpClient.get<Number>(`${this.basePath}/cheltuieli/calculareSumaTotalaTVAPerYear`,
        {
            params: queryParameters,
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
public sold(observe?: 'body', reportProgress?: boolean): Observable<any>;
public sold(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
public sold(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
public sold(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

    return this.httpClient.get<any>(`${this.basePath}/sold`,
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
public Incasari_CountIntarziate(observe?: 'body', reportProgress?: boolean): Observable<any>;
public Incasari_CountIntarziate(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
public Incasari_CountIntarziate(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
public Incasari_CountIntarziate(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

    return this.httpClient.get<any>(`${this.basePath}/incasari/intarziate`,
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
public Cheltuieli_CountIntarziate(observe?: 'body', reportProgress?: boolean): Observable<any>;
public Cheltuieli_CountIntarziate(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
public Cheltuieli_CountIntarziate(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
public Cheltuieli_CountIntarziate(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

    return this.httpClient.get<any>(`${this.basePath}/cheltuieli/intarziate`,
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
public Salariu_CountIntarziate(observe?: 'body', reportProgress?: boolean): Observable<any>;
public Salariu_CountIntarziate(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
public Salariu_CountIntarziate(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
public Salariu_CountIntarziate(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

    return this.httpClient.get<any>(`${this.basePath}/salariu/intarziate`,
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
public Incasari_Intarziate_Rest_DeIncasat(observe?: 'body', reportProgress?: boolean): Observable<any>;
public Incasari_Intarziate_Rest_DeIncasat(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
public Incasari_Intarziate_Rest_DeIncasat(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
public Incasari_Intarziate_Rest_DeIncasat(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

    return this.httpClient.get<any>(`${this.basePath}/incasari/intarziate/Rest_DeIncasat`,
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
public Cheltuieli_Intarziate_Rest_DeAchitat(observe?: 'body', reportProgress?: boolean): Observable<any>;
public Cheltuieli_Intarziate_Rest_DeAchitat(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
public Cheltuieli_Intarziate_Rest_DeAchitat(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
public Cheltuieli_Intarziate_Rest_DeAchitat(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

    return this.httpClient.get<any>(`${this.basePath}/cheltuieli/intarziate/Rest_DeAchitat`,
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
public Salariu_Intarziate_Rest_DeAchitat(observe?: 'body', reportProgress?: boolean): Observable<any>;
public Salariu_Intarziate_Rest_DeAchitat(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
public Salariu_Intarziate_Rest_DeAchitat(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
public Salariu_Intarziate_Rest_DeAchitat(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

    return this.httpClient.get<any>(`${this.basePath}/salariu/intarziate/Rest_DeAchitat`,
        {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }
    );
}


        /**
* Get user by user name
* 
* @param year 
* @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
* @param reportProgress flag to report request and response progress.
*/
public CifraAfaceriPerYear(year?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
public CifraAfaceriPerYear(year?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
public CifraAfaceriPerYear(year?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
public CifraAfaceriPerYear(year?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {



    let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
    if (year !== undefined && year !== null) {
        queryParameters = queryParameters.set('year', <any>year);
    }

    let headers = this.defaultHeaders;

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
    ];

    return this.httpClient.get<any>(`${this.basePath}/cifraAfaceri`,
        {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }
    );
}


        /**
* Get user by user name
* 
* @param month 
* @param year 
* @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
* @param reportProgress flag to report request and response progress.
*/
public Profit_Lunar(month?: string, year?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
public Profit_Lunar(month?: string, year?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
public Profit_Lunar(month?: string, year?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
public Profit_Lunar(month?: string, year?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {



    let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });

    if (month !== undefined && month !== null) {
        queryParameters = queryParameters.set('month', <any>month);
    }

    if (year !== undefined && year !== null) {
        queryParameters = queryParameters.set('year', <any>year);
    }

    let headers = this.defaultHeaders;

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
    ];

    return this.httpClient.get<any>(`${this.basePath}/profit_Lunar`,
        {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }
    );
}





        /**
* Get user by user name
* 
* @param year 
* @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
* @param reportProgress flag to report request and response progress.
*/
public Profit_Anual(year?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
public Profit_Anual(year?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
public Profit_Anual(year?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
public Profit_Anual(year?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {



    let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });



    if (year !== undefined && year !== null) {
        queryParameters = queryParameters.set('year', <any>year);
    }

    let headers = this.defaultHeaders;

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
    ];

    return this.httpClient.get<any>(`${this.basePath}/profit_Anual`,
        {
            params: queryParameters,
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
public Profit_Total(observe?: 'body', reportProgress?: boolean): Observable<any>;
public Profit_Total(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
public Profit_Total(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
public Profit_Total(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

    return this.httpClient.get<any>(`${this.basePath}/profit_Total`,
        {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }
    );
}


       /**
* Get user by user name
* 
* @param month 
* @param year 
* @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
* @param reportProgress flag to report request and response progress.
*/
public BugetulDeStat_TVA(month?: string, year?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
public BugetulDeStat_TVA(month?: string, year?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
public BugetulDeStat_TVA(month?: string, year?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
public BugetulDeStat_TVA(month?: string, year?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {



    let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });

    if (month !== undefined && month !== null) {
        queryParameters = queryParameters.set('month', <any>month);
    }

    if (year !== undefined && year !== null) {
        queryParameters = queryParameters.set('year', <any>year);
    }

    let headers = this.defaultHeaders;

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
    ];

    return this.httpClient.get<any>(`${this.basePath}/BugetulDeStat_TVA`,
        {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }
    );
}





}