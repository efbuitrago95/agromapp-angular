import { Component, OnInit } from '@angular/core';
import {Classifications} from '../../../models/classifications';
import {Languages} from '../../../models/languages';
import {Moons} from '../../../models/moons';
import {ActivatedRoute, Router} from '@angular/router';
import {LanguagesService} from '../../../services/languages.service';
import {ClassificationService} from '../../../services/classification.service';
import {MoonsService} from '../../../services/moons.service';
import {CropsService} from '../../../services/crops.service';
import {AppGlobals} from '../../../app-globals';
import * as firebase from 'firebase';


@Component({
  selector: 'app-moon-create',
  templateUrl: './moon-create.component.html',
  styleUrls: ['./moon-create.component.css']
})
export class MoonCreateComponent implements OnInit {
  params: any =  {};
  classifications: Classifications[] = [];
  selectedClassification = [];
  languages: Languages[] = [];
  selectLanguage = [];
  moon: Moons = new Moons();
  image = '';


  constructor(private activatedRoute: ActivatedRoute,
              private languagesService: LanguagesService,
              private moonsService: MoonsService,
              private classificationService: ClassificationService,
              private cropsService: CropsService,
              public appGlobals: AppGlobals,
              private router: Router) { }

  ngOnInit() {
    this.getLanguages();
  }

  onSubmit() {
    this.moonsService.create(this.moon).subscribe(
      res => {
        this.appGlobals.alertSuccess('Luna creada con éxito');
        this.router.navigate(['/moons']);
      },
      error => {
        this.appGlobals.alertError(error.error);
      }
    );
  }

  changeLanguage(selectedItems) {
    if (selectedItems[0]) {
      this.classifications = [];
      this.moon.idLanguage = selectedItems[0].id;
      this.params.language = this.moon.idLanguage;
      this.classificationService.get(this.params).subscribe((res: any) => {
        this.classifications = res.results;
      });
    }
  }

  changeClassifications(selectedItems) {
    if (selectedItems[0]) {
      this.moon.idClassification = selectedItems[0].id;
    }
  }

  changeImage(image) {
    this.image = image;
  }

  getLanguages() {
    this.languagesService.get().subscribe((res: any) => {
      this.languages = [];
      Object.assign(this.languages, res.results);
    });
  }
}
