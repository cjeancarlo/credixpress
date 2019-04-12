import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoStoreModule } from '../empleado/store/empleado-store.module';
import { RootReducer } from './root-state';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RootEffects } from './root-effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EmpleadoStoreModule,
    StoreModule.forRoot(RootReducer),
    EffectsModule.forRoot(RootEffects),
  ]
})
export class RootStoreModule { }

