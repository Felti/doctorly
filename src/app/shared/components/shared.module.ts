import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule, MatLabel} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
// PrimeNG
// Components


// Modules


@NgModule({
  declarations: [
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule
    
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
})
export class SharedModule {}