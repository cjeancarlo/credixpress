import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'credix-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input()  InputControl: FormControl;
  @Input()  options: string[]
  
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.InputControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    

    const filterValue = value ? value.toLowerCase() : '';

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

}
