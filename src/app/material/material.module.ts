import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatTableModule } from  '@angular/material/table'
import {MatCardModule} from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatDividerModule } from  '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatTableModule,
  MatCardModule,
  MatCheckboxModule,
  MatDividerModule,
  MatSnackBarModule
]


@NgModule({
  imports: [ MaterialComponents],
  exports: [ MaterialComponents],
})
export class MaterialModule { }
