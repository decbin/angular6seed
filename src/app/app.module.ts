import { MdRoutingModule } from './md-routing/md-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdMaterialModule } from './md-material/md-material.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MdRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
