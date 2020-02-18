import { Component, OnInit } from '@angular/core';
import {ClassificationItems} from '../../../models/classificationItems';
import {Languages} from '../../../models/languages';
import {LanguagesService} from '../../../services/languages.service';
import {ClassificationItemsService} from '../../../services/classificationItems.service';

@Component({
  selector: 'app-classification-items-list',
  templateUrl: './classification-items-list.component.html',
  styleUrls: ['./classification-items-list.component.css']
})
export class ClassificationItemsListComponent implements OnInit {
  classificationItems: ClassificationItems[] = [];
  languages: Languages[] = [];
  params: any = {};
  paginationData: any = {};
  constructor(
    private classificationItemsService: ClassificationItemsService,
    private languagesServices: LanguagesService
  ) {
  }

  ngOnInit() {
    this.params.page = 1;
    this.getLanguages();
    this.getProperties();
  }

  getLanguages() {
    this.languagesServices.get().subscribe((res: any) => {
      this.languages = [];
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
    this.classificationItemsService.get(this.params).subscribe((res: any) => {
      this.classificationItems = [];
      this.paginationData = {};
      Object.assign(this.classificationItems, res.results);
      Object.assign(this.paginationData, res.paginationData);
      console.log('classification_items', this.classificationItems);
    });
  }
}
