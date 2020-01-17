import { Component, OnInit } from '@angular/core';
import {Crops} from '../../../models/crops';
import {Languages} from '../../../models/languages';
import {CropsService} from '../../../services/crops.service';
import {LanguagesService} from '../../../services/languages.service';

@Component({
  selector: 'app-list-crops',
  templateUrl: './list-crops.component.html',
  styleUrls: ['./list-crops.component.css']
})
export class ListCropsComponent implements OnInit {
  crop: Crops = new Crops();
  crops: Crops[] = [];
  languages: Languages[] = [];
  params: any = {};
  paginationData: any = {};

  constructor(
    private cropsService: CropsService,
    private languagesServices: LanguagesService
  ) {
  }

  ngOnInit() {
    this.params.page = 1;
    this.getLanguages();
    this.getCrops();
  }

  getLanguages() {
    this.languagesServices.get().subscribe((res: any) => {
      this.languages = [];
      Object.assign(this.languages, res.results);
    });
  }

  changePage(page) {
    this.params.page = page;
    this.getCrops();
  }

  changeSearch(mensaje) {
    this.params.page = 1;
    this.params.search = mensaje;
    this.getCrops();
  }

  changeLanguage(selectedItems) {
    this.params.page = 1;
    if (selectedItems[0]) {
      this.params.language = selectedItems[0].id;
    } else {
      delete this.params.language;
    }
    this.getCrops();
  }

  getCrops() {
    this.cropsService.get(this.params).subscribe((res: any) => {
      this.crops = [];
      this.paginationData = {};
      Object.assign(this.crops, res.results);
      Object.assign(this.paginationData, res.paginationData);
    });
  }
}
