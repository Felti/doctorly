import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainFooterComponent } from './shared/components/main-footer/main-footer.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { MainHeaderComponent } from './shared/components/main-header/main-header.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/components/shared.module';
import { AuthModule } from './core/auth/auth.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AuthRoutingModule } from './core/auth/auth-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MainFooterComponent,
    MainLayoutComponent,
    MainHeaderComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AuthRoutingModule,
    SharedModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],  
  providers: [
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
