import { Component, OnInit } from '@angular/core';
import {Languages} from '../../../models/languages';
import {ClassificationItems} from '../../../models/classificationItems';
import {ActivatedRoute, Router} from '@angular/router';
import {LanguagesService} from '../../../services/languages.service';
import {ClassificationItemsService} from '../../../services/classificationItems.service';
import {AppGlobals} from '../../../app-globals';
import {Properties} from '../../../models/properties';

@Component({
  selector: 'app-classification-items-editor',
  templateUrl: './classification-items-editor.component.html',
  styleUrls: ['./classification-items-editor.component.css']
})
export class ClassificationItemsEditorComponent implements OnInit {
  languages: Languages[] = [];
  selectLanguage = [];
  classificationItem: ClassificationItems = new ClassificationItems();
  id: number;

  constructor(private activatedRoute: ActivatedRoute,
              private languagesServices: LanguagesService,
              private classificationItemsService: ClassificationItemsService,
              public appGlobals: AppGlobals,
              private router: Router) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.classificationItemsService.getById(this.id).subscribe((res: any) => {
      this.classificationItem = new Properties();
      this.selectLanguage  = [];
      Object.assign(this.classificationItem, res);
      this.selectLanguage.push(this.classificationItem.languages);
      this.getLanguages();
    });
  }

  onSubmit() {
    this.classificationItemsService.update(this.classificationItem).subscribe(
      res => {
        this.appGlobals.alertSuccess('Item editadp con éxito');
        this.router.navigate(['/classification-items']);
      },
      error => {
        this.appGlobals.alertError(error.error);
      }
    );
  }

  changeLanguage(selectedItems) {
    if (selectedItems[0]) {
      this.classificationItem.idLanguage = selectedItems[0].id;
    }
  }

  getLanguages() {
    this.languagesServices.get().subscribe((res: any) => {
      this.languages = [];
      Object.assign(this.languages, res.results);
    });
  }
}
