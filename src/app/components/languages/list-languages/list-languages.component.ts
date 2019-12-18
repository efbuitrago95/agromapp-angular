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
  paginationData: any =  {};
  params: any[];

  constructor(
    private languagesServices: LanguagesService
  ) {
  }

  ngOnInit() {
    this.params.push({ page: 1 });
    this.getLanguages(this.params);
    console.log(this.languages);
  }

  getLanguages(params: any[]) {
    this.languagesServices.getLanguages(params).subscribe((res: any) => {
      Object.assign(this.languages, res.results);
      Object.assign(this.paginationData, res.paginationData);
    });
  }
}
