import { Component, OnInit, Input } from '@angular/core';
import { TableElement } from '../table-inline-edit/table-element';

@Component({
  selector: 'credix-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent implements OnInit {
  @Input() rowElement: TableElement<any>;
  
  constructor() { 


  }

  ngOnInit() {
  }

}
