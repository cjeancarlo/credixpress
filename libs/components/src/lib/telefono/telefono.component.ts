import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ValidatorService } from '../service/validator.service';
import { TelefonoValidatorService } from './service/telefono.validator.service';
import { TableDataSource } from '../table-inline-edit/table-data-source';
import { TableElementDataService } from '../table-inline-edit/table-element-data.service';
import { ModelObject } from '../models/object.models';

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
export class TelefonoComponent implements OnInit, OnDestroy {

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

  /**guarda el modelObject del Padre */
  private ParentmodelObject : ModelObject;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {},
  public  telefonoValidator: TelefonoValidatorService, 
  private tableElementDataService: TableElementDataService
  ) { 
    const TelefonosFiltrados = 
    this.TelefonoList.filter(tels =>  
      tels.codigo_parent === this.data['parent'] 
    );

    this.tableElementDataService.dataSource = new TableDataSource<any>(TelefonosFiltrados, Telefono,  this.telefonoValidator);   
    /**guarda temporalmente el modelObject del padre  */;
    this.ParentmodelObject  = this.tableElementDataService.modelObject;
   
    this.tableElementDataService.modelObject = this.telefonoValidator.TelefonoObject;
   }

  ngOnInit() { }

  /** Called once, before the instance is destroyed.
  * Add 'implements OnDestroy' to the class.
  */
  ngOnDestroy(): void {
    /**retorna al modelo original modelObject esto evita que el modelo del hijo
     * sobre escriba al del padre */
    this.tableElementDataService.modelObject = this.ParentmodelObject;
    
  }



}
