import { Component, OnInit } from '@angular/core';
import {Classifications} from '../../../models/classifications';
import {Languages} from '../../../models/languages';
import {ClassificationService} from '../../../services/classification.service';
import {LanguagesService} from '../../../services/languages.service';

@Component({
  selector: 'app-classification-list',
  templateUrl: './classification-list.component.html',
  styleUrls: ['./classification-list.component.css']
})
export class ClassificationListComponent implements OnInit {
  classifications: Classifications[] = [];
  languages: Languages[] = [];
  params: any = {};
  paginationData: any = {};

  constructor(
    private classificationService: ClassificationService,
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
    this.classificationService.get(this.params).subscribe((res: any) => {
      this.classifications = [];
      this.paginationData = {};
      Object.assign(this.classifications, res.results);
      Object.assign(this.paginationData, res.paginationData);
    });
  }
}
