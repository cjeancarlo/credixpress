import { Injectable } from '@angular/core';
import { ValidatorService } from './validator.service';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DefaultValidatorService implements ValidatorService {

  getRowValidator(): FormGroup {
    return null;
  }
}
