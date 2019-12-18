import {Component, OnInit} from '@angular/core';
import {Languages} from '../../../models/languages';
import {AppGlobals} from '../../../app-globals';
import {LanguagesService} from '../../../services/languages.service';

@Component({
  selector: 'app-list-languages',
  templateUrl: './list-languages.component.html',
  styleUrls: ['./list-languages.component.css']
})
export class ListLanguagesComponent implements OnInit {
  language: Languages = new Languages();
  languages: Languages[] = [];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor(
    private languagesServices: LanguagesService,
    public appGlobals: AppGlobals
  ) {
  }

  ngOnInit() {
    this.getLanguages();
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  onSubmit() {
    if (this.language.id) {
      this.languagesServices.updateLanguage(this.language).subscribe(
        res => {
          document.getElementById('closeModal').click();
          this.getLanguages();
          this.appGlobals.alertSuccess('Idioma actualizado con exito');
          this.language = new Languages();
        },
        error => {
          console.log(error.error);
          this.appGlobals.alertError(error.error);
        }
      );
    } else {
      this.languagesServices.createLanguage(this.language).subscribe(
        res => {
          document.getElementById('closeModal').click();
          this.getLanguages();
          this.appGlobals.alertSuccess('Idioma creado con exito');
          this.language = new Languages();
        },
        error => {
          console.log(error.error);
          this.appGlobals.alertError(error.error);
        }
      );
    }
  }

  getLanguages() {
    this.languagesServices.getLanguages().subscribe(res => {
      Object.assign(this.languages, res);
    });
  }

  openModalEditLanguage(language: Languages) {
    this.language = language;
    document.getElementById('btnOpenModal').click();
  }

  openModalCreateLanguage() {
    this.language = new Languages();
    document.getElementById('btnOpenModal').click();
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }
}





