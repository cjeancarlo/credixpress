import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorService, TelefonoComponent, ModelObject } from '@credix/components';
import { UbicacionService  } from '@credix/back-end';





@Injectable({
  providedIn: 'root'
})
export class EmpleadoValidatorService implements ValidatorService {

  constructor( private _ubicacionService: UbicacionService   ){   }

  
  public EmpleadoObject: ModelObject = {
    primaryKey: 'id',
    deleteInfo: { /**informacion que va ser tomada para informar al usuario que registro esta eliminado*/
      question: '¿ Seguro desea eliminar ?',
      infoField: 'nombre'
    },
    details:[{component: TelefonoComponent, label:'Telefono'}],
    fields: [/**modelo que representa al Empleado */
      { name: 'actionsColumn', editType: 'ACTIONSCOLUMN' },
      //{ name: 'selectbox', editType: 'SELECTBOX' },
      { 
        name: 'id', type: 'number', search: true, editType: 'NONE', label: 'Id', align: 'right'
      },
      { 
        name: 'codigo', type: 'number', search: true,  editType: 'INPUT', label: 'Codigo', align: 'right'
      },
      {
        name: 'nacimientoId', type: 'number', search: true, editType: 'SELECT',  label: 'Nacionalidad',
        validators: [Validators.required],
        selectConfig: { 
          filterField: 'description',
          optionSource:   this._ubicacionService.getNationality(),
          parentKey: null, 
          childKey: null
        }
      },
      {
        name: 'tipodocumentoId', type: 'number', search: true, editType: 'SELECT', label: 'Tipo Documento',
        validators: [Validators.required],
        selectConfig: { 
          filterField: 'description',
          optionSource: this._ubicacionService.getDocumentType(),
          parentKey: null, 
          childKey: null
        }
      },
      { 
        name: 'documento', type: 'number', search: true, editType: 'INPUT',  label: 'Documento', align: 'right',
        validators: [Validators.required] 
      },
      { 
        name: 'nombre', type: 'string', search: true, editType: 'INPUT',  label: 'Nombre',
        validators: [Validators.required] 
      },
      { 
        name: 'apellido', type: 'string', search: true, editType: 'INPUT',  label: 'Apellido',
        validators: [Validators.required] 
      },
      { 
        name: 'email', type: 'string', search: true, editType: 'INPUT', label: 'Email',
        validators: [Validators.required, Validators.email] 
      }
    ]
    }

  private fGroup: FormGroup;

  getRowValidator(): FormGroup {
    return this.buildformGroup();
  }
 

  private buildformGroup(): FormGroup {
    this.fGroup = new FormGroup({});
    this.EmpleadoObject.fields.forEach((f) => {
      this.fGroup.addControl(f.name, new FormControl('', f.validators));
    })
    return this.fGroup;
  }



  
}


