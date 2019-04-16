import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootReducer } from './root-state';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RootEffects } from './root-effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(RootReducer),
    EffectsModule.forRoot(RootEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      //logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ]
})
export class RootStoreModule { }

