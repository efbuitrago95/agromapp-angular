import { Component, OnInit } from '@angular/core';
import {Languages} from '../../../models/languages';
import {ClassificationItems} from '../../../models/classificationItems';
import {ActivatedRoute, Router} from '@angular/router';
import {LanguagesService} from '../../../services/languages.service';
import {ClassificationItemsService} from '../../../services/classificationItems.service';
import {AppGlobals} from '../../../app-globals';

@Component({
  selector: 'app-classification-items-creator',
  templateUrl: './classification-items-creator.component.html',
  styleUrls: ['./classification-items-creator.component.css']
})
export class ClassificationItemsCreatorComponent implements OnInit {
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
    this.getLanguages();
  }

  onSubmit() {
    this.classificationItemsService.create(this.classificationItem).subscribe(
      res => {
        this.appGlobals.alertSuccess('Item creado con éxito');
        this.router.navigate(['/classification_items']);
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
