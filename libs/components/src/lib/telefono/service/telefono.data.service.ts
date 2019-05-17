import { GetData} from '@credix/back-end';
import { Observable } from 'rxjs';
import { Telefono } from '../telefono.model';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class TelefonoDataService {

constructor(private _getData:GetData ){}

getAllTelefonos(param:any): Observable<Telefono[]> {
    return this._getData.getAllByParams(param , '/listTelefonos/');
  }  
  
getEditOrCreate( telefono: any ): Observable<Telefono[]> {
    return this._getData.getAllByParams(telefono.telefono , '/EditOrCreateTelefono/');
  }    

}