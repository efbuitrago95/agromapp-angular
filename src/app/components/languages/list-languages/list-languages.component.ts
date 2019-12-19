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
  params: any = {};
  paginationData: any = {};

  constructor(
    private languagesServices: LanguagesService,
    public appGlobals: AppGlobals
  ) {
  }

  ngOnInit() {
    this.params.page = 1;
    this.getLanguages();
  }

  changePage(page) {
    this.params.page = page;
    this.getLanguages();
  }

  changeSearch(mensaje) {
    this.params.page = 1;
    this.params.search = mensaje;
    this.getLanguages();
  }

  getLanguages() {
    this.languagesServices.getLanguages(this.params).subscribe((res: any) => {
      this.languages = [];
      this.paginationData = {};
      Object.assign(this.languages, res.results);
      Object.assign(this.paginationData, res.paginationData);
    });
  }

}
