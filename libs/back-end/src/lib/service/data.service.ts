import { OptionsItems } from './options.model';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class GetData {

    getDataForSelect(): OptionsItems[] {
        return [
          {
            id: 3005, parentId: null, description: 'Claro', category: 'cellOperator'
          },
          {
            id: 3006, parentId: null, description: 'Tuenti', category: 'cellOperator'
          },
          {
            id: 3007, parentId: null, description: 'Personal', category: 'cellOperator'
          },

          {
            id: 2005, parentId: null, description: 'Cedula', category: 'document'
          },
          {
            id: 2006, parentId: null, description: 'Pasaporte', category: 'document'
          },
          {
            id: 2007, parentId: null, description: 'D.N.I.', category: 'document'
          },
          {
            id: 1005, parentId: null, description: 'Venezolano/a', category: 'nationality'
          },
          {
            id: 1006, parentId: null, description: 'Argentino/a', category: 'nationality'
          },
          {
            id: 1007, parentId: null, description: 'Norte Americano/a', category: 'nationality'
          },
          {
          id: 1, parentId: null, description: 'Venezuela', category: 'countries'
        }, {
          id: 2, parentId: null, description: 'Argentina', category: 'countries'
        }, /*Estados */
        { id: 11, parentId: 1, description: 'Miranda', category: 'states' },
        { id: 21, parentId: 1, description: 'Aragua', category: 'states' },
        { id: 31, parentId: 1, description: 'Carabobo', category: 'states' },
        { id: 41, parentId: 1, description: 'Zulia', category: 'states' },
        { id: 52, parentId: 2, description: 'Santa Fe', category: 'states' },
        { id: 62, parentId: 2, description: 'CABA', category: 'states' },
        { id: 71, parentId: 1, description: 'Distrio Capital', category: 'states' },
        /** cities */
        { id: 711, parentId: 11, description: 'Los teques', category: 'cities' },
        { id: 811, parentId: 11, description: 'San Antonio', category: 'cities' },
        { id: 121, parentId: 21, description: 'Maracay', category: 'cities' },
        { id: 271, parentId: 71, description: 'Caracas', category: 'cities' },
        { id: 331, parentId: 31, description: 'Valencia', category: 'cities' },
        { id: 441, parentId: 41, description: 'Maracaibo', category: 'cities' },
        { id: 552, parentId: 52, description: 'ciudad Santa Fe', category: 'cities' },
        { id: 662, parentId: 62, description: 'ciudad  CABA', category: 'cities' }
        ]
      }
    
      getRowfromId(id: string | number ): OptionsItems {
        return this.getDataForSelect().find(d => d.id === id);
    
      }
    
}