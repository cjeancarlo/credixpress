import { Component, Input } from '@angular/core';
import { TableElement } from '../table-inline-edit/table-element';

@Component({
  selector: 'credix-display',
  template: '{{rowElement.validator.controls[field.name].value}}'
})
export class DisplayComponent  {

  @Input() rowElement: TableElement<any>;
  @Input() field: any;

}
