import { Component, OnInit } from '@angular/core';
import {Languages} from '../../../models/languages';
import {Properties} from '../../../models/properties';
import {ActivatedRoute, Router} from '@angular/router';
import {LanguagesService} from '../../../services/languages.service';
import {AppGlobals} from '../../../app-globals';
import {Classifications} from '../../../models/classifications';
import {ClassificationService} from '../../../services/classification.service';

@Component({
  selector: 'app-classification-editor',
  templateUrl: './classification-editor.component.html',
  styleUrls: ['./classification-editor.component.css']
})
export class ClassificationEditorComponent implements OnInit {
  languages: Languages[] = [];
  selectLanguage = [];
  classification: Classifications = new Classifications();
  id: number;
  constructor(private activatedRoute: ActivatedRoute,
              private languagesServices: LanguagesService,
              private classificationService: ClassificationService,
              public appGlobals: AppGlobals,
              private router: Router) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.classificationService.getById(this.id).subscribe((res: any) => {
      this.classification = new Properties();
      this.selectLanguage  = [];
      Object.assign(this.classification, res);
      this.selectLanguage.push(this.classification.languages);
      this.getLanguages();
    });
  }

  onSubmit() {
    this.classificationService.create(this.classification).subscribe(
      res => {
        this.appGlobals.alertSuccess('Clasificación Actualizada con éxito');
        this.router.navigate(['/classifications']);
      },
      error => {
        this.appGlobals.alertError(error.error);
      }
    );
  }

  changeLanguage(selectedItems) {
    if (selectedItems[0]) {
      this.classification.idLanguage = selectedItems[0].id;
    }
  }

  getLanguages() {
    this.languagesServices.get().subscribe((res: any) => {
      this.languages = [];
      Object.assign(this.languages, res.results);
    });
  }

}
