import { Component, OnInit, Input,  ViewChild, AfterViewInit } from '@angular/core';
import { ValidatorService } from '../service/validator.service';
import { TableDataSource } from './table-data-source';

import { BancoValidatorService } from '../service/delete.service';
import { MatPaginator } from '@angular/material';
import { faPlus, faTimes, faPen, faSave } from '@fortawesome/free-solid-svg-icons';
import { SelectionModel } from '@angular/cdk/collections';
import { TableElement } from './table-element';
import {  EnterLeave } from './table-inline.animations';

@Component({
  selector: 'credix-table-inline-edit',
  templateUrl: './table-inline-edit.component.html',
  styleUrls: ['./table-inline-edit.component.scss'],
  animations: [ EnterLeave ],
  providers: [
    { provide: ValidatorService, useClass: BancoValidatorService }
  ],
})
export class TableInlineEditComponent implements OnInit, AfterViewInit {

  constructor(private personValidator: ValidatorService) { }

  selection = new SelectionModel<TableElement<any>>(true, []);


  displayedColumns = [];
  searchColumns = [];
  faPlus = faPlus;
  faPen = faPen;
  faTimes = faTimes;
  faSave = faSave;

  options = ['M', 'F', 'N/A'];
  @Input() modelClass: any;
  @Input() modelObject;


  @Input() personList = [
    { name: 'jeancarlos cartaya', age: 40 },
    { name: 'Optimus Prime', age: 51 },
    { name: 'Megatron', age: 50 },
    { name: 'Peter Parker', age: 53 },
    { name: 'Bad', age: 540 },
    { name: 'Bra', age: 550 },
    { name: 'Brad', age: 650 },
    { name: 'Bad', age: 560 },
    { name: 'Ba', age: 506 },
    { name: 'Bd', age: 506 },
    { name: 'B', age: 503 },
    { name: 'Bad', age: 250 },
  ];

  dataSource: TableDataSource<any>;

  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource = new TableDataSource<any>(this.personList,
      this.modelClass, this.personValidator);  // JUST USE THE LIBRARY    

    this.displayedColumns = this.getDisplayedColumns();
    this.searchColumns = this.getDisplayedColumns('search');
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

    this.filterDefinition();
  }

  /** metodo define el filtro basado en el Objeto ""ModelObject.columns.search:true"" 
    y crea un arreglo con las columnas habilitadas pára la busqueda*/
  private filterDefinition() {
    this.dataSource.filterPredicate = (data, filter) => {
      let value = '';
      this.searchColumns.forEach(e => {
        if (data.currentData.hasOwnProperty(e)) {
          value += data.currentData[e];
        }
      }
      )
      return (value).trim().toLowerCase().indexOf(filter) !== -1;
    }
  }
  /** inicializa el filtro definido en filterPredicate 
   */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all 
    selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));

  }
/**agrega un registro el la primera posicion del 
 arreglo de registro mostrndo en la pantalla 
*/
createNew() {
    const pos = this.paginator.pageIndex * this.paginator.pageSize;
    this.dataSource.createNew(pos);
  }

  getDisplayedColumns(tipo = 'name'): string[] {
    if (tipo === 'search') {
      return this.modelObject.columns.map(item => {
        if (item.search) {
          return item.name
        };
      });
    }
    return this.modelObject.columns.map(item => item[tipo]);
  }


}
