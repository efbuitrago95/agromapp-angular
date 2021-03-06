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
import {PropertiesAccordionComponent} from './components/accordion/properties-accordion/properties-accordion.component';
import {MoonItemsComponent} from './components/accordion/moon-items/moon-items.component';
import {ListRolesComponent} from './components/roles/list-roles/list-roles.component';
import {RolesCreatorComponent} from './components/roles/roles-creator/roles-creator.component';
import {RolesEditorComponent} from './components/roles/roles-editor/roles-editor.component';
import {LoginComponent} from './components/login/login.component';
import {ClassificationListComponent} from './components/classification/classification-list/classification-list.component';
import {ClassificationCreateComponent} from './components/classification/classification-create/classification-create.component';
import {ClassificationEditorComponent} from './components/classification/classification-editor/classification-editor.component';
import {MoonListComponent} from './components/moon/moon-list/moon-list.component';
import {MoonCreateComponent} from './components/moon/moon-create/moon-create.component';
import {MoonEditorComponent} from './components/moon/moon-editor/moon-editor.component';
import {ClassificationItemsListComponent} from './components/classification-items/classification-items-list/classification-items-list.component';
import {ClassificationItemsCreatorComponent} from './components/classification-items/classification-items-creator/classification-items-creator.component';
import {ClassificationItemsEditorComponent} from './components/classification-items/classification-items-editor/classification-items-editor.component';




const routes: Routes = [
  {path: 'users', component: ListUsersComponent },
  {path: 'languages', component: ListLanguagesComponent },
  {path: 'properties', component: PropertiesComponent },
  {path: 'items', component: ListItemsComponent },
  {path: 'countries', component: ListCountriesComponent},
  {path: 'categories', component: ListCategoriesComponent},
  {path: 'crops', component: ListCropsComponent},
  {path: 'roles', component: ListRolesComponent },
  {path: 'classifications', component: ClassificationListComponent },
  {path: 'login', component: LoginComponent },
  {path: 'moon', component: MoonListComponent },
  {path: 'classification-items', component: ClassificationItemsListComponent },
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
  {path: 'selector', component: MultiSelectorComponent },
  {path: 'properties-accodion', component: PropertiesAccordionComponent },
  {path: 'moon-accodion', component: MoonItemsComponent },
  {path: 'roles/creator', component: RolesCreatorComponent },
  {path: 'roles/editor/:id', component: RolesEditorComponent },
  {path: 'classifications/creator', component: ClassificationCreateComponent },
  {path: 'classifications/editor/:id', component: ClassificationEditorComponent },
  {path: 'moon/creator', component: MoonCreateComponent },
  {path: 'moon/editor/:id', component: MoonEditorComponent },
  {path: 'classification-items/creator', component: ClassificationItemsCreatorComponent },
  {path: 'classification-items/editor/:id', component: ClassificationItemsEditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
