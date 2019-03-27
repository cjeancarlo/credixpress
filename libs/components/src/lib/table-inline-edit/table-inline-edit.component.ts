import { Component, OnInit,  ViewChild, AfterViewInit } from '@angular/core';

import { TableElementDataService } from './table-element-data.service';
import { TableElement } from './table-element';
import { TableDataSource } from './table-data-source';
import { MatPaginator, MatSort, Sort } from '@angular/material';
import {MatSnackBar} from '@angular/material';

import { faPlus, faTimes, faPen, faSave } from '@fortawesome/free-solid-svg-icons';

import { SelectionModel } from '@angular/cdk/collections';
import {  EnterLeave } from './table-inline.animations';
import { MessageComponent } from '../message/message.component';
@Component({
  selector: 'credix-table-inline-edit',
  templateUrl: './table-inline-edit.component.html',
  styleUrls: ['./table-inline-edit.component.scss'],
  animations: [ EnterLeave ],

})
export class TableInlineEditComponent implements OnInit, AfterViewInit {
  
  selection = new SelectionModel<TableElement<any>>(true, []);
  sortedData: any[];
  displayedColumns = [];
  searchColumns = [];
  faPlus = faPlus;
  faPen = faPen;
  faTimes = faTimes;
  faSave = faSave;
  modelObject: any;
  
  dataSource: TableDataSource<any>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private tableElementDataService:TableElementDataService,
               private snackBar: MatSnackBar) { 
    this.dataSource = this.tableElementDataService.dataSource;
    this.modelObject= this.tableElementDataService.modelObject;
  }

  ngOnInit() { 
    this.displayedColumns = this.getDisplayedColumns();
    this.searchColumns = this.getDisplayedColumns('search');
    this.filterDefinition();
    
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {  }

  /** metodo define el filtro basado en el Objeto ""ModelObject.columns.search:true"" 
    y crea un arreglo con las columnas habilitadas pára la busqueda*/
  private filterDefinition() {
    this.dataSource.filterPredicate = (data, filter) => {
      let value = '';
      this.searchColumns.forEach(element => {
        if (data.currentData.hasOwnProperty(element)) {
            value += 
            /**si la data viene de un input SELECT, mapeo del objeto 
             * para obtener la descripcion*/
            typeof data.currentData[element] === "object" ? 
            data.currentData[element].description : 
            data.currentData[element];
        }
      }
      )
      //console.log(value);
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
      return this.modelObject.fields.map(item => {
        if (item.search) {
          return item.name
        };
      });
    }

    return this.modelObject.fields.map(item => item[tipo]);
  }

 
  confirmEditCreate(row: TableElement<any> ){
     if (!row.confirmEditCreate()) {
      this.openSnackBar( row.errorsArray ); 
     };
  }
  
  private openSnackBar(data:any) {
    this.snackBar.openFromComponent(MessageComponent, {
      data: data,
      duration: 3000,
    });
  }
}