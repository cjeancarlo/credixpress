import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '@credix/components';
import { EmpleadoComponent } from './empleado.component';


export const routes: Routes = [
  {
    component: EmpleadoComponent,
    path: ''
  }
];


@NgModule({
  imports: [
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule],
  declarations: [EmpleadoComponent ]
})
export class EmpleadoModule { }



