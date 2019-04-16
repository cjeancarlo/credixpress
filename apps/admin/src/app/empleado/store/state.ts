import { Empleado } from '../empleado.model';

export interface EmpleadoState  {
  isLoading?: boolean;
  isLoaded?: boolean;
  error?: any;
  empleados: Empleado[];
}

export const initialState: EmpleadoState = {
  isLoading: false,
  isLoaded: false,
  error: null,
  empleados: []
};

