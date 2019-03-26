import { Component, OnInit, Input } from '@angular/core';
import { TableElement } from '../table-inline-edit/table-element';

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
  }

}
