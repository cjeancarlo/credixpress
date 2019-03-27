import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'credix-print-error',
  templateUrl: './print-error.component.html',
  styleUrls: ['./print-error.component.css']
})
export class PrintErrorComponent implements OnInit {

  @Input() field: any;
  @Input() control: FormControl;
  
  constructor() { }


  ngOnInit() {
  }

}
