
import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { Incasari } from '../model/incasari';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { isNumber } from 'util';



@Injectable()
export class IncasariService {

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
     * Update an existing pet
     * 
     * @param body Pet object that needs to be added to the store
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateIncasari(body: Incasari, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateIncasari(body: Incasari, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateIncasari(body: Incasari, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateIncasari(body: Incasari, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updatePet.');
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
            'application/json',
            'application/xml'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<any>(`${this.basePath}/incasari/update`,
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
     * Updates a pet in the store with form data
     * 
     * @param number ID of pet that needs to be updated
     * @param name Updated name of the pet
     * @param status Updated status of the pet
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateNumber(number: number, name?: string, status?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateNumber(number: number, name?: string, status?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateNumber(number: number, name?: string, status?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateNumber(number: number, name?: string, status?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (number === null || number === undefined) {
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
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (name !== undefined) {
            formParams = formParams.append('name', <any>name) || formParams;
        }
        if (status !== undefined) {
            formParams = formParams.append('status', <any>status) || formParams;
        }

        return this.httpClient.post<any>(`${this.basePath}/incasari/update/${encodeURIComponent(String(number))}`,
            convertFormParamsToString ? formParams.toString() : formParams,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }




// --------------------------------------------

 
    /**
     * Deletes a pet
     * 
     * @param number ID of pet to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteIncasari(number: number, observe?: 'body', reportProgress?: boolean): Observable<Incasari>;
    public deleteIncasari(number: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Incasari>>;
    public deleteIncasari(number: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Incasari>>;
    public deleteIncasari(number: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.delete<Incasari>(`${this.basePath}/incasari/delete/number/${encodeURIComponent(String(number))}`,
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
    public add(body: Incasari, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public add(body: Incasari, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public add(body: Incasari, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public add(body: Incasari, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<any>(`${this.basePath}/incasari/add`,
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
    public incasariSearchAllGet(observe?: 'body', reportProgress?: boolean): Observable<Array<Incasari>>;
    public incasariSearchAllGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Incasari>>>;
    public incasariSearchAllGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Incasari>>>;
    public incasariSearchAllGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<Incasari>>(`${this.basePath}/incasari/searchAll`,
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
    public getPetById(number: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Incasari>>;
    public getPetById(number: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Incasari>>>;
    public getPetById(number: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Incasari>>>;
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

        return this.httpClient.get<Array<Incasari>>(`${this.basePath}/incasari/search/number/${encodeURIComponent(String(number))}`,
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
    public searchTotal(observe?: 'body', reportProgress?: boolean): Observable<Number>;
    public searchTotal(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
    public searchTotal(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
    public searchTotal(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Number>(`${this.basePath}/incasari/searchAllTotal`,
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
    public searchTotalTVA(observe?: 'body', reportProgress?: boolean): Observable<Number>;
    public searchTotalTVA(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
    public searchTotalTVA(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
    public searchTotalTVA(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Number>(`${this.basePath}/incasari/searchAllTVA`,
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
    public searchTotalFaraTVA(observe?: 'body', reportProgress?: boolean): Observable<Number>;
    public searchTotalFaraTVA(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
    public searchTotalFaraTVA(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
    public searchTotalFaraTVA(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Number>(`${this.basePath}/incasari/searchAllFaraTVA`,
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
     * @param data ID of pet to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPetByDate(data: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Incasari>>;
    public getPetByDate(data: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Incasari>>>;
    public getPetByDate(data: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Incasari>>>;
    public getPetByDate(data: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (data === null || data === undefined) {
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

        return this.httpClient.get<Array<Incasari>>(`${this.basePath}/incasari/search/data/${encodeURIComponent(String(DataTransferItem))}`,
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
    public getPetByFurnizor(furnizor: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Incasari>>;
    public getPetByFurnizor(furnizor: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Incasari>>>;
    public getPetByFurnizor(furnizor: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Incasari>>>;
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

        return this.httpClient.get<Array<Incasari>>(`${this.basePath}/incasari/search/furnizor/${encodeURIComponent(String(furnizor))}`,
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
     * @param firstDate The name that needs to be fetched. Use user1 for testing. 
     * @param secondDate 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSumaTotalaBetweenDate(firstDate: string, secondDate?: string, observe?: 'body', reportProgress?: boolean): Observable<Number>;
    public getSumaTotalaBetweenDate(firstDate: string, secondDate?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
    public getSumaTotalaBetweenDate(firstDate: string, secondDate?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
    public getSumaTotalaBetweenDate(firstDate: string, secondDate?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (firstDate === null || firstDate === undefined) {
            throw new Error('Required parameter firstDate was null or undefined when calling getUserByName.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (firstDate !== undefined && firstDate !== null) {
            queryParameters = queryParameters.set('firstDate', <any>firstDate);
        }
        if (secondDate !== undefined && secondDate !== null) {
            queryParameters = queryParameters.set('secondDate', <any>secondDate);
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

        return this.httpClient.get<Number>(`${this.basePath}/incasari/calculateTotalByDataBetweenData`,
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
     * @param firstDate1 The name that needs to be fetched. Use user1 for testing. 
     * @param secondDate1 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSumaTotalaMonthAndYear(firstDate1: string, secondDate1?: string, observe?: 'body', reportProgress?: boolean): Observable<Number>;
    public getSumaTotalaMonthAndYear(firstDate1: string, secondDate1?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Number>>;
    public getSumaTotalaMonthAndYear(firstDate1: string, secondDate1?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Number>>;
    public getSumaTotalaMonthAndYear(firstDate1: string, secondDate1?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (firstDate1 === null || firstDate1 === undefined) {
            throw new Error('Required parameter firstDate was null or undefined when calling getUserByName.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (firstDate1 !== undefined && firstDate1 !== null) {
            queryParameters = queryParameters.set('firstDate', <any>firstDate1);
        }
        if (secondDate1 !== undefined && secondDate1 !== null) {
            queryParameters = queryParameters.set('secondDate', <any>secondDate1);
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

        return this.httpClient.get<Number>(`${this.basePath}/incasari/calculateTotalByMonthAndYear`,
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
     * Find pet by ID
     * Returns a single pet
     * @param year ID of pet to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSumaTotalaPerYear(year: string, observe?: 'body', reportProgress?: boolean): Observable<Number>;
    public getSumaTotalaPerYear(year: string, observe?: 'response', reportProgress?: boolean): Observable<Number>;
    public getSumaTotalaPerYear(year: string, observe?: 'events', reportProgress?: boolean): Observable<Number>;
    public getSumaTotalaPerYear(year: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (year === null || year === undefined) {
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

        return this.httpClient.get<Number>(`${this.basePath}/incasari/calculateTotalByYear/${encodeURIComponent(String(year))}`,
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
     * @param firstDate2 The name that needs to be fetched. Use user1 for testing. 
     * @param lastDate2 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDatesBetweenData(firstDate2: string, lastDate2?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Incasari>>;
    public getDatesBetweenData(firstDate2: string, lastDate2?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Incasari>>>;
    public getDatesBetweenData(firstDate2: string, lastDate2?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpResponse<Array<Incasari>>>;
    public getDatesBetweenData(firstDate2: string, lastDate2?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (firstDate2 === null || firstDate2 === undefined) {
            throw new Error('Required parameter firstDate was null or undefined when calling getUserByName.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (firstDate2 !== undefined && firstDate2 !== null) {
            queryParameters = queryParameters.set('firstDate', <any>firstDate2);
        }
        if (lastDate2 !== undefined && lastDate2 !== null) {
            queryParameters = queryParameters.set('secondDate', <any>lastDate2);
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

        return this.httpClient.get<Array<Incasari>>(`${this.basePath}/incasari/search/betweenData`,
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
     * Find pet by ID
     * Returns a single pet
     * @param year ID of pet to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getByYear(year: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Incasari>>;
    public getByYear(year: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Incasari>>>;
    public getByYear(year: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Incasari>>>;
    public getByYear(year: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (year === null || year === undefined) {
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

        return this.httpClient.get<Array<Incasari>>(`${this.basePath}/incasari/search/year/${encodeURIComponent(String(year))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }




    
}