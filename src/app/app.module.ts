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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from 'ng-sidebar';
import { NavbarVerticalComponent } from './components/navbar-vertical/navbar-vertical.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppGlobals } from './app-globals';
import { ListLanguagesComponent } from './components/languages/list-languages/list-languages.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { LanguagesEditorComponent } from './components/languages/languages-editor/languages-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarVerticalComponent,
    NavbarComponent,
    ListLanguagesComponent,
    PropertiesComponent,
    DynamicTableComponent,
    LanguagesEditorComponent,
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
    TabViewModule
  ],
  providers: [
    AppGlobals,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
