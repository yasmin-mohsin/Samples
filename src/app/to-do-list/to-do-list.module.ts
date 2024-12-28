import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoListRoutingModule } from './to-do-list-routing.module';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { PopUpComponent } from './pop-up/pop-up.component'
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    ToDoListComponent,
    PopUpComponent
  ],
  imports: [
    CommonModule,
    ToDoListRoutingModule,
    // BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ]
})
export class ToDoListModule { }
