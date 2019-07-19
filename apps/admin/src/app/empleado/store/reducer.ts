import * as empleadoActions from './actions';
import {  initialState, EmpleadoState } from './state';



export function empleadoReducer(state = initialState, action: empleadoActions.ActionTypes): EmpleadoState {
  switch (action.type) {

    case empleadoActions.LOAD_DELETE: {
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        error: null,
        action: "LOAD_DELETE"
      };
    } 

    case empleadoActions.LOAD_DELETE_SUCCESS: {
      return {
          ...state,
        empleados:  function() { 
          return state.empleados.filter( del=>  del.id !== action.id )}(),
        isLoading: false,
        isLoaded: true,
        error: null,
        action: "LOAD_DELETE_SUCCESS"
      };
    }
    
      case empleadoActions.LOAD_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isLoaded: false,
          error: null,
          action: "LOAD_REQUEST"
        };
      }
      
      case empleadoActions.LOAD_UPDATE: {
        return {
          ...state,
          isLoading: true,
          isLoaded: true,
          error: null,
          action: "LOAD_UPDATE"
        };
      }
      case empleadoActions.LOAD_INSERT_SUCCESS: {
        return {
            ...state,
          empleados:  function() { state.empleados.push(action.empleado);  return state.empleados}(),
          isLoading: false,
          isLoaded: true,
          error: null,
          action: "LOAD_INSERT_SUCCESS"
        };
      }
      case empleadoActions.LOAD_UPDATE_SUCCESS: {
        return {
            ...state,
          empleados: state.empleados.map( empleados => {
            return  empleados.id === action.empleado.id ? 
            { ...action.empleado } : 
            { ...empleados }
          } ) , 
          isLoading: false,
          isLoaded: true,
          error: null,
          action: "LOAD_UPDATE_SUCCESS"
        };
      }
      case empleadoActions.LOAD_INSERT: {
        return {
          ...state,
          isLoading: true,
          isLoaded: true,
          error: null,
          action: "LOAD_INSERT"
        };
      }
      case empleadoActions.LOAD_SUCCESS: {
        return   { ...state,
                  empleados: [ ...action.empleados ],
                  isLoading: false,
                  isLoaded: true,
                  error: null,
                  action: "LOAD_SUCCESS"
                  }
      }
      case empleadoActions.LOAD_FAILURE: {
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