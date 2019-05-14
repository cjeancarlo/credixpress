import { Component, Input, OnInit } from '@angular/core';
import { TableElement } from '../table-inline-edit/table-element';
import { GetData } from '@credix/back-end';

@Component({
  selector: 'credix-display',
  template: '{{displayFn(rowElement.validator.controls[field.name].value)}}'
})
export class DisplayComponent implements OnInit  {

  
  displayField: string;
  @Input() rowElement: TableElement<any>;
  @Input() field: any;

  constructor(private _getdata: GetData ) { }
  
  ngOnInit(): void {
    this.displayField = this.field.selectConfig ? this.field.selectConfig.filterField : ""  ;
  }

    /**Function that maps an option's control value to its display value in the trigger. */
    displayFn(op?: any): string | undefined {
      /**Del backend viene un string o un number por lo que la descripcion no esta disponible
       * asi que se invoca la funcion que buscar el objeto a partir de un ID unico
       */
      if (this.field.editType !== 'SELECT'){
        return op;
      }

      if(typeof op === 'number' ||  op === 'string') {
      const value = this._getdata.getRowfromId(op);
        /** actualiza  del codigo unico el el objeto tipo OptionItems, esto para 
         * permitir hacer busquedas en los campos tipo 'selec' usando el campo OptionItems.description
        */
        return  value && value[this.displayField] ? value[this.displayField] : undefined;
      }
      return op && op[this.displayField] ? op[this.displayField] : undefined;
    }
  
}
