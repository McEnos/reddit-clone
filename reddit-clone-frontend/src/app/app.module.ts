import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SignUpComponent} from './auth/signup/sign-up.component';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthModule} from './auth/auth.module';
import {NgxWebstorageModule} from "ngx-webstorage";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignUpComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,

    ReactiveFormsModule,
    AuthModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
