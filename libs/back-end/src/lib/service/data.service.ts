import { OptionsItems } from './options.model';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetData {

    // Define API
    apiURL = 'http://localhost:3000';
       // Http Options
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

    constructor(private http: HttpClient) { }

 /** Get list of OptionsItems  
   * @param parentID  filtra por categoria
  */
 
 
  getList(parentID: number): Observable<OptionsItems[]> {
  return this.getByParentId(parentID);
}

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/
  // HttpClient API get() method => Fetch list_options 
  getByParentId(parentId: number): Observable<OptionsItems[]> {
    return this.http.get<OptionsItems[]>(this.apiURL + '/listOptionByParent/' + parentId)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  getByCategoryId(categoryId: number): Observable<OptionsItems[]> {
    return this.http.get<OptionsItems[]>(this.apiURL + '/listOptionByCategory/' + categoryId)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API get() method => Fetch list_options 
  getRow(id: number): Observable<OptionsItems> {
    return this.http.get<OptionsItems>(this.apiURL + '/listOptionById/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

 getRowfromId(id: number): OptionsItems {
    let _optionsItems: OptionsItems; 
    this.getRow(id).subscribe(optionsItems => {
      _optionsItems = optionsItems;
     });
     return _optionsItems;

  }
   // Error handling 
   handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(error);
    window.alert(errorMessage);
    return throwError(errorMessage);
 }


}
