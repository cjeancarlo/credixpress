import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableInlineEditComponent } from './table-inline-edit/table-inline-edit.component';
import { MaterialModule } from '@credix/material';
import {  ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  declarations: [TableInlineEditComponent],
  exports: [TableInlineEditComponent]
})
export class TableInlineEditModule {}
