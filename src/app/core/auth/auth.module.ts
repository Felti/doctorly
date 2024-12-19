import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { SharedModule } from '../../shared/components/shared.module';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './reducers';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducers, { metaReducers: fromAuth.metaReducers })
  ]
})
export class AuthModule { }
