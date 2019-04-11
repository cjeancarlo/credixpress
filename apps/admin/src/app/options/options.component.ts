import { Component, OnInit } from '@angular/core';
import { OptionsValidatorService } from './service/options.validator.service';
import {  FieldType  } from '@credix/components';
import { FormControl } from '@angular/forms';
import { GetData, OptionsItems } from '@credix/back-end';

@Component({
  selector: 'credix-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
 
  field: FieldType;
  inputControl = new FormControl();
  displayField: string;
  allOptions: OptionsItems[]
  filteredOptions: OptionsItems[]
  
  
  constructor(  public  optionsValidator: OptionsValidatorService, 
                private _getdata: GetData
     ){  
    this.field   = this.optionsValidator.OptionsObject.fields[0];
    this.displayField = this.field.selectConfig.filterField;
    
    
    this.field.selectConfig.optionSource
          .subscribe( op => this.filteredOptions =  this.allOptions  =op)
    }

  ngOnInit() {
   this.inputControl.valueChanges.subscribe(value => {
        this.filteredOptions =  value ?  this._filter(value)  :  this.allOptions
    })
  }

/**retorna elementos filtrados del arreglo de items seleccionables, dependiendo 
   * de los inputs del usuario 
   */
  private _filter(value: string): OptionsItems[]  {
    const filterField = this.field.selectConfig.filterField;
      return  this.allOptions.filter( option => 
        { 
          return (''+option[filterField]).toLowerCase().indexOf(value) === 0
        }
      );
  }

  /**Function that maps an option's control value to its display value in the trigger. */
   displayFn(op?: any): string | undefined {
    /**Del backend viene un string o un number por lo que la descripcion no esta disponible
     * asi que se invoca la funcion que buscar el objeto a partir de un ID unico
     */
    if(typeof op === 'number' ||  op === 'string') {
    const value = this._getdata.getRowfromId(op);
      /** actualiza  del codigo unico el el objeto tipo OptionItems, esto para 
       * permitir hacer busquedas en los campos tipo 'selec' usando el campo OptionItems.description
      */
      this.inputControl.setValue(value);
      return value[this.displayField];
    }
    return op && op[this.displayField] ? op[this.displayField] : undefined;
  }

}
