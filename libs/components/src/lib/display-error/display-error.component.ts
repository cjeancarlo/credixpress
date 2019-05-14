import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'credix-display-error',
  template: `<mat-card >
  <mat-card-header>
     <mat-card-title>Error</mat-card-title>
     </mat-card-header>
    <mat-card-content>
     <p>
         {{error}}
     </p>
   </mat-card-content>
 </mat-card>`
})
export class DisplayErrorComponent implements OnInit {

@Input() error: string;

  constructor() { }

  ngOnInit() {

    console.log(this.error);
  }

}
