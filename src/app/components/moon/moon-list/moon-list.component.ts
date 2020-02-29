import { Component, OnInit } from '@angular/core';
import {Moons} from '../../../models/moons';
import {Languages} from '../../../models/languages';
import {MoonsService} from '../../../services/moons.service';
import {LanguagesService} from '../../../services/languages.service';

@Component({
  selector: 'app-moon-list',
  templateUrl: './moon-list.component.html',
  styleUrls: ['./moon-list.component.css']
})
export class MoonListComponent implements OnInit {
  moons: Moons[] = [];
  languages: Languages[] = [];
  params: any = {};
  paginationData: any = {};

  constructor(
    private moonsService: MoonsService,
    private languagesServices: LanguagesService
  ) {
  }

  ngOnInit() {
    this.params.page = 1;
    this.getLanguages();
    this.getMoons();
  }

  getLanguages() {
    this.languagesServices.get().subscribe((res: any) => {
      this.languages = [];
      Object.assign(this.languages, res.results);
    });
  }

  changePage(page) {
    this.params.page = page;
    this.getMoons();
  }

  changeSearch(mensaje) {
    this.params.page = 1;
    this.params.search = mensaje;
    this.getMoons();
  }

  changeLanguage(selectedItems) {
    this.params.page = 1;
    if (selectedItems[0]) {
      this.params.language = selectedItems[0].id;
    } else {
      delete this.params.language;
    }
    this.getMoons();
  }

  getMoons() {
    this.moonsService.get(this.params).subscribe((res: any) => {
      this.moons = [];
      this.paginationData = {};
      Object.assign(this.moons, res.results);
      Object.assign(this.paginationData, res.paginationData);
      console.log('idioma de la luna', this.moons);
    });
  }
}
