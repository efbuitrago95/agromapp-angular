import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListLanguagesComponent } from './components/languages/list-languages/list-languages.component';
import { PropertiesComponent } from './components/properties/properties.component';


const routes: Routes = [
  {path: 'properties', component: PropertiesComponent},
  {path: 'languages', component: ListLanguagesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
