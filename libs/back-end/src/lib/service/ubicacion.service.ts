import { Injectable } from '@angular/core';
import { OptionsItems } from './options.model';
import { GetData } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class UbicacionService  {

  constructor(private getdata: GetData){ }

  /** Get cell operators list of OptionsItems*/
  getCellOperators(): OptionsItems[] {
    return this.getdata.getList(1);
  }

  /** Get Nacionalities list of OptionsItems*/
  getNationality():  OptionsItems[] {
    return this.getdata.getList(3);
  }

  /** Get Document  list of OptionsItems*/
  getDocumentType():  OptionsItems[] {
    return this.getdata.getList(2);
  }
  /** Get countries  list of OptionsItems*/
  getCountries():  OptionsItems[] {
    return this.getdata.getList(4);
  }
  
  /** Get states  list of OptionsItems from getByCategoryId because is a child list tiene dependencia */
  getStates():  OptionsItems[] {

    return this.getdata.getByCategoryId(5);
  }

  /** Get cities  list of OptionsItems from getByCategoryId because is a child list tiene dependencia */
  getCities():  OptionsItems[] {
    return this.getdata.getByCategoryId(6);
  }
}
