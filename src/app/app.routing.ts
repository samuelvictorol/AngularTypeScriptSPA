import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { IntegrantesComponent } from "./integrantes/integrantes.component";
import { TesteAula2Component } from "./teste-aula2/teste-aula2.component";

const APP_ROUTE: Routes = [
  {path:'', component: HomeComponent},
  {path:'integrantes', component: IntegrantesComponent},
  {path:'teste', component: TesteAula2Component}
]

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTE);
