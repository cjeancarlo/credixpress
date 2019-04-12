import { EmpleadoState } from '../empleado/store/state';
import { ActionReducerMap } from '@ngrx/store';
import { empleadoReducer } from '../empleado/store/reducer';

export interface RootState {
    empleados: EmpleadoState
}


export const RootReducer: ActionReducerMap<RootState> = {
    empleados: empleadoReducer
};

