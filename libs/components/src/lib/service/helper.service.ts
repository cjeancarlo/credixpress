import { Injectable } from '@angular/core';
import { typoeOfMessage } from '../models/message.model';
import { TableElementDataService } from '../table-inline-edit/table-element-data.service';
import { ValidationErrors } from '@angular/forms';
import { FieldType } from '../models/object.models';

@Injectable({
  providedIn: 'root'
})
export class HelperService  {

constructor(private tableElementDataService: TableElementDataService){}

    buildMsg(data: typoeOfMessage): string {
        switch (data.type) {
          case "error": return this.buildMsgError(data.errors);
          case "msg": return data.msg;
        }
      }
    
      buildLabel(key: string ) :string[] {
    
        const r: FieldType[] = this.tableElementDataService.modelObject.fields;
        return    r.filter(l =>  l.name === key )
                  .map(l => l.label )
        }
    
      private buildMsgError(data: ValidationErrors) {
        let r = '';
        Object.keys(data).forEach(key => {
          r += this.translateMsg(key);
        });
        return r;
      }
    
      private translateMsg(key: string): string {
        switch (key) {
          case 'required':
            return 'es requerido'
          case 'email':
            return 'es invalido'            
          default:
            return key;
        }
      }

}
