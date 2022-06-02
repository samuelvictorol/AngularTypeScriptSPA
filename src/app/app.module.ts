import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';
import { routing } from './app.routing';
import { TesteAula2Component } from './teste-aula2/teste-aula2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntegrantesComponent,
    TesteAula2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
