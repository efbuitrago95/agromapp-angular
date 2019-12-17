import {LanguagesEditorComponent} from './components/languages/languages-editor/languages-editor.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListLanguagesComponent} from './components/languages/list-languages/list-languages.component';
import {PropertiesComponent} from './components/properties/properties-list/properties.component';
import {LanguagesCreateComponent} from './components/languages/languages-create/languages-create.component';
import {TableComponent} from './components/table/table.component';
import {PropertiesCreateComponent} from './components/properties/properties-create/properties-create.component'
import {PropertiesEditorComponent} from './components/properties/properties-editor/properties-editor.component';

const routes: Routes = [
  {path: 'properties', component: PropertiesComponent },
  {path: 'languages', component: ListLanguagesComponent },
  {path: 'table', component: TableComponent },
  {path: 'languages/creator', component: LanguagesCreateComponent },
  {path: 'languages/editor', component: LanguagesEditorComponent },
  {path: 'properties/create', component: PropertiesCreateComponent },
  {path: 'properties/editor', component: PropertiesEditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
