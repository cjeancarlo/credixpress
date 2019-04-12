import { Empleado } from '../empleado.model';

export interface EmpleadoState  {
  isLoading?: boolean;
  error?: any;
  empleados: Empleado[];
}

export const initialState: EmpleadoState = {
  isLoading: false,
  error: null,
  empleados: []
};

