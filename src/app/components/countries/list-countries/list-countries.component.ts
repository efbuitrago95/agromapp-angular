import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../../services/countries.service';
import { LanguagesService } from '../../../services/languages.service';
import {Countries} from '../../../models/countries';
import {AppGlobals} from '../../../app-globals';
import {Languages} from '../../../models/languages';

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.css']
})
export class ListCountriesComponent implements OnInit {
  countries: Countries[] = [];
  params: any = {};
  paginationData: any = {};
  languages: Languages[] = [];

  constructor(
    private languagesServices: LanguagesService,
    private countriesService: CountriesService,
    public appGlobals: AppGlobals
  ) {
  }

  getLanguages() {
    this.languagesServices.get().subscribe((res: any) => {
      this.languages = [];
      console.log(res.results);
      Object.assign(this.languages, res.results);
    });
  }

  changeLanguage(selectedItems) {
    this.params.page = 1;
    if (selectedItems[0]) {
      this.params.language = selectedItems[0].id;
    } else {
      delete this.params.language;
    }
    this.getCountries();
  }

  ngOnInit() {
    this.params.page = 1;
    this.getCountries();
    this.getLanguages();
  }
  changePage(page) {
    this.params.page = page;
    this.getCountries();
  }

  changeSearch(mensaje) {
    this.params.page = 1;
    this.params.search = mensaje;
    this.getCountries();
  }

  getCountries() {
    this.countriesService.get(this.params).subscribe((res: any) => {
      this.countries = [];
      this.paginationData = {};
      Object.assign(this.countries, res.results);
      console.log(this.countries)
      Object.assign(this.paginationData, res.paginationData);
    });
  }
}
