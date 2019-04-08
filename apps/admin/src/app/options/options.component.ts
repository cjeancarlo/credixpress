import { Component, OnInit } from '@angular/core';
import { OptionsValidatorService } from './service/options.validator.service';
import {  FieldType  } from '@credix/components';
import { FormControl } from '@angular/forms';
import { Observable  } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'credix-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  
  
  states  = [
    {
      name: 'Arkansas',
      population: '2.978M',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'California',
      population: '39.14M',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Florida',
      population: '20.27M',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Texas',
      population: '27.47M',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];

  field: FieldType;
  inputControl = new FormControl();
  displayField: string;
  filteredOptions: Observable<any[]>;
  
  constructor(  public  optionsValidator: OptionsValidatorService ){  
    this.field   = this.optionsValidator.OptionsObject.fields[0];
  }

  ngOnInit() {
    this.displayField = this.field.selectConfig.filterField;

    this.filteredOptions = this.inputControl.valueChanges.pipe(
      startWith (''),
      map(value => {
        return this.states.slice()
      
      })
    );
  }

}
