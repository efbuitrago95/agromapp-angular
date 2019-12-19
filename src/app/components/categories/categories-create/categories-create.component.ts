import { Component, OnInit } from '@angular/core';
import {Categories} from '../../../models/categories';
import {LanguagesService} from '../../../services/languages.service';
import {AppGlobals} from '../../../app-globals';
import {Router} from '@angular/router';
import {CategoriesService} from '../../../services/categories.service';

@Component({
  selector: 'app-categories-creator',
  templateUrl: './categories-create.component.html',
  styleUrls: ['./categories-create.component.css']
})
export class CategoriesCreateComponent implements OnInit {

  category: Categories = new Categories();
  constructor(
    private categoriesService: CategoriesService,
    public appGlobals: AppGlobals,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.categoriesService.create(this.category).subscribe(
      res => {
        this.appGlobals.alertSuccess('Categoría creada con exito');
        this.router.navigate(['/categories']);
      },
      error => {
        console.log(error.error);
        this.appGlobals.alertError(error.error);
      }
    );
  }
}
