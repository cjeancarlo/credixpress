import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: 'banco',
    loadChildren: './banco/banco.module#BancoModule'
  },
  {
    path: 'cliente',
    loadChildren: './cliente/cliente.module#ClienteModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    initialNavigation: 'enabled'
  })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
