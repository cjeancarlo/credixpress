import { Component } from '@angular/core';
import { Banco } from './banco.model';

@Component({
  selector: 'credix-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.css']
})
export class BancoComponent  {
 
  BancoObject = {
    columns: [
      { name: 'name', type: 'string', required: false, search: true, editType: 'INPUT' },
      { name: 'age', type: 'number', required: false, search: true, editType: 'INPUT' },
      { name: 'sex', type: 'number', required: false, search: false, editType: 'SELECT' },
      { name: 'actionsColumn', editType: 'actionsColumn' },
    ]
  }


returnByClass(){
    return Banco
}

  

}
