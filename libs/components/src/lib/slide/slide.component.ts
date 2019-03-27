import { Component, OnInit, Input } from '@angular/core';
import { TableElement } from '../table-inline-edit/table-element';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'credix-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {


  @Input() rowElement: TableElement<any>;
  @Input() field: any;
  
  constructor() { }

  ngOnInit() {

    if (!this.getFormcontrol().value ) {
      this.getFormcontrol().setValue(false);
    }
  }

    /** retorna un objeto de tipo FormControl */
    private getFormcontrol(name: string = this.field.name): FormControl {
      return this.rowElement.validator.controls[name] as FormControl;
    }
  

}
