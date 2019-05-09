import { Action } from '@ngrx/store';
import { Empleado } from '../empleado.model';


export const LOAD_REQUEST = '[Empleado] Load Request' ;
export const LOAD_FAILURE = '[Empleado] Load Failure';
export const LOAD_SUCCESS = '[Empleado] Load Success';
export const LOAD_INSERT = '[Empleado] INSERT';
export const LOAD_UPDATE = '[Empleado] UPDATE';
export const LOAD_UPDATE_SUCCESS = '[Empleado] UPDATE STATE STORE';
export const LOAD_INSERT_SUCCESS= '[Empleado] INSERT STATE STORE';

export class LoadInsertAction implements Action {
  readonly type = LOAD_INSERT;
  constructor(public  empleado:Empleado  ) {}
}

export class LoadUpdateAction implements Action {
  readonly type = LOAD_UPDATE;
  constructor(public  empleado:Empleado  ) {}
}
export class LoadRequestAction implements Action {
  readonly type = LOAD_REQUEST;
}


export class LoadUpdateSuccessAction implements Action {
  readonly type = LOAD_UPDATE_SUCCESS;
  constructor(public  empleado:Empleado  ) {}
}

export class LoadInsertSuccessAction implements Action {
  readonly type = LOAD_INSERT_SUCCESS;
  constructor(public  empleado:Empleado  ) {}
}

export class LoadFailureAction implements Action {
  readonly type = LOAD_FAILURE;
  constructor(public error: string ) {}
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;
  constructor(public  empleados:Empleado[]  ) {}
}

export type ActionTypes = 
LoadRequestAction | 
LoadFailureAction | 
LoadSuccessAction | 
LoadInsertAction | 
LoadUpdateAction |
LoadUpdateSuccessAction |
LoadInsertSuccessAction;
