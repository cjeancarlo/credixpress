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
import { ComponentType } from '@angular/core/src/render3';
import { ModelObject } from '../models/object.models';
import { Store } from '@ngrx/store';
@Component({
  selector: 'credix-table-inline-edit',
  templateUrl: './table-inline-edit.component.html',
  styleUrls: ['./table-inline-edit.component.scss'],
  animations: [EnterLeave]
})
export class TableInlineEditComponent implements OnInit, AfterViewInit {

  filterInput: FormControl = new FormControl;
  selection = new SelectionModel<TableElement<any>>(true, []);
  sortedData: any[];
  displayedColumns = [];
  disableDetailsButtons = true;
  searchColumns = [];
  faPlus = faPlus;
  faPen = faPen;
  faTimes = faTimes;
  faSave = faSave;
  modelObject: ModelObject;
  dataSource: TableDataSource<any>;
  private parenitId: number;
  private parentType: number;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private tableElementDataService: TableElementDataService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private store: Store<any>
  ) {
    this.dataSource = this.tableElementDataService.dataSource;
    this.modelObject = this.tableElementDataService.modelObject;
  }

  ngOnInit() {
    this.displayedColumns = this.getDisplayedColumns();
    this.searchColumns = this.getDisplayedColumns('search');
    this.filterDefinition();

    this.dataSource.paginator = this.paginator;

    this.selection.onChange.subscribe(selectedRow => {
      this.disableDetailsButtons = selectedRow.source.selected.length === 1 ? false : true
    })

    let row: TableElement<any> ;
    this.store.select(state => state[this.modelObject.storeName])
    .subscribe( state => {

        if (state.parentId){
          this.parenitId =state.parentId;
        }
        if (state.parentType){
          this.parentType =state.parentType;
        }
      
        if (state.error) {
          this.openSnackBar([{ type: 'msg', msg: state.error.text  }]);
          return;
          
        } else {
          if (state.action === 'LOAD_INSERT_SUCCESS' || state.action === 'LOAD_UPDATE_SUCCESS' ){

            row =  this.selection.selected[0];

           if (!row.confirmEditCreate()) {
             this.openSnackBar(row.errorsArray);
             return;
           };
          
           this.snackBar.openFromComponent(MessageComponent, {
            data: [{ type: 'msg', msg: ' Datos Actualizados ' }],
            duration: 3000,
           });
           this.selection.clear();
          }
        }
      })
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
      return (value).trim().toLowerCase().indexOf(filter) !== -1;
    }
  }
  /** inicializa el filtro definido en filterPredicate 
   */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**agrega un registro el la primera posicion del 
   arreglo de registro mostrando en la pantalla 
  */
  createNew() {
    this.filterInput.setValue(null);
    this.applyFilter('')
    const pos = this.paginator.pageIndex * this.paginator.pageSize;
    const row =  this.dataSource.createNew(pos);

    this.SetSelection(row);
  }

  startEditing(row: TableElement<any>) {
    if (this.selection.selected.length === 1 && row.id !== this.selection.selected[0].id) {
      this.openSnackBar([{ type: 'msg', msg: ' No puedo completar la operación, finalice la edicion del registor anterior ' }]);
      return
    }

    this.SetSelection(row);
    row.startEdit();
  }

  private SetSelection(row: TableElement<any>) {
    this.selection.clear();
    this.selection.toggle(row);
    this.selection.isSelected(row);
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

  getDetalle(component: ComponentType<{}>) {

    const dialogRef = this.dialog.open(component, {
      data: {
        parent: this.selection.selected[0].currentData[this.modelObject.primaryKey],
        row: this.selection.selected[0].currentData
      }
    });
  }

  confirmEditCreate(row: TableElement<any>) {
    /**si estoy editando y no modifico ningun data no hay por que hacer una llamada el servidor */
    if (JSON.stringify(row.originalData).toString() === JSON.stringify(row.currentData).toString()) {
      this.openSnackBar([{ type: 'msg', msg: ' No hay cambios que guardar' }]);
      this.selection.clear();
      row.editing = false;
      return;
    }

    if (this.selection.selected.length === 1 && row.id !== this.selection.selected[0].id) {
      this.openSnackBar([{ type: 'msg', msg: ' No puedo completar la operación, finalice la edicion del registro anterior ' }]);
      return;
    }

    const flatObject ={};
    Object.keys(row.currentData).forEach((key) => {
      if (typeof row.currentData[key] === 'object'){
        flatObject[key] = row.currentData[key].id;
      }else {
        
        
        switch (key) {
          case 'parentId':
            flatObject[key] =  this.parenitId;             
            break;
            case 'parentType':
            flatObject[key] =  this.parentType;   
            break;
          default:
          flatObject[key] =  row.currentData[key];
        }
      }
  });

  if(row.id === -1){
      this.store.dispatch(new this.tableElementDataService.actions.LoadInsertAction( flatObject ));
    } else {
      this.store.dispatch(new this.tableElementDataService.actions.LoadUpdateAction( flatObject ));
    }
  }

  private openSnackBar(data: any) {
    this.snackBar.openFromComponent(MessageComponent, {
      data: data,
      duration: 3000
    });
  }

  openDialog(row: TableElement<any>) {

    if (this.selection.selected.length === 1 && row.id !== this.selection.selected[0].id) {
      this.openSnackBar([{ type: 'msg', msg: ' No puedo completar la operación, finalice la edicion del registro anterior ' }]);
      return;
    }

    if (row.editing) {
      this.selection.clear();
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