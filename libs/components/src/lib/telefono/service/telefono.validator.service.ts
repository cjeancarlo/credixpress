import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorService } from '@credix/components';
import { UbicacionService } from '@credix/back-end';
import { ModelObject } from '../../models/object.models';



@Injectable({
  providedIn: 'root'
})
export class TelefonoValidatorService implements ValidatorService {
  constructor( private _ubicacionService: UbicacionService){

  }

  public TelefonoObject: ModelObject = {
    primaryKey: 'codigo_tele',
    deleteInfo: { 
      question: '¿ Seguro desea eliminar ?',
      infoField: 'nro_telefono'
    },
    fields: [
      { name: 'actionsColumn', editType: 'ACTIONSCOLUMN' },
      { name: 'codigo_parent', type: 'number', search: true, editType: 'NONE', label: 'Codigo' },
      { name: 'codigo_tele', type: 'number', search: true, editType: 'NONE', label: 'Codigo' },
      {
        name: 'codigo_oper', type: 'number', search: true, editType: 'SELECT',  label: 'Operador',
        validators: [Validators.required],
        selectConfig: { 
          filterField: 'description',
          optionSource: this._ubicacionService.getCellOperators(),
          parentKey: null, 
          childKey: null
        }
      },
      { 
        name: 'codigo_area', type: 'number', search: true, editType: 'INPUT',  label: 'Cod. Area',
        validators: [Validators.required] 
      },
      { 
        name: 'nro_telefono', type: 'string', search: true, editType: 'INPUT',  label: 'Nro. Telefono',
        validators: [Validators.required] 
      },
      { 
        name: 'default ', type: 'boolean', search: true, editType: 'SLIDE',  label: 'Predeterminado',
        validators: [Validators.required] 
      },
    ]
    }

  private fGroup: FormGroup;

  getRowValidator(): FormGroup {
    return this.buildformGroup();
  }
 

  private buildformGroup(): FormGroup {
    this.fGroup = new FormGroup({});
    this.TelefonoObject.fields.forEach((f) => {
      this.fGroup.addControl(f.name, new FormControl('', f.validators));
    })
    return this.fGroup;
  }

  
}


