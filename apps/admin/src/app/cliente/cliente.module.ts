import { NgModule } from '@angular/core';
import { ClienteComponent } from './cliente.component';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '@credix/components';

export const routes: Routes = [
  {
    component: ClienteComponent,
    path: ''
  }
];


@NgModule({
  imports: [
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule],
  declarations: [ClienteComponent]
})
export class ClienteModule { }


