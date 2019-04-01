import { Injectable } from '@angular/core';
import { OptionsItems } from './options.model';
import { GetData } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService  {

  constructor(private getdata: GetData){

  }

  getCellOperators():OptionsItems[] {
    return this.getdata.getDataForSelect().filter(d => d.category === 'cellOperator')
  }

  getNationality(): OptionsItems[] {
    
    return this.getdata.getDataForSelect().filter(d => d.category === 'nationality')
  }
  getDocumentType(): OptionsItems[] {
  
    return this.getdata.getDataForSelect().filter(d => d.category === 'document')
  }
  getCountries(): OptionsItems[] {
    
    return this.getdata.getDataForSelect().filter(d => d.category === 'countries')
  }
  getStates(): OptionsItems[] {
    return this.getdata.getDataForSelect().filter(d => d.category === 'states')
  }

  getCities(): OptionsItems[] {
    return this.getdata.getDataForSelect().filter(d => d.category === 'cities')
  }
}
