import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import *  as empleadosActions from './actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { EmpleadoDataService } from '../service/empleado.data.service';



@Injectable()
export class EmpleadosEffects {

    @Effect() getUsers$ = this.actions$
    .pipe(
        ofType(empleadosActions.LOAD_REQUEST),
        switchMap ( () =>  this._empleadoDataService.getAllEmpleados()
        .pipe(
            map(empleados => new empleadosActions.LoadSuccessAction(  empleados  )),
            catchError( error => of(new empleadosActions.LoadFailureAction(error)))
        )
         )
    );

    constructor( private actions$: Actions, private _empleadoDataService: EmpleadoDataService  ) {}

}