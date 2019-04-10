import { Injectable } from '@angular/core';
import { OptionsItems } from './options.model';
import { GetData } from './data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService  {

  constructor(private getdata: GetData){ }

 

  /** Get cell operators list of OptionsItems*/
  getCellOperators(): Observable<OptionsItems[]> {
    return this.getdata.getList(1);
  }

  /** Get Nacionalities list of OptionsItems*/
  getNationality():  Observable<OptionsItems[]> {
    return this.getdata.getList(3);
  }

  /** Get Document  list of OptionsItems*/
  getDocumentType():  Observable<OptionsItems[]> {
    return this.getdata.getList(2);
  }
  /** Get countries  list of OptionsItems*/
  getCountries():  Observable<OptionsItems[]> {
    return this.getdata.getList(4);
  }
  
  /** Get states  list of OptionsItems*/
  getStates():  Observable<OptionsItems[]> {
    return this.getdata.getByCategoryId(5);
  }

  /** Get cities  list of OptionsItems*/
  getCities():  Observable<OptionsItems[]> {
    return this.getdata.getByCategoryId(6);
  }
}
