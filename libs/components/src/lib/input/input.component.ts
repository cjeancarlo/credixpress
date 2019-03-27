import { Component, OnInit, Input } from '@angular/core';
import { TableElement } from '../table-inline-edit/table-element';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'credix-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent implements OnInit {
  @Input() rowElement: TableElement<any>;
  @Input() field: any;
  
  constructor() { }

  ngOnInit() { }

  /** retorna un objeto de tipo FormControl */
  private getFormcontrol(name: string = this.field.name): FormControl {
    return this.rowElement.validator.controls[name] as FormControl;
  }

}
