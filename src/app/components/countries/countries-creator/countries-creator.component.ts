import { Component, OnInit } from '@angular/core';
import {Languages} from '../../../models/languages';
import {LanguagesService} from '../../../services/languages.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AppGlobals} from '../../../app-globals';
import {Countries} from '../../../models/countries';

@Component({
  selector: 'app-countries-creator',
  templateUrl: './countries-creator.component.html',
  styleUrls: ['./countries-creator.component.css']
})
export class CountriesCreatorComponent implements OnInit {
  continents = ['América', 'Europa', 'Asia', 'África', 'Oceanía'];
  selectedItems = [];
  dropdownSettings = {};
  languages: Languages[] = [];
  selectLanguage = [];
  Country: Countries = new Countries();

  constructor(private languagesServices: LanguagesService) { }

  ngOnInit() {
    this.getLanguages();
  }

  changeLanguage(selectedItems) {
    if (selectedItems[0]) {
      this.Country.idLanguage = selectedItems[0].id;
    }
  }

  changeContinent(selectedItems) {
    if (selectedItems[0]) {
      this.continents = selectedItems[0];
    }
  }

  getLanguages() {
    this.languagesServices.get().subscribe((res: any) => {
      this.languages = [];
      console.log(res.results);
      Object.assign(this.languages, res.results);
    });
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

}
