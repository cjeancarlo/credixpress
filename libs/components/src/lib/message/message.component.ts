import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
import { typoeOfMessage } from '../models/message.model';
import { HelperService } from '../service/helper.service';

@Component({
  selector: 'credix-message',
  template: `
    <span  *ngFor="let item of data">
        <div  *ngIf="item.type==='error'" >
            Campo {{hS.buildLabel(item.key)}} <span> {{hS.buildMsg(item)}} </span> <br>
        </div>  
        <div  color="primary" *ngIf="item.type==='msg'" >
             {{item.msg  }}  <br>
        </div> 
    </span>
      `,
  styles: []
})
export class MessageComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: typoeOfMessage,
  public hS: HelperService ) { }

  ngOnInit() { }

  

}
