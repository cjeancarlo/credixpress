import { OptionsItems } from './options.model';

export class GetData {

    protected getDataForSelect(): OptionsItems[] {
        return [{
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