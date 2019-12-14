import {LanguagesEditorComponent} from './components/languages/languages-editor/languages-editor.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListLanguagesComponent} from './components/languages/list-languages/list-languages.component';
import {PropertiesComponent} from './components/properties/properties.component';
import {LanguagesCreateComponent} from './components/languages/languages-create/languages-create.component';


const routes: Routes = [
  {path: 'properties', component: PropertiesComponent },
  {path: 'languages', component: ListLanguagesComponent },
  {path: 'languages/create', component: LanguagesCreateComponent },
  {path: 'languages/editor', component: LanguagesEditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
