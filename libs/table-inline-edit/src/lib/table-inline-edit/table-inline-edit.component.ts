import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { ValidatorService } from '../service/validator.service';
import { TableDataSource } from './table-data-source';

import { BancoValidatorService } from '../service/delete.service';
import { MatPaginator } from '@angular/material';
import { faPlus, faTimes, faPen, faSave } from '@fortawesome/free-solid-svg-icons';
import { SelectionModel } from '@angular/cdk/collections';
import { TableElement } from './table-element';

export class Person {
  name: string;
  age: number;

}


@Component({
  selector: 'credix-table-inline-edit',
  templateUrl: './table-inline-edit.component.html',
  styleUrls: ['./table-inline-edit.component.scss'],
  providers: [
    {provide: ValidatorService, useClass: BancoValidatorService }
  ],
})
export class TableInlineEditComponent implements OnInit, AfterViewInit {

  constructor(private personValidator: ValidatorService) { }
  
  selection = new SelectionModel<TableElement<any>>(true, []);
  
  
  displayedColumns = [ 'name', 'age','sex',  'actionsColumn'];
  faPlus = faPlus;
  faPen = faPen;
  faTimes = faTimes;
  faSave = faSave;

  options = ['uno','dos','tres'];
  
  @Input() personList = [ 
    { name: 'Mark', age: 15 },
    { name: 'Brad', age: 51 },
    { name: 'Brd', age: 52 },
    { name: 'Brd', age: 530 },
    { name: 'Bad', age: 540 },
    { name: 'Bra', age: 550 },
    { name: 'Brad', age: 650 },
    { name: 'Bad', age: 560 },
    { name: 'Ba', age: 506 },
    { name: 'Bd', age: 506 },
    { name: 'B', age: 503 },
    { name: 'Bad', age: 250 },
  ] ;
  
  dataSource: TableDataSource<any>;
  
  @Output() personListChange = new EventEmitter<any[]>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  

  ngOnInit() {
    
    this.dataSource = new TableDataSource<any>(this.personList, 
     Person ,  this.personValidator);
/*
    this.dataSource.datasourceSubject.subscribe(personList => 
      this.personListChange.emit(personList)
    );
    
    console.log(this.dataSource.data);*/
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
}

/** Whether the number of selected elements matches the total number of rows. */
isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected === numRows;
}

/** Selects all rows if they are not all selected; otherwise clear selection. */
masterToggle() {
  this.isAllSelected() ?
  this.selection.clear() :
  this.dataSource.data.forEach(row => this.selection.select(row));

}


}
