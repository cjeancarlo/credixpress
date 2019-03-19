import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableInlineEditComponent } from './table-inline-edit/table-inline-edit.component';

import { MaterialModule } from '@credix/material';
import {  ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './select/select.component';
import { InputComponent } from './input/input.component';
import { DisplayComponent } from './display/display.component';



@NgModule({
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  declarations: [TableInlineEditComponent, SelectComponent, InputComponent, DisplayComponent],
  exports: [TableInlineEditComponent, SelectComponent, InputComponent, DisplayComponent]
})
export class ComponentsModule {}
