import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LanguagesService} from '../../../services/languages.service';
import {AppGlobals} from '../../../app-globals';
import {CategoriesService} from '../../../services/categories.service';
import {Languages} from '../../../models/languages';

@Component({
  selector: 'app-categories-editor',
  templateUrl: './categories-editor.component.html',
  styleUrls: ['./categories-editor.component.css']
})
export class CategoriesEditorComponent implements OnInit {

  category: Languages = new Languages();
  id: number
  constructor( private activatedRoute: ActivatedRoute,
               private categoriesService: CategoriesService,
               public appGlobals: AppGlobals,
               private router: Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.categoriesService.getById(this.id).subscribe((res: any) => {
      Object.assign(this.category, res);
    });
  }

  onSubmit()  {
    this.categoriesService.update(this.category).subscribe(
      res => {
        this.appGlobals.alertSuccess('Categoría actualizada con éxito');
        this.router.navigate(['/categories']);
      },
      error => {
        this.appGlobals.alertError(error.error);
      }
    );
  }
}
