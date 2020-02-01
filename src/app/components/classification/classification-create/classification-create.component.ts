import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LanguagesService} from '../../../services/languages.service';
import {ClassificationService} from '../../../services/classification.service';
import {AppGlobals} from '../../../app-globals';
import {Languages} from '../../../models/languages';
import {Classifications} from '../../../models/classifications';

@Component({
  selector: 'app-classification-create',
  templateUrl: './classification-create.component.html',
  styleUrls: ['./classification-create.component.css']
})
export class ClassificationCreateComponent implements OnInit {
  languages: Languages[] = [];
  selectLanguage = [];
  classifications: Classifications = new Classifications();
  id: number;
  constructor(private activatedRoute: ActivatedRoute,
              private languagesServices: LanguagesService,
              private classificationService: ClassificationService,
              public appGlobals: AppGlobals,
              private router: Router) {
  }

  ngOnInit() {
    this.getLanguages();
  }

  onSubmit() {
    this.classificationService.create(this.classifications).subscribe(
      res => {
        this.appGlobals.alertSuccess('Clasificación creada con éxito');
        this.router.navigate(['/classifications']);
      },
      error => {
        this.appGlobals.alertError(error.error);
      }
    );
  }

  changeLanguage(selectedItems) {
    if (selectedItems[0]) {
      this.classifications.idLanguage = selectedItems[0].id;
    }
  }

  getLanguages() {
    this.languagesServices.get().subscribe((res: any) => {
      this.languages = [];
      Object.assign(this.languages, res.results);
    });
  }

}
