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
          'Content-Type':  'application/json'
        })
      };

    constructor(private http: HttpClient) { }

 /** Get list of OptionsItems  
   * @param parentID  filtra por categoria
  */
 
 getAllById(objParams: any , url: string): Observable<any[]> {
  return this.serverPostRequest(url,objParams );
}  

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/
  // HttpClient API get() method => Fetch list_options 
  getByParentId(parentId: number): Observable<OptionsItems[]> {
      const parameters =  {'parentId': parentId}; 
      return this.serverPostRequest('/listOptionByParent/',parameters );
  }  

  getByCategoryId(categoryId: number): Observable<OptionsItems[]> {
    const parameters =  {'categoryId': categoryId};
    return this.serverPostRequest('/listOptionByCategory/',parameters );
  }  


  // HttpClient API get() method => Fetch list_options 
  getRow(Id: number): Observable<OptionsItems> {
    const parameters = {'Id': Id};
    return this.serverPostRequest('/listOptionById/',parameters );
  }  

  
  getList(parentID: number): Observable<OptionsItems[]> {
    return this.getByParentId(parentID);
  }

  getRowfromId(id: number): OptionsItems {
    let _optionsItems: OptionsItems; 
    this.getRow(id).subscribe(optionsItems => {
      _optionsItems = optionsItems;
     });
     return _optionsItems;
  }
  
private serverPostRequest(url: string, params ) : Observable<any[] | any> {
  return this.http.post<OptionsItems[]>(this.apiURL + url,
    JSON.stringify(params),
    this.httpOptions
  )
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  } 

   // Error handling 
   handleError(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    
    console.log(errorMessage);
    return throwError(errorMessage);
 }


}
