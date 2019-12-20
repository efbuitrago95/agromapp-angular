import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../../services/categories.service';
import {AppGlobals} from '../../../app-globals';
import {Categories} from '../../../models/categories';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {
  categories: Categories[] = [];
  params: any = {};
  paginationData: any = {};

  constructor(
    private categoriesService: CategoriesService,
    public appGlobals: AppGlobals
  ) {
  }

  ngOnInit() {
    this.params.page = 1;
    this.getCategories();
  }

  changePage(page) {
    this.params.page = page;
    this.getCategories();
  }

  changeSearch(mensaje) {
    this.params.page = 1;
    this.params.search = mensaje;
    this.getCategories();
  }

  getCategories() {
    this.categoriesService.get(this.params).subscribe((res: any) => {
      this.categories = [];
      this.paginationData = {};
      Object.assign(this.categories, res.results);
      Object.assign(this.paginationData, res.paginationData);
    });
  }
}
