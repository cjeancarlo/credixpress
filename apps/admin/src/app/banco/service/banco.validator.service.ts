import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorService, ModelObject } from '@credix/components';
import { UbicacionService } from '@credix/back-end';


@Injectable({
  providedIn: 'root'
})
export class BancoValidatorService implements ValidatorService {
  constructor( private _ubicacionService: UbicacionService){

  }



  public BancoObject : ModelObject = {
    primaryKey: 'codigo',
    deleteInfo: { /**informacion que va ser tomada para informar al usuario que registro esta eliminado*/
      question: '¿ Seguro desea eliminar ?',
      infoField: 'nombre'
    },
    fields: [/**modelo que representa al BANCO */
      { 
        name: 'codigo', type: 'number', search: true, editType: 'NONE', 
        validators: [] 
      },
      { 
        name: 'nombre', type: 'string', search: true, editType: 'INPUT', 
        validators: [Validators.required, Validators.minLength(3)] 
      },
      { 
        name: 'principal', type: 'boolean', search: true, editType: 'SLIDE', 
        validators: [Validators.required] 
      },
      {
        name: 'pais', type: 'number', search: true, editType: 'SELECT', 
        validators: [Validators.required],
        selectConfig: { 
          filterField: 'description',
          optionSource: this._ubicacionService.getCountries(),
          parentKey: null, 
          childKey: 'estado'
        }
      },
      {
        name: 'estado', type: 'number', search: true, editType: 'SELECT', 
        validators: [Validators.required],
        selectConfig: { 
          filterField: 'description',
          optionSource: this._ubicacionService.getStates(),
          parentKey: 'pais', 
          childKey: 'ciudad'
        }
      },
      {
        name: 'ciudad', type: 'number', search: true, editType: 'SELECT',
       validators: [Validators.required],
        selectConfig: { 
          filterField: 'description',
          optionSource: this._ubicacionService.getCities() , 
          parentKey: 'estado' ,
          childKey: null
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


