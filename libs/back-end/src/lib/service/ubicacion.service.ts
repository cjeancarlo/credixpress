import { Injectable } from '@angular/core';
import { OptionsItems } from './options.model';
import { GetData } from './data.class';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService  extends GetData {

  getCountries(): OptionsItems[] {
    return this.getDataForSelect().filter(d => d.category === 'countries')
  }
  getStates(): OptionsItems[] {
    return this.getDataForSelect().filter(d => d.category === 'states')
  }

  getCities(): OptionsItems[] {
    return this.getDataForSelect().filter(d => d.category === 'cities')
  }
}
