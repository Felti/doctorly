import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainFooterComponent } from './shared/components/main-footer/main-footer.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { MainHeaderComponent } from './shared/components/main-header/main-header.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/components/shared.module';
import { SignInModule } from './pages/auth/sign-in/sign-in.module';
@NgModule({
  declarations: [
    AppComponent,
    MainFooterComponent,
    MainLayoutComponent,
    MainHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignInModule,
    SharedModule
  ],  
  providers: [
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
