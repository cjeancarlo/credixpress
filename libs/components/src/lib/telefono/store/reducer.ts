import * as telefonoActions from './actions';
import {  initialState, TelefonoState } from './state';

export function telefonoReducer(state = initialState, action: telefonoActions.ActionTypes): TelefonoState {
  switch (action.type) {

      
      case telefonoActions.LOAD_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isLoaded: false,
          error: null,
          action: "LOAD_REQUEST"
        };
      }
      
      case telefonoActions.LOAD_UPDATE: {
        return {
          ...state,
          isLoading: true,
          isLoaded: true,
          error: null,
          action: "LOAD_UPDATE"
        };
      }
      case telefonoActions.LOAD_INSERT_SUCCESS: {
        return {
            ...state,
          telefonos:  function() { state.telefonos.push(action.telefono);  return state.telefonos}(),
          isLoading: false,
          isLoaded: true,
          error: null,
          action: "LOAD_INSERT_SUCCESS"
        };
      }
      case telefonoActions.LOAD_UPDATE_SUCCESS: {
        return {
            ...state,
          telefonos: state.telefonos.map( telefonos => {
            return  telefonos.id === action.telefono.id ? 
            { ...action.telefono } : 
            { ...telefonos }
          } ) , 
          isLoading: false,
          isLoaded: true,
          error: null,
          action: "LOAD_UPDATE_SUCCESS"
        };
      }
      case telefonoActions.LOAD_INSERT: {
        return {
          ...state,
          isLoading: true,
          isLoaded: true,
          error: null,
          action: "LOAD_INSERT"
        };
      }
      case telefonoActions.LOAD_SUCCESS: {
        return   { ...state,
                  telefonos: [ ...action.telefonos ],
                  isLoading: false,
                  isLoaded: true,
                  error: null,
                  parentId:action.parentId,
                  parentType:action.parentType,
                  action: "LOAD_SUCCESS"
                  }
      }
      case telefonoActions.LOAD_FAILURE: {
        return {
          ...state,
          isLoading: false,
          error: action.error,
          action: "LOAD_FAILURE"
        };
      }
      default: {
        return state;
      }
    }
  }