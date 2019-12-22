import {Component, OnInit} from '@angular/core';
import {Properties} from '../../../models/properties';
import {PropertiesService} from '../../../services/properties.service';
import {LanguagesService} from '../../../services/languages.service';
import {AppGlobals} from '../../../app-globals';
import {Languages} from 'src/app/models/languages';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  property: Properties = new Properties();
  properties: Properties[] = [];
  languages: Languages[] = [];
  params: any = {};
  paginationData: any = {};

  constructor(
    private propertiesServices: PropertiesService,
    private languagesServices: LanguagesService
  ) {
  }

  ngOnInit() {
    this.getLanguages();
    this.getProperties();
  }

  getLanguages() {
    this.languagesServices.get().subscribe((res: any) => {
      this.languages = [];
      console.log(res.results);
      Object.assign(this.languages, res.results);
    });
  }

  changePage(page) {
    this.params.page = page;
    this.getProperties();
  }

  changeSearch(mensaje) {
    this.params.page = 1;
    this.params.search = mensaje;
    this.getProperties();
  }

  changeLanguage(selectedItems) {
    this.params.page = 1;
    if (selectedItems[0]) {
      this.params.language = selectedItems[0].id;
    } else {
      delete this.params.language;
    }
    this.getProperties();
  }

  getProperties() {
    this.propertiesServices.get(this.params).subscribe((res: any) => {
      this.properties = [];
      this.paginationData = {};
      Object.assign(this.properties, res.results);
      Object.assign(this.paginationData, res.paginationData);
    });
  }
}
