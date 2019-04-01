import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable  } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { TableElement } from '../table-inline-edit/table-element';
import { MatAutocompleteTrigger, MatOptionSelectionChange } from '@angular/material';
import { GetData } from '@credix/back-end';

@Component({
  selector: 'credix-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit, AfterViewInit {

  @Input() rowElement: TableElement<any>;
  @Input() field: any;
  @ViewChild(MatAutocompleteTrigger) trigger: MatAutocompleteTrigger;

  displayField: string;
  filteredOptions: Observable<string[]>;

  constructor(private _getdata: GetData ) { }

  ngOnInit() {
    this.displayField = this.field.selectConfig.filterField;
    this.filteredOptions = this.getFormcontrol().valueChanges.pipe(
      startWith(''),
      map(value => {
      return this._filter(value)
      })
    );
  }

  ngAfterViewInit() {
    this.forceSelection();
  }

  /**limpia cualquier valorno proveniente de las opciones desplegadas*/
  private forceSelection() {
        this.trigger.panelClosingActions
      .subscribe((e: any) => {
        if (!(e && e.source ||
          // si ya habia selecionado un elemento hago un blur y luego focus sobre un input 
          // el trigger dispara en null la variable "e" y se pierde el valor, asi sea valido el valor 
          // por lo que se agrego la siguiente validacion 
          // si "value" es un objeto y tiene la propiedad id el valor es ""valido""
          (this.getFormcontrol().value && this.getFormcontrol().value.id))) {
           this.getFormcontrol().setValue(null);
          this.trigger.closePanel();
        } 
      }
      
      );
  }

  /**limpia al hijo cuando el input paretn cambia de valor para mantener 
   * la integridad de la cascada de datos */
  onEnter(evt: MatOptionSelectionChange ){
    const childKey = this.field.selectConfig.childKey;
    if ( this.field.selectConfig.childKey !== null){
    if (this.getFormcontrol(childKey).value &&
         evt.source.value.id !== this.getFormcontrol(childKey).value.parentId ){
          this.getFormcontrol(childKey).setValue(null);
    }
  }
  }

  /**retorna elementos filtrados del arreglo de items seleccionables, dependiendo 
   * de los inputs del usuario 
   */
  private _filter(value: string): string[] {

    
    const filterField = this.field.selectConfig.filterField;
    if (this.rowElement.editing ) {
      return this.getOptions().filter((option) =>  
        (''+option[filterField]).toLowerCase().indexOf(value) === 0);
      }
  }

  /**Function that maps an option's control value to its display value in the trigger. */
  displayFn(op?: any): string | undefined {
    /**Del backend viene un string o un number por lo que la descripcion no esta disponible
     * asi que se invoca la funcion que buscar el objeto a partir de un ID unico
     */
    if(typeof op === 'number' ||  op === 'string') {
    const value = this._getdata.getRowfromId(op);
      /** actualiza  del codigo unico el el objeto tipo OptionItems, esto para 
       * permitir hacer busquedas en los campos tipo 'selec' usando el campo OptionItems.description
      */
      this.getFormcontrol().setValue(value);
      return value[this.displayField];
    }
    return op && op[this.displayField] ? op[this.displayField] : undefined;
  }

  /** retorna un objeto de tipo FormControl */
  private getFormcontrol(name: string = this.field.name): FormControl {
    return this.rowElement.validator.controls[name] as FormControl;
  }

  /** retorna el arreglo de elmentos seleccionables, en el caso que 
   * los elementos tengan depencia valida y filtra los elementos a mostrar
  */
  private getOptions(): string[] {
    const parentKey = this.field.selectConfig.parentKey;
    let parentValue = '';
    if (parentKey !== null) {
      if (!this.getFormcontrol(parentKey).value) {
        return [];
      }
      parentValue = this.getFormcontrol(parentKey).value;
      const filteredArray =  this.field.selectConfig.optionSource.filter(
        (option: any) => 
          (option['parentId'] ===  (typeof parentValue === 'object' ? parentValue['id'] : parentValue))  
        );
        return filteredArray;
    }
    return this.field.selectConfig.optionSource || [];
  }

  /**metodo que actualiza el observable<string[]> cuando el input tiene el foco, es decir, actualiza
   * la lista e elementos del input cuando recibe el foco
  */
  updatefilteredOptions(r: TableElement<any>){
    this.filteredOptions = 
    this.getFormcontrol().valueChanges.pipe(
      startWith(''),
      map(value => {
      return this._filter(value)
      })
    );
    /*from([this.getOptions()]);*/
  }

}
