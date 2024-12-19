import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: '', 
    component: SignInComponent
  },
  {
    path: 'test',
    component: MainLayoutComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
