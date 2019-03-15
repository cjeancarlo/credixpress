import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorService } from '@credix/table-inline-edit';
import { UbicacionService } from '@credix/back-end';

@Injectable({
  providedIn: 'root'
})
export class BancoValidatorService implements ValidatorService {
  constructor( private _ubicacionService: UbicacionService){

  }

  public BancoObject = {
    fields: [
      { 
        name: 'codigo', type: 'number', search: true, editType: 'INPUT', validators: [Validators.required ] 
      },
      { 
        name: 'nombre', type: 'string', search: true, editType: 'INPUT', validators: [Validators.required] 
      },
      {
        name: 'estado', type: 'number', search: true, editType: 'SELECT', validators: [Validators.required],
        selectConfig: { 
          filterField: 'descripcion',
          optionSource: this._ubicacionService.getCountries(),
          parentKey: null 
        }
      },
      {
        name: 'ciudad', type: 'number', search: true, editType: 'SELECT', validators: [Validators.required],
        selectConfig: { 
          filterField: 'descripcion',
          optionSource: this._ubicacionService.getStates(), 
          parentKey: 'estado' 
        }
      },
      { name: 'actionsColumn', editType: 'ACTIONSCOLUMN' },
    ]
    }

  private fGroup: FormGroup;

  getRowValidator(): FormGroup {
    return this.buildformGroup();
  }
 

  private buildformGroup(): FormGroup {
    this.fGroup = new FormGroup({});
    this.BancoObject.fields.forEach((f) => {
      this.fGroup.addControl(f.name, new FormControl('', f.validators));
    })
    return this.fGroup;
  }

  
}


