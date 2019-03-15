import { Injectable } from '@angular/core';
import { TableDataSource } from './table-data-source';

@Injectable({
  providedIn: 'root'
})
export class TableElementDataService {

  dataSource: TableDataSource<any>;
  modelObject: any;
  constructor() { }
}
