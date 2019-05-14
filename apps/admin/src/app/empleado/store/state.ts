import { Empleado } from '../empleado.model';

export interface EmpleadoState  {
  isLoading?: boolean;
  isLoaded?: boolean;
  error?: any;
  action?: string;
  empleados: Empleado[];
}

export const initialState: EmpleadoState = {
  isLoading: false,
  isLoaded: false,
  error: null,
  action: null,
  empleados: []
};

