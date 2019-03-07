import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorService } from '@credix/table-inline-edit';

@Injectable({
  providedIn: 'root'
})
export class BancoValidatorService  implements ValidatorService{

  getRowValidator(): FormGroup {
    return new FormGroup({
      'name': new FormControl(null, Validators.required),
      'age': new FormControl(),
      });
  }
}





