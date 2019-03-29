import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
import { typoeOfMessage } from '../models/message.model';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'credix-message',
  template: `
    <span  *ngFor="let item of data">
        <div  *ngIf="item.type==='error'" >
            Campo {{item.key}} <span> {{buildMsg(item)}} </span> <br>
        </div>  
        <div  color="primary" *ngIf="item.type==='msg'" >
             {{item.msg  }}  <br>
        </div> 
    </span>
      `,
  styles: []
})
export class MessageComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: typoeOfMessage) { }

  ngOnInit() { }

  buildMsg(data: typoeOfMessage): string {
    switch (data.type) {
      case "error": return this.buildMsgError(data.errors);
      case "msg": return data.msg;
    }
  }

  private buildMsgError(data: ValidationErrors) {
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
