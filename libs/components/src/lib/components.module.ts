import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableInlineEditComponent } from './table-inline-edit/table-inline-edit.component';

import { MaterialModule } from '@credix/material';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './select/select.component';
import { InputComponent } from './input/input.component';
import { DisplayComponent } from './display/display.component';
import { SlideComponent } from './slide/slide.component';
import { MessageComponent } from './message/message.component';
import { PrintErrorComponent } from './print-error/print-error.component';
import { DialogComponent } from './dialog/dialog.component';
import { TelefonoComponent } from './telefono/telefono.component';
import { DisplayErrorComponent } from './display-error/display-error.component';
import { LoadingComponent } from './loading/loading.component';
import { StoreModule } from '@ngrx/store';
import { telefonoReducer } from './telefono/store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { TelefonosEffects } from './telefono/store/effects';



@NgModule({
  imports: [CommonModule, MaterialModule, ReactiveFormsModule,
    
    StoreModule.forFeature('telefonos', telefonoReducer),
    EffectsModule.forFeature([TelefonosEffects])],
  
    declarations: [TableInlineEditComponent, SelectComponent, InputComponent, DisplayComponent, SlideComponent, MessageComponent, PrintErrorComponent, DialogComponent, TelefonoComponent, DisplayErrorComponent, LoadingComponent],
  exports: [TableInlineEditComponent, SelectComponent, InputComponent, DisplayComponent, SlideComponent, MessageComponent, PrintErrorComponent, DialogComponent, TelefonoComponent, CommonModule, MaterialModule, ReactiveFormsModule, DisplayErrorComponent, LoadingComponent],
  entryComponents: [MessageComponent, DialogComponent,TelefonoComponent]
})
export class ComponentsModule {}
