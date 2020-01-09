import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  CodeHighlighterModule,
  DialogModule,
  DropdownModule,
  EditorModule,
  FileUploadModule,
  InputTextareaModule,
  InputTextModule,
  LightboxModule,
  MenubarModule,
  MessageService,
  MultiSelectModule,
  OverlayPanelModule,
  PasswordModule,
  SliderModule,
  TabViewModule
} from 'primeng/primeng';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from 'ng-sidebar';
import { ImageUploadModule } from 'angular2-image-upload';
// components
import { NavbarVerticalComponent } from './components/navbar-vertical/navbar-vertical.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppGlobals } from './app-globals';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { ListLanguagesComponent } from './components/languages/list-languages/list-languages.component';
import { LanguagesEditorComponent } from './components/languages/languages-editor/languages-editor.component';
import { LanguagesCreateComponent } from './components/languages/languages-create/languages-create.component';
import { PropertiesComponent } from './components/properties/properties-list/properties.component';
import { PropertiesCreateComponent } from './components/properties/properties-create/properties-create.component';
import { PropertiesEditorComponent } from './components/properties/properties-editor/properties-editor.component';
import { ListItemsComponent } from './components/items/list-items/list-items.component';
import { ItemsCreateComponent } from './components/items/items-create/items-create.component';
import { ItemsEditorComponent } from './components/items/items-editor/items-editor.component';
import {ListCountriesComponent} from './components/countries/list-countries/list-countries.component';
import { CountriesCreatorComponent } from './components/countries/countries-creator/countries-creator.component';
import { CountriesEditorComponent } from './components/countries/countries-editor/countries-editor.component';
import { PaginatorComponent } from './components/shared/paginator/paginator.component';
import { InputSearchComponent } from './components/shared/input-search/input-search.component';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { UsersCreateComponent } from './components/users/users-create/users-create.component';
import { UsersEditorComponent } from './components/users/users-editor/users-editor.component';
import { ListCategoriesComponent } from './components/categories/list-categories/list-categories.component';
import { CategoriesCreateComponent } from './components/categories/categories-create/categories-create.component';
import { CategoriesEditorComponent } from './components/categories/categories-editor/categories-editor.component';
import { ListCropsComponent } from './components/crops/list-crops/list-crops.component';
import { CropsCreatorComponent } from './components/crops/crops-creator/crops-creator.component';
import { CropsEditorComponent } from './components/crops/crops-editor/crops-editor.component';
import { MultiSelectorComponent } from './components/shared/multi-selector/multi-selector.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { PropertiesAccordionComponent } from './components/accordion/properties-accordion/properties-accordion.component';
import { ItemsAccordionComponent } from './components/accordion/items-accordion/items-accordion.component';
import { environment } from '../environments/environment';
import { RolesCreatorComponent } from './components/roles/roles-creator/roles-creator.component';
import { RolesEditorComponent } from './components/roles/roles-editor/roles-editor.component';
import { ListRolesComponent } from './components/roles/list-roles/list-roles.component';







@NgModule({
  declarations: [
    AppComponent,
    NavbarVerticalComponent,
    NavbarComponent,
    ListLanguagesComponent,
    PropertiesComponent,
    DynamicTableComponent,
    LanguagesEditorComponent,
    LanguagesCreateComponent,
    PropertiesCreateComponent,
    PropertiesEditorComponent,
    ListItemsComponent,
    ItemsCreateComponent,
    ItemsEditorComponent,
    ListCountriesComponent,
    CountriesCreatorComponent,
    CountriesEditorComponent,
    PaginatorComponent,
    InputSearchComponent,
    ListUsersComponent,
    UsersCreateComponent,
    UsersEditorComponent,
    ListCategoriesComponent,
    CategoriesCreateComponent,
    CategoriesEditorComponent,
    ListCropsComponent,
    CropsCreatorComponent,
    CropsEditorComponent,
    MultiSelectorComponent,
    UploadFileComponent,
    PropertiesAccordionComponent,
    ItemsAccordionComponent,
    RolesCreatorComponent,
    RolesEditorComponent,
    ListRolesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    TableModule,
    CodeHighlighterModule,
    DialogModule,
    DropdownModule,
    EditorModule,
    FileUploadModule,
    InputTextareaModule,
    InputTextModule,
    LightboxModule,
    MenubarModule,
    MultiSelectModule,
    OverlayPanelModule,
    PasswordModule,
    SliderModule,
    TabViewModule,
    NgMultiSelectDropDownModule.forRoot(),
    ImageUploadModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [
    AppGlobals,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
