import { Component, OnInit } from '@angular/core';
import { ValidatorService, TableDataSource } from '@credix/components';
import { EmpleadoValidatorService } from './service/empleado.validator.service';
import { TableElementDataService } from '@credix/components';
import { Empleado } from './empleado.model';


@Component({
  selector: 'credix-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss'],
  providers: [
    { provide: ValidatorService, useClass: EmpleadoValidatorService }
  ],
})
export class EmpleadoComponent implements OnInit {


  EmpleadoList = [{  
    codigo_empl:  40,
    codigo_naci:1005,
    codigo_docu: 2005,
    documento:  13380196, 
    nombre:  'Jeancarlos', 
    apellido: 'Cartaya',
    email: 'jeancarlo.cartaya@gmail.com',
    
  },{  
    codigo_empl:  41,
    codigo_naci:1006,
    codigo_docu: 2006,
    documento:  13380195, 
    nombre:  'Maria fernanda', 
    apellido: 'Salas',
    email: 'mariafsalas30@gmail.com',
    
  }];

  constructor(  public  empleadoValidator: EmpleadoValidatorService, private tableElementDataService: TableElementDataService  ){
    this.tableElementDataService.dataSource  = new TableDataSource<any>(
    this.EmpleadoList,     Empleado, 
    this.empleadoValidator);  // 
    this.tableElementDataService.modelObject = this.empleadoValidator.EmpleadoObject;
     
  }

  ngOnInit() { }

}
