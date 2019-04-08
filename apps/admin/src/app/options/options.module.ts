import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '@credix/components';
import { OptionsComponent } from './options.component';
/*import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@credix/material';*/


export const routes: Routes = [
  {
    component: OptionsComponent,
    path: ''
  }
];

@NgModule({
  
  imports: [
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule],
  declarations: [OptionsComponent],
})
export class OptionsModule { }
