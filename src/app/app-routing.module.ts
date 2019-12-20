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
import {ListUsersComponent} from './components//users/list-users/list-users.component';
import {UsersCreateComponent} from './components//users/users-create/users-create.component';
import {UsersEditorComponent} from './components//users/users-editor/users-editor.component';
import {ListCategoriesComponent} from './components/categories/list-categories/list-categories.component';
import {CategoriesCreateComponent} from './components/categories/categories-create/categories-create.component';
import {CategoriesEditorComponent} from './components/categories/categories-editor/categories-editor.component';
import {ListCropsComponent} from './components/crops/list-crops/list-crops.component';
import {CropsCreatorComponent} from './components/crops/crops-creator/crops-creator.component';
import {CropsEditorComponent} from './components/crops/crops-editor/crops-editor.component';
import {MultiSelectorComponent} from './components/shared/multi-selector/multi-selector.component'




const routes: Routes = [
  {path: 'users', component: ListUsersComponent },
  {path: 'languages', component: ListLanguagesComponent },
  {path: 'properties', component: PropertiesComponent },
  {path: 'items', component: ListItemsComponent },
  {path: 'countries', component: ListCountriesComponent},
  {path: 'categories', component: ListCategoriesComponent},
  {path: 'crops', component: ListCropsComponent},

  // creator and editor
  {path: 'languages/creator', component: LanguagesCreateComponent },
  {path: 'languages/editor/:id', component: LanguagesEditorComponent },
  {path: 'properties/creator', component: PropertiesCreateComponent },
  {path: 'properties/editor/:id', component: PropertiesEditorComponent },
  {path: 'items/creator', component: ItemsCreateComponent },
  {path: 'items/editor/:id', component: ItemsEditorComponent },
  {path: 'countries/creator', component: CountriesCreatorComponent },
  {path: 'countries/editor/:id', component: CountriesEditorComponent },
  {path: 'items/editor/:id', component: ItemsEditorComponent },
  {path: 'users/creator', component: UsersCreateComponent },
  {path: 'users/editor/:id', component: UsersEditorComponent },
  {path: 'categories/creator', component: CategoriesCreateComponent },
  {path: 'categories/editor/:id', component: CategoriesEditorComponent },
  {path: 'crops/creator', component: CropsCreatorComponent },
  {path: 'crops/editor/:id', component: CropsEditorComponent },
  {path: 'selector', component: MultiSelectorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
