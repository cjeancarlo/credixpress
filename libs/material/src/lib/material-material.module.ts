
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatSortModule, MatSlideToggleModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  exports: [ 
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatSortModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    FontAwesomeModule
  ],
  imports: [CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatSortModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    FontAwesomeModule]
})
export class MaterialModule {}





