import { NgModule } from '@angular/core';
import { BancoComponent } from './banco.component';
import { Routes, RouterModule } from '@angular/router';

import { TableInlineEditModule } from '@credix/table-inline-edit';

export const routes: Routes = [
  {
    component: BancoComponent,
    path: ''
  }
];


@NgModule({
  imports: [
    TableInlineEditModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule],
  declarations: [BancoComponent]
})
export class BancoModule { }
