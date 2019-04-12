import { Component, OnInit } from '@angular/core';
import { ValidatorService, TableDataSource } from '@credix/components';
import { EmpleadoValidatorService } from './service/empleado.validator.service';
import { TableElementDataService } from '@credix/components';
import { Empleado } from './empleado.model';
import { RootState } from '../root-store/root-state';
import { Store } from '@ngrx/store';
import { LoadRequestAction } from './store/actions';


@Component({
  selector: 'credix-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss'],
  providers: [
    { provide: ValidatorService, useClass: EmpleadoValidatorService }
  ],
})
export class EmpleadoComponent implements OnInit {


  EmpleadoList: Empleado[];
  loading: boolean;
  error: any;

  constructor(
    private store: Store<RootState>,
    public empleadoValidator: EmpleadoValidatorService,
    private tableElementDataService: TableElementDataService) {

      this.tableElementDataService.modelObject = this.empleadoValidator.EmpleadoObject;


  }

  ngOnInit() {

    this.store.select('empleados').subscribe(empleados => {
      this.EmpleadoList = empleados.empleados;
      this.loading = empleados.isLoading
      this.error = empleados.error;
    });
    
    this.tableElementDataService.dataSource  = new TableDataSource<any>(
      this.EmpleadoList,     
      Empleado, 
      this.empleadoValidator); 
      
      this.store.dispatch(new LoadRequestAction());
      
  }

  
}

