import { Injectable } from '@angular/core';
import { OptionsItems } from './options.model';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  constructor() { }

  getCountries(): OptionsItems[] {
    return [ {
     id: 1, parentId:null,  descripcion:'Venezuela'
    } , {
     id: 2, parentId:null, descripcion:'Argentina' ,
    }];
  }
  
  getStates(): OptionsItems[] {
   return [
     { id: 1, parentId: 1, descripcion: 'Miranda' },
     { id: 2, parentId: 1, descripcion: 'Aragua' },
     { id: 3, parentId: 1, descripcion: 'Carabobo'},
     { id: 4, parentId: 1, descripcion: 'Zulia'},
     { id: 5, parentId: 2, descripcion: 'Santa Fe' },
     { id: 6, parentId: 2, descripcion: 'CABA'},
     { id: 7, parentId: 1, descripcion: 'Distrio Capital'}
     
    ];
  }

  getCities(): OptionsItems[] {
    return [
      { id: 1, parentId: 2, descripcion: 'Maracay' },
      { id: 2, parentId: 7, descripcion: 'Caracas' },
      { id: 3, parentId: 3, descripcion: 'Valencia'},
      { id: 4, parentId: 4, descripcion: 'Maracaibo'},
      { id: 5, parentId: 5, descripcion: 'ciudad Santa Fe' },
      { id: 6, parentId: 6, descripcion: 'ciudad  CABA'}
      
     ];
   }
}
