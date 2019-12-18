import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListLanguagesComponent} from './components/languages/list-languages/list-languages.component';
import {LanguagesEditorComponent} from './components/languages/languages-editor/languages-editor.component';
import {LanguagesCreateComponent} from './components/languages/languages-create/languages-create.component';
import {PropertiesComponent} from './components/properties/properties-list/properties.component';
import {PropertiesCreateComponent} from './components/properties/properties-create/properties-create.component'
import {PropertiesEditorComponent} from './components/properties/properties-editor/properties-editor.component';
import {ListItemsComponent} from './components/items/list-items/list-items.component';
import {ItemsCreateComponent} from './components/items/items-create/items-create.component';
import {ItemsEditorComponent} from './components/items/items-editor/items-editor.component';
import {ListCountriesComponent} from './components/countries/list-countries/list-countries.component';
import {CountriesCreatorComponent} from './components/countries/countries-creator/countries-creator.component';
import {CountriesEditorComponent} from './components/countries/countries-editor/countries-editor.component';


const routes: Routes = [
  {path: 'languages', component: ListLanguagesComponent },
  {path: 'properties', component: PropertiesComponent },
  {path: 'items', component: ListItemsComponent },
  {path: 'countries', component: ListCountriesComponent},
  {path: 'languages/creator', component: LanguagesCreateComponent },
  {path: 'languages/editor', component: LanguagesEditorComponent },
  {path: 'properties/creator', component: PropertiesCreateComponent },
  {path: 'properties/editor', component: PropertiesEditorComponent },
  {path: 'items/creator', component: ItemsCreateComponent },
  {path: 'items/editor', component: ItemsEditorComponent },
  {path: 'countries/creator', component: CountriesCreatorComponent },
  {path: 'countries/editor', component: CountriesEditorComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
