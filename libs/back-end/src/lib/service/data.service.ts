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

  /**arreglo que contiene todas OptionsItems      */ 
  allOptions: any[] = [];

    constructor(private http: HttpClient) {
      this.getAll().subscribe( alloptions => {
        this.allOptions  =  alloptions
      } )

    }

 /** consume un endPoint (URL) al servidor para traer data 
   * @param url  end point
   * @param objParams parametros del query ejemplo { id: 1,  }
  */
  getAllByParams(objParams: any , url: string): Observable<any[]> {
  return this.serverPostRequest(url,objParams );
}  

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/


  getByCategoryId(categoryId: number): OptionsItems[] {
    return this.allOptions.filter(x =>      x.categoryId === categoryId );
    //return this.serverPostRequest('/listOptionByCategory/',parameters );
  }  


  
  
  getList(parentId: number): OptionsItems[] {
    return this.allOptions.filter(x =>      x.parentId === parentId )
  }

  // HttpClient API Post() method => Fetch all list_options 
  getAll(): Observable<OptionsItems[]> {
   return this.serverPostRequest('/listAllOptions/',{} );
 }  

 getRowfromId(id: number): OptionsItems {
    return   this.allOptions.find(x => x.id === id);
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
    console.log(error);
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      switch (error.status) {
        case 0:
        errorMessage = `El servidor no Responde`;  
        break;
        case 200:
        errorMessage = error.error.text;
          break;
        default:
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      // Get server-side error
      
    }
    return throwError(errorMessage);
 }


}
