import { NgModule } from '@angular/core';
import { BancoComponent } from './banco.component';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsModule } from '@credix/components';

export const routes: Routes = [
  {
    component: BancoComponent,
    path: ''
  }
];


@NgModule({
  imports: [
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule],
  declarations: [BancoComponent]
})
export class BancoModule { }
