import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
import { ShowMsgErrorsObj, ShowMsg } from '../models/message.model';

@Component({
  selector: 'credix-message',
  template: `
      <span *ngFor="let item of data">
        Campo {{item.key}} <span> {{buildMsg(item.errors)}} </span> <br>
      </span>
`,
  styles: []
})
export class MessageComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: ShowMsgErrorsObj[] | ShowMsg) { }

  ngOnInit() {}

  buildMsg( data: ShowMsgErrorsObj[] | ShowMsg) :string {
    let r = '';
    Object.keys(data).forEach(key => {
        r += this.translateMsg(key);
    });
    return r;
  }
 
  private translateMsg(key: string): string {
    switch (key) {
      case 'required':
        return 'es requerido'
      default:
        return key;
    }
  }

}
