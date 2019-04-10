import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorService, ModelObject } from '@credix/components';
import { UbicacionService } from '@credix/back-end';

@Injectable({
  providedIn: 'root'
})
export class OptionsValidatorService implements ValidatorService {

  constructor( private _ubicacionService: UbicacionService){ }

  public OptionsObject: ModelObject = {
    primaryKey: 'id',
    deleteInfo: { /**informacion que va ser tomada para informar al usuario que registro esta eliminado*/
      question: '¿ Seguro desea eliminar ?',
      infoField: 'description'
    },
    fields: [/**modelo que representa al Options */
      {
        name: 'id', type: 'number', search: true, editType: 'SELECT',  label: 'Categoria',
        validators: [Validators.required],
        selectConfig: { 
          filterField: 'description',
          optionSource: this._ubicacionService.getCellOperators() ,
          parentKey: null, 
          childKey: null
        }
      }
    ]
    }

  private fGroup: FormGroup;

  getRowValidator(): FormGroup {
    return this.buildformGroup();
  }
 

  private buildformGroup(): FormGroup {
    this.fGroup = new FormGroup({});
    this.OptionsObject.fields.forEach((f) => {
      this.fGroup.addControl(f.name, new FormControl('', f.validators));
    })
    return this.fGroup;
  }

  
}


