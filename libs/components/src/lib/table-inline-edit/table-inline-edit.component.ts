import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { TableElementDataService } from './table-element-data.service';
import { TableElement } from './table-element';
import { TableDataSource } from './table-data-source';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material';

import { faPlus, faTimes, faPen, faSave } from '@fortawesome/free-solid-svg-icons';

import { SelectionModel } from '@angular/cdk/collections';
import { EnterLeave } from './table-inline.animations';
import { MessageComponent } from '../message/message.component';
import { FormControl } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'credix-table-inline-edit',
  templateUrl: './table-inline-edit.component.html',
  styleUrls: ['./table-inline-edit.component.scss'],
  animations: [EnterLeave],

})
export class TableInlineEditComponent implements OnInit, AfterViewInit {

  filterInput: FormControl = new FormControl;
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

  constructor(private tableElementDataService: TableElementDataService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog) {
    this.dataSource = this.tableElementDataService.dataSource;
    this.modelObject = this.tableElementDataService.modelObject;
  }

  ngOnInit() {
    this.displayedColumns = this.getDisplayedColumns();
    this.searchColumns = this.getDisplayedColumns('search');
    this.filterDefinition();

    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() { }

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
    this.filterInput.setValue(null);
    this.applyFilter('')

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


  confirmEditCreate(row: TableElement<any>) {
    if (!row.confirmEditCreate()) {
      this.openSnackBar(row.errorsArray);
      return
    };

    this.snackBar.openFromComponent(MessageComponent, {
      data: [{ type: 'msg', msg: ' Datos Actualizados ' }],
      duration: 3000,
    });
  }

  private openSnackBar(data: any) {
    this.snackBar.openFromComponent(MessageComponent, {
      data: data,
      duration: 3000,
    });
  }

  openDialog(row: TableElement<any>) {
    if (row.editing) {
      row.cancelOrDelete(); return;
    }

    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        currentData: row.currentData,
        deleteInfo: this.modelObject.deleteInfo
      }
    });


    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        row.cancelOrDelete();
        this.snackBar.openFromComponent(MessageComponent, {
          data: [{ type: 'msg', msg: ' registro Eliminado ' }],
          duration: 3000,
        });
      }
    });
  }

}