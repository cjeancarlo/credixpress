import { Component, OnInit, OnDestroy } from '@angular/core';
import { ValidatorService, TableDataSource } from '@credix/components';
import { EmpleadoValidatorService } from './service/empleado.validator.service';
import { TableElementDataService } from '@credix/components';
import { Empleado } from './empleado.model';
import { RootState } from '../root-store/root-state';
import { Store } from '@ngrx/store';
import  *  as empleadosActions  from './store/actions';
import { Subscription } from 'rxjs';
@Component({
  selector: 'credix-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss'],
  providers: [
    { provide: ValidatorService, useClass: EmpleadoValidatorService }
  ],
})

export class EmpleadoComponent implements OnInit, OnDestroy {
  loading: boolean;
  error: any;
  loaded = false;
  subscribe: Subscription;  

  constructor(
    private store: Store<RootState>,
    public empleadoValidator: EmpleadoValidatorService,
    private tableElementDataService: TableElementDataService) {

      this.tableElementDataService.modelObject = this.empleadoValidator.EmpleadoObject;
      this.tableElementDataService.actions = empleadosActions;

      this.subscribe=  this.store.select('empleados').subscribe(empleados => {
        this.loading = empleados.isLoading
        this.error = empleados.error;
        this.loaded = empleados.isLoaded;

        
      }) ;
      }

  ngOnInit() {
    this.store.select(state => state.empleados)
    .subscribe( state =>  {
     if  ( state.isLoaded) {
       this.tableElementDataService.dataSource  = new TableDataSource<any>(
         state.empleados,     
         Empleado, 
         this.empleadoValidator); 
       }
     })

   this.store.dispatch(new empleadosActions.LoadRequestAction());
  }

ngOnDestroy(){
  this.subscribe.unsubscribe()
}
  
}

