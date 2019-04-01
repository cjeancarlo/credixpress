import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ValidatorService } from '../service/validator.service';
import { TelefonoValidatorService } from './service/telefono.validator.service';
import { TableDataSource } from '../table-inline-edit/table-data-source';
import { TableElementDataService } from '../table-inline-edit/table-element-data.service';

export class Telefono {
  codigo_parent: number;
  codigo_tele: number;
  codigo_oper: number;
  codigoArea: number;
  nroTelefono: string;
}


@Component({
  selector: 'credix-telefono',
  templateUrl: './telefono.component.html',
  styleUrls: ['./telefono.component.scss'],
  providers: [
    { provide: ValidatorService, useClass: TelefonoValidatorService }
  ],
})
export class TelefonoComponent implements OnInit {

  TelefonoList = [ {
    codigo_parent: 41,
    codigo_tele: 1,
    codigo_oper: 3006,
    codigo_area: '15',
    nro_telefono: '23940000',
  },{
    codigo_parent: 40,
    codigo_tele: 1,
    codigo_oper: 3005,
    codigo_area: '11',
    nro_telefono: '23940334',
  }];

  constructor(@Inject(MAT_DIALOG_DATA) public data: {},
  public  telefonoValidator: TelefonoValidatorService, 
  private tableElementDataService: TableElementDataService
  ) { 
    const TelefonosFiltrados = 
    this.TelefonoList.filter(tels =>  
      tels.codigo_parent === this.data['parent'] 
    );

    this.tableElementDataService.dataSource = new TableDataSource<any>(TelefonosFiltrados,
      Telefono,  this.telefonoValidator);   
      this.tableElementDataService.modelObject = this.telefonoValidator.TelefonoObject;
   }

  ngOnInit() {
    
    
  }

}
