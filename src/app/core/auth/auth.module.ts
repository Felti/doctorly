import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { SharedModule } from '../../shared/components/shared.module';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './reducers';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './service/auth.effects';


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.authReducer, { }),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule { }
