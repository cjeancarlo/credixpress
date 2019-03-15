import { Component } from '@angular/core';
import { Banco } from './banco.model';
import { ValidatorService, TableDataSource } from '@credix/table-inline-edit';
import { BancoValidatorService } from './service/banco.validator.service';
import { TableElementDataService } from '@credix/table-inline-edit';

@Component({
  selector: 'credix-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.css'],
  providers: [
    { provide: ValidatorService, useClass: BancoValidatorService }
  ],
})
export class BancoComponent  {

  bancoList = [
    { nombre: 'jeancarlos cartaya', codigo: 40 },
    { nombre: 'Optimus Prime', codigo: 51 },
    { nombre: 'Megatron', codigo: 50 },
    { nombre: 'Peter Parker', codigo: 53 },
    { nombre: 'Bad', codigo: 540 },
    { nombre: 'Bra', codigo: 550 },
    { nombre: 'Brad', codigo: 650 },
    { nombre: 'Bad', codigo: 560 },
    { nombre: 'Ba', codigo: 506 },
    { nombre: 'Bd', codigo: 506 },
    { nombre: 'B', codigo: 503 },
    { nombre: 'Bad', codigo: 250 },
  ];

  constructor(  public  bancoValidator: BancoValidatorService, private tableElementDataService: TableElementDataService  ){
   
    this.tableElementDataService.dataSource  = new TableDataSource<any>(this.bancoList,
      Banco, this.bancoValidator);  // 

    this.tableElementDataService.modelObject = this.bancoValidator.BancoObject;
     
  }
    
 }
