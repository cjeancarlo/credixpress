import { Injectable } from '@angular/core';
import { TableDataSource } from './table-data-source';
import { ModelObject } from '../models/object.models';

@Injectable({
  providedIn: 'root'
})
export class TableElementDataService {

  dataSource: TableDataSource<any>;
  modelObject: ModelObject;
  constructor() { }
}
