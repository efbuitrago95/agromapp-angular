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
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from 'ng-sidebar';
import { NavbarVerticalComponent } from './components/navbar-vertical/navbar-vertical.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppGlobals } from './app-globals';
import { ListLanguagesComponent } from './components/languages/list-languages/list-languages.component';
import { PropertiesComponent } from './components/properties/properties-list/properties.component';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { LanguagesEditorComponent } from './components/languages/languages-editor/languages-editor.component';
import { LanguagesCreateComponent } from './components/languages/languages-create/languages-create.component';
import { PropertiesCreateComponent } from './components/properties/properties-create/properties-create.component';
import { PropertiesEditorComponent } from './components/properties/properties-editor/properties-editor.component';
import { ListItemsComponent } from './components/items/list-items/list-items.component';
import { ItemsCreateComponent } from './components/items/items-create/items-create.component';
import { ItemsEditorComponent } from './components/items/items-editor/items-editor.component';
import { CountriesCreatorComponent } from './components/countries/countries-creator/countries-creator.component';
import { CountriesEditorComponent } from './components/countries/countries-editor/countries-editor.component';
import { PaginatorComponent } from './components/shared/paginator/paginator.component';






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
    CountriesCreatorComponent,
    CountriesEditorComponent,
    PaginatorComponent
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
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
    AppGlobals,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
