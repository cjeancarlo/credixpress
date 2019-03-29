import { Component, OnInit } from '@angular/core';
import { ValidatorService, TableDataSource } from '@credix/components';
import { ClienteValidatorService } from './service/cliente.validator.service';
import { TableElementDataService } from '@credix/components';
import { Cliente } from './cliente.model';

@Component({
  selector: 'credix-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers: [
    { provide: ValidatorService, useClass: ClienteValidatorService }
  ],
})

export class ClienteComponent implements OnInit {

  ClienteList = [{  
      codigo:  40,
      cedula:  13380196, 
      nombre:  'Jeancarlos', 
      apellido: 'Cartaya',
      pais:   1,
      estado: 11,
      ciudad: 711  
    }];

  constructor(  public  clienteValidator: ClienteValidatorService, private tableElementDataService: TableElementDataService  ){
    this.tableElementDataService.dataSource  = new TableDataSource<any>(
    this.ClienteList, 
    Cliente, 
    this.clienteValidator);  // 
    this.tableElementDataService.modelObject = this.clienteValidator.ClienteObject;
     
  }

  ngOnInit() { }

}
