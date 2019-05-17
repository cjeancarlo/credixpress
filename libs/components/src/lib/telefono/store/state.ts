import { Telefono } from '../telefono.model';


export interface TelefonoState  {
  isLoading?: boolean;
  isLoaded?: boolean;
  error?: any;
  action?: string;
  parentId?: number;
  parentType?: number;
  telefonos: Telefono[];
}

export const initialState: TelefonoState = {
  isLoading: false,
  isLoaded: false,
  error: null,
  action: null,
  parentId: null,
  parentType: null,
  telefonos: []
};

