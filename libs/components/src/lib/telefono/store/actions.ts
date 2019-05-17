import { Action } from '@ngrx/store';
import { Telefono } from '../telefono.model';


export const LOAD_REQUEST = '[TELEFONO] Load Request' ;
export const LOAD_FAILURE = '[TELEFONO] Load Failure';
export const LOAD_SUCCESS = '[TELEFONO] Load Success';
export const LOAD_INSERT = '[TELEFONO] INSERT';
export const LOAD_UPDATE = '[TELEFONO] UPDATE';
export const LOAD_UPDATE_SUCCESS = '[TELEFONO] UPDATE STATE STORE';
export const LOAD_INSERT_SUCCESS= '[TELEFONO] INSERT STATE STORE';

export class LoadInsertAction implements Action {
  readonly type = LOAD_INSERT;
  constructor(public  telefono:Telefono  ) {}
}

export class LoadUpdateAction implements Action {
  readonly type = LOAD_UPDATE;
  constructor(public  telefono:Telefono  ) {}
}
export class LoadRequestAction implements Action {
  readonly type = LOAD_REQUEST;
  constructor(public  param: {parentId:number,parentType:number}  ) {}
}


export class LoadUpdateSuccessAction implements Action {
  readonly type = LOAD_UPDATE_SUCCESS;
  constructor(public  telefono:Telefono  ) {}
}

export class LoadInsertSuccessAction implements Action {
  readonly type = LOAD_INSERT_SUCCESS;
  constructor(public  telefono:Telefono  ) {}
}

export class LoadFailureAction implements Action {
  readonly type = LOAD_FAILURE;
  constructor(public error: string ) {}
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;
  constructor(public parentId:number,public parentType:number, public  telefonos:Telefono[]  ) {}
}

export type ActionTypes = 
LoadRequestAction | 
LoadFailureAction | 
LoadSuccessAction | 
LoadInsertAction | 
LoadUpdateAction |
LoadUpdateSuccessAction |
LoadInsertSuccessAction;
