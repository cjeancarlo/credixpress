import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ValidatorService } from '../service/validator.service';
import { TelefonoValidatorService } from './service/telefono.validator.service';
import { TableDataSource } from '../table-inline-edit/table-data-source';
import { TableElementDataService } from '../table-inline-edit/table-element-data.service';
import { ModelObject } from '../models/object.models';
import { ErrorsItem } from '@credix/back-end'
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import  *  as telefonosActions  from './store/actions';
import { Telefono } from './telefono.model';
@Component({
  selector: 'credix-telefono',
  templateUrl: './telefono.component.html',
  styleUrls: ['./telefono.component.scss'],
  providers: [
    { provide: ValidatorService, useClass: TelefonoValidatorService }
  ],
})
export class TelefonoComponent implements OnInit, OnDestroy {

  loading: boolean;
  error: ErrorsItem;
  loaded = false;
  subscribe: Subscription;  

  /**guarda el modelObject del Padre */
  private ParentmodelObject : ModelObject;
  private ParentActions: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {},
    private store: Store<any>,
    public  telefonoValidator: TelefonoValidatorService, 
    private tableElementDataService: TableElementDataService) {

      /**guarda temporalmente el modelObject del padre  */;
    this.ParentmodelObject  = this.tableElementDataService.modelObject;
    this.ParentActions  = this.tableElementDataService.actions;

    this.tableElementDataService.modelObject = this.telefonoValidator.TelefonoObject;
    this.tableElementDataService.actions = telefonosActions;
      

      this.subscribe=  this.store.select('telefonos').subscribe(telefonos => {
        this.loading = telefonos.isLoading
        this.error = telefonos.error;
        this.loaded = telefonos.isLoaded;
       
      }) ;
      }
      ngOnInit() {
        this.store.select(state => state.telefonos)
        .subscribe( state =>  {
         if  ( state.isLoaded) {
           this.tableElementDataService.dataSource  = new TableDataSource<any>(
             state.telefonos,     
             Telefono, 
             this.telefonoValidator); 
           }
         })
         console.log(this.data['row']);
       this.store.dispatch(new telefonosActions.LoadRequestAction(
          {
            parentId: this.data['row'].id,
            parentType: 1
          }
         ));
       
      }
   
  /** Called once, before the instance is destroyed.
  * Add 'implements OnDestroy' to the class.
  */
  ngOnDestroy(): void {
    /**retorna al modelo original modelObject esto evita que el modelo del hijo
     * sobre escriba al del padre */
    this.tableElementDataService.modelObject = this.ParentmodelObject;
    this.tableElementDataService.actions =   this.ParentActions;
    console.log('destroy');
    this.subscribe.unsubscribe();
  }



}
