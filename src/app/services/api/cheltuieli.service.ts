
import { Inject, Injectable, Optional } from '@angular/core';
import {
    HttpClient, HttpHeaders, HttpParams,
    HttpResponse, HttpEvent
} from '@angular/common/http';
import { CustomHttpUrlEncodingCodec } from '../api/encoder';

import { Observable } from 'rxjs';

import { Cheltuieli } from '../api/model/cheltuieli';


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
export class CheltuieliService {
 
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
         public add(body: Cheltuieli, observe?: 'body', reportProgress?: boolean): Observable<any>;
         public add(body: Cheltuieli, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
         public add(body: Cheltuieli, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
         public add(body: Cheltuieli, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
     
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
     
             return this.httpClient.post<any>(`${this.basePath}/cheltuieli/add`,
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
       public cheltuieliSearchAll(observe?: 'body', reportProgress?: boolean): Observable<any>;
       public cheltuieliSearchAll(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
       public cheltuieliSearchAll(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
       public cheltuieliSearchAll(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
   
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
   
           return this.httpClient.get<Array<Cheltuieli>>(`${this.basePath}/cheltuieli/searchAll`,
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
    public searchSumTotalCuTVA(observe?: 'body', reportProgress?: boolean): Observable<Number>;
    public searchSumTotalCuTVA(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
    public searchSumTotalCuTVA(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
    public searchSumTotalCuTVA(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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
     * Get user by user name
     * 
     * @param data1 The name that needs to be fetched. Use user1 for testing. 
     * @param data2 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public culculareSumaTotalaCuTVAData1Data2(data1: string, data2?: string, observe?: 'body', reportProgress?: boolean): Observable<Number>;
    public culculareSumaTotalaCuTVAData1Data2(data1: string, data2?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
    public culculareSumaTotalaCuTVAData1Data2(data1: string, data2?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
    public culculareSumaTotalaCuTVAData1Data2(data1: string, data2?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (data1 === null || data1 === undefined) {
            throw new Error('Required parameter data1 was null or undefined when calling getUserByName.');
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

        return this.httpClient.get<Number>(`${this.basePath}/cheltuieli/culculareSumaTotalaCuTVADataMinDataMax`,
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
      public calculareSumaTotalaCuTVAMonthYear(month: string, year?: string, observe?: 'body', reportProgress?: boolean): Observable<Number>;
      public calculareSumaTotalaCuTVAMonthYear(month: string, year?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
      public calculareSumaTotalaCuTVAMonthYear(month: string, year?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
      public calculareSumaTotalaCuTVAMonthYear(month: string, year?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
  
          if (month === null || month === undefined) {
              throw new Error('Required parameter data1 was null or undefined when calling getUserByName.');
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
  
          return this.httpClient.get<Number>(`${this.basePath}/cheltuieli/calculareSumaTotalaCuTVAMonthYear`,
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
     * Updates a pet in the store with form data
     * @param id id that need to be updated
*      @param body Pet object that needs to be added to the store
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateCheltuieli(id: number, body: Cheltuieli, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateCheltuieli(id: number, body: Cheltuieli, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateCheltuieli(id: number, body: Cheltuieli, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateCheltuieli(id: number, body: Cheltuieli, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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



        return this.httpClient.put<any>(`${this.basePath}/cheltuieli/update/${encodeURIComponent(String(id))}`,
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
        return this.httpClient.get(`${this.basePath}/cheltuieli/search/id/${encodeURIComponent(String(id))}`)
            .map(res => {
                this.rows;
            })
    }

        /**
 * Get user by user name
 * 
 * @param beneficiar The name that needs to be fetched. Use user1 for testing. 
 * @param data1 
 * @param data2 
 * @param sumaTotala1 
 * @param sumaTotala2 
 * @param stare
 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
 * @param reportProgress flag to report request and response progress.
 */
    public Filtrare(beneficiar: string, data1?: string, data2?: string, sumaTotala1?: number, sumaTotala2?: number, stare?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Cheltuieli>>;
    public Filtrare(beneficiar: string, data1?: string, data2?: string, sumaTotala1?: number, sumaTotala2?: number, stare?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Cheltuieli>>>;
    public Filtrare(beneficiar: string, data1?: string, data2?: string, sumaTotala1?: number, sumaTotala2?: number, stare?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpResponse<Array<Cheltuieli>>>;
    public Filtrare(beneficiar: string, data1?: string, data2?: string, sumaTotala1?: number, sumaTotala2?: number, stare?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {




        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (beneficiar !== undefined && beneficiar !== null) {
            queryParameters = queryParameters.set('beneficiar', <any>beneficiar);
        }
        if (data1 !== undefined && data1 !== null) {
            queryParameters = queryParameters.set('data1', <any>data1);
        }
        if (data2 !== undefined && data2 !== null) {
            queryParameters = queryParameters.set('data2', <any>data2);
        }
        if (sumaTotala1 !== undefined && sumaTotala1 !== null) {
            queryParameters = queryParameters.set('sumaTotala1', <any>sumaTotala1);
        }
        if (sumaTotala2 !== undefined && sumaTotala2 !== null) {
            queryParameters = queryParameters.set('sumaTotala2', <any>sumaTotala2);
        }
        if (stare !== undefined && stare !== null) {
            queryParameters = queryParameters.set('stare', <any>stare);
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

        return this.httpClient.get<Array<Cheltuieli>>(`${this.basePath}/cheltuieli/filtrare`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }


    deleteId(id) {
        return this.httpClient.delete(`${this.basePath}/cheltuieli/delete/${encodeURIComponent(String(id))}`)
            .map(res => {
                this.rows;
            })
    }











}