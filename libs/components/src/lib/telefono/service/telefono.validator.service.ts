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
    storeName: 'telefonos',
    primaryKey: 'id',
    deleteInfo: { 
      question: '¿ Seguro desea eliminar ?',
      infoField: 'nroTelefono'
    },
    fields: [
      { name: 'actionsColumn', editType: 'ACTIONSCOLUMN' },
      { name: 'parentId',   type: 'number', search: false, editType: 'NONE', label: 'parentId' },
      { name: 'parentType', type: 'number', search: false, editType: 'NONE', label: 'parentType' },
      {
        name: 'operadorId', type: 'number', search: true, editType: 'SELECT',  label: 'Operador',
        validators: [Validators.required],
        selectConfig: { 
          filterField: 'description',
          optionSource: this._ubicacionService.getCellOperators(),
          parentKey: null, 
          childKey: null
        }
      },
      { 
        name: 'codigoArea', type: 'number', search: true, editType: 'INPUT',  label: 'Cod. Area',
        validators: [Validators.required] 
      },
      { 
        name: 'nroTelefono', type: 'string', search: true, editType: 'INPUT',  label: 'Nro. Telefono',
        validators: [Validators.required] 
      },
      { 
        name: 'principal', type: 'boolean', search: true, editType: 'SLIDE',  label: 'Principal',
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


