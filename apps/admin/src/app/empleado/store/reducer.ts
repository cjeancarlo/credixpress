import * as empleadoActions from './actions';
import {  initialState, EmpleadoState } from './state';



export function empleadoReducer(state = initialState, action: empleadoActions.ActionTypes): EmpleadoState {
  switch (action.type) {

      
      case empleadoActions.LOAD_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isLoaded: false,
          error: null
        };
      }
      case empleadoActions.LOAD_SUCCESS: {
        return   { ...state,
                  empleados: [ ...action.empleados ],
                  isLoading: false,
                  isLoaded: true,
                  error: null
                  }
      }
      case empleadoActions.LOAD_FAILURE: {
        return {
          ...state,
          isLoading: false,
          error: action.error
        };
      }
      default: {
        return state;
      }
    }
  }