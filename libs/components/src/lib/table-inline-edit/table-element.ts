import { FormGroup } from '@angular/forms';
import cloneDeep from 'lodash.clonedeep';

import { TableDataSource } from './table-data-source';
import { typoeOfMessage } from '../models/message.model';

export abstract class TableElement<T> {
  id: number;
  primaryKey: string;
  editing: boolean;
  currentData: T;
  originalData?: T;
  source: TableDataSource<T>;
  errorsArray: typoeOfMessage[] = [];

  abstract get validator(): FormGroup;
  abstract set validator(validator: FormGroup);

  delete(): void {
    this.source.delete(this.id);
  }

  confirmEditCreate(): boolean {
    if (this.id === -1)
      return this.source.confirmCreate(this);
     else
      return this.source.confirmEdit(this);
  }
/**inicia edicion del registro verifica si ya existe un registro en estado de edicion, 
 * ya que solo se puede editar un registro a la vez sino hace un  'push' a la propiedad 
 * 'errorsArray' 
*/
  startEdit(): void {
    if (!this.source.existsElement(this.source.data)){
      this.originalData = cloneDeep(this.currentData);
      this.editing = true;
    } else {
          this.errorsArray.push({ 
          type: "msg", 
          msg: " Finalice la edición del registro Anterior" } 
          );
    }
  }

  cancelOrDelete() {
    if (this.id === -1 || !this.editing)
      this.delete();
    else {
      this.currentData = this.originalData;
      this.editing = false;
    }
  }

  abstract isValid(): boolean;
}
