import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { TableElement } from '../table-inline-edit/table-element';

@Component({
  selector: 'credix-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() rowElement: TableElement<any>;
  @Input() field: any;
  
  displayField: string;
  filteredOptions: Observable<string[]>;
  
  ngOnInit() {
     this.displayField = this.field.selectConfig.filterField;
     this.filteredOptions = this.getFormcontrol().valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterField = this.field.selectConfig.filterField;
    const filterValue = value[filterField] ? value[filterField].toLowerCase() : '';

    return this.getOptions().filter((option) => {
          return   option[filterField].toLowerCase().indexOf(filterValue) === 0
    });
  }

  /**Function that maps an option's control value to its display value in the trigger. */
  displayFn(op?: any): string | undefined {
      return op ? op[this.displayField] : undefined;
  }

  private getFormcontrol(): FormControl {
    return this.rowElement.validator.controls[this.field.name] as FormControl;
  }

  private getOptions(): string[] {
    return this.field.selectConfig.optionSource || [];    
  }
}
