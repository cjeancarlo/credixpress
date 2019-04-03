import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'credix-print-error',
  template: `
    <div  class="xx-small text-danger " *ngIf="control && control.errors && (control.dirty || control.touched)">
      <div [hidden]="!control.errors.required">{{ field.label }} es requerido.</div>
      <div [hidden]="!control.errors.patternInvalid">{{ field.label }} es invalido.</div>
      <div [hidden]="!control.errors.email">{{ field.label }} es invalido.</div>
    </div> `,
  
  styleUrls: ['./print-error.component.css']
})
export class PrintErrorComponent implements OnInit {

  @Input() field: any;
  @Input() control: FormControl;
  
  ngOnInit() {
  }

}
