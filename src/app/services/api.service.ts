import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseWrapper } from '@app/entities/ResponseWrapper';
import { Observable, of } from 'rxjs';
import { GlobalParams } from '../entities/GlobalParam';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {
  baseUrl: GlobalParams;
  dtOptions: any = {};

  constructor(protected http: HttpClient) {
    this.baseUrl = new GlobalParams();
  }
  token = localStorage.getItem('access_token');
  headersToken = new HttpHeaders().set(
    'Authorization',
    'Bearer ' + this.token
  );
  headersNoToken = new HttpHeaders();
  // login api
  login(endpoint: string, loginPayload: T):  Observable<ResponseWrapper<any>> {
    const headers = {
      Authorization: 'Basic ' + btoa('client:secret'),
      'Content-type': 'application/x-www-form-urlencoded'
    };
    return this.http.post(this.baseUrl.baseUrl + endpoint, loginPayload, { headers })
    .pipe(catchError(this.handleError<any>()));
  }
  //get request with token
  getToken(endpoint: string): Observable<ResponseWrapper<any>> {
    return this.http.get(this.baseUrl.baseUrl + endpoint, { headers: this.headersToken })
      .pipe(catchError(this.handleError<any>()));
  }
  //post request with headers
  postToken(endpoint: string, data: T): Observable<ResponseWrapper<any>> {
    return this.http.post(this.baseUrl.baseUrl + endpoint, data, { headers: this.headersToken })
      .pipe(catchError(this.handleError<any>()));
  }
  //put request with headers
  put(endpoint: string, data: T): Observable<ResponseWrapper<any>> {
    return this.http.put(this.baseUrl.baseUrl + endpoint, data, { headers: this.headersToken })
      .pipe(catchError(this.handleError<any>()));
  }
  //put request without headers
  putNoToken(endpoint: string, data: T): Observable<ResponseWrapper<any>> {
    return this.http.put(this.baseUrl.baseUrl + endpoint, data)
      .pipe(catchError(this.handleError<any>()));
  }
  dataTableOptions(): DataTables.Settings {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      responsive: true,
      lengthMenu: [10, 25, 50, 100, 250, 500],
      info: true,
      searching: true,
      ordering: true,
      lengthChange: true,
      // Declare the use of the extension in the dom parameter
      dom: 'lBfrtip',
    //   columnDefs: [ {
    //     orderable: false,
    //     className: 'select-checkbox',
    //     targets: 0,
    //     checkboxes: {
    //         selectRow: true
    //     }
    // } ],
      // Configure the buttons
      buttons: [
        // 'pageLength',
        // 'selectAll',
        // 'selectNone',
        'copy',
        'print',
        'excel',
        'csv',
        'pdf',
      ],
    //   select: {
    //     style: 'multi'
    //  },
    };
    return this.dtOptions;
  }
  //data table configs
  dataTableSettings(endpoint: string, cols: Array<DataTables.ColumnSettings>): DataTables.Settings {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      responsive: true,
      ajax: (dataTablesParameters: any, callback: any) => {

        this.http
          .get(
            this.baseUrl.baseUrl + endpoint,
            { headers: this.headersToken }
          ).subscribe((resp: any) => {

            callback({
              recordsTotal: resp.data.totalElements,
              recordsFiltered: resp.data.totalElements,
              data: resp.data.content
            });
          });
      },
      columns: cols,
      dom: 'Bfrtip',
      stateSave: true,
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ],
    };
    return this.dtOptions;
  }
  private handleError<ResponseWrapper>() {
    return (error: HttpErrorResponse): Observable<any> => {
      const res = new ResponseWrapper();
      if (error.status == 500) {
        res.code = error.status;
        res.message = 'Sorry internal server error occured please try again later';
      } else {
        res.code = error.status;
        res.message = error.error.message;
        res.data = error.error.data;
      }
      return of(res);
    };
  }
}
