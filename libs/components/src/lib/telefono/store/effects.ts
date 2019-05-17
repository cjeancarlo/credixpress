import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import *  as telefonosActions from './actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { TelefonoDataService } from '../service/telefono.data.service';


@Injectable()
export class TelefonosEffects {

    @Effect() getTelefonos$ = this.actions$
        .pipe(
            ofType(telefonosActions.LOAD_REQUEST),
            switchMap((param) => this._telefonoDataService.getAllTelefonos(param['param'])
                .pipe(
                    map(telefonos => new telefonosActions.LoadSuccessAction(param['param'].parentId,param['param'].parentType ,telefonos)),
                    catchError(error => of(new telefonosActions.LoadFailureAction(error)))
                )
            )
        );

    @Effect() updateTelefonos$ = this.actions$
        .pipe(
            ofType(telefonosActions.LOAD_UPDATE),
            switchMap((telefono) => this._telefonoDataService.getEditOrCreate(telefono)
                .pipe(
                    map(updatedTelefono => {
                        if (!updatedTelefono[0]) {

                            throw updatedTelefono;
                        }
                        return new telefonosActions.LoadUpdateSuccessAction(updatedTelefono[0]);
                    }
                    ),
                    catchError(error => {
//                        console.log(error);
                        return of(new telefonosActions.LoadFailureAction(error));
                    }))

            )
        );

    @Effect() insertTelefonos$ = this.actions$
        .pipe(
            ofType(telefonosActions.LOAD_INSERT),
            switchMap((telefono) => this._telefonoDataService.getEditOrCreate(telefono)
                .pipe(
                    map(updatedTelefono => {
                        if (!updatedTelefono[0]) {

                            throw updatedTelefono;
                        }
                        return new telefonosActions.LoadInsertSuccessAction(updatedTelefono[0]);
                    }
                    ),
                    catchError(error => {
                        console.log(error);
                        return of(new telefonosActions.LoadFailureAction(error));
                    }))

            )
        );


    constructor(private actions$: Actions, private _telefonoDataService: TelefonoDataService) { }

}