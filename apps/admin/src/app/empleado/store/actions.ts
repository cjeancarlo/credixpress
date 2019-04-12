import { Action } from '@ngrx/store';
import { Empleado } from '../empleado.model';


export const LOAD_REQUEST = '[Empleado] Load Request' ;
export const LOAD_FAILURE = '[Empleado] Load Failure';
export const LOAD_SUCCESS = '[Empleado] Load Success';

export class LoadRequestAction implements Action {
  readonly type = LOAD_REQUEST;
}

export class LoadFailureAction implements Action {
  readonly type = LOAD_FAILURE;
  constructor(public error: string ) {}
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;
  constructor(public  empleados:Empleado[]  ) {}
}

export type ActionTypes = LoadRequestAction | LoadFailureAction | LoadSuccessAction;