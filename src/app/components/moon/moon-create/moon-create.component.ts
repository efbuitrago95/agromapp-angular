import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppGlobals} from '../../../app-globals';
import * as firebase from 'firebase';
import {Moons} from '../../../models/moons';
import {Languages} from '../../../models/languages';
import {Classifications} from '../../../models/classifications';
import {TypeMoons} from '../../../models/typeMoons';
import {MoonsService} from '../../../services/moons.service';
import {LanguagesService} from '../../../services/languages.service';
import {ClassificationService} from '../../../services/classification.service';
import {TypeMoonsService} from '../../../services/typeMoons.service';



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
  moons: TypeMoons[] = [];
  selectMoon = [];
  moon: Moons = new Moons();


  constructor(private activatedRoute: ActivatedRoute,
              private languagesService: LanguagesService,
              private moonsService: MoonsService,
              private classificationService: ClassificationService,
              private typeMoonsService: TypeMoonsService,
              public appGlobals: AppGlobals,
              private router: Router) { }

  ngOnInit() {
    this.getLanguages();
    this.getTypeMoons();
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

  changeTypeMoons(selectedItems) {
    if (selectedItems[0]) {
      this.moon.idTypeMoon = selectedItems[0].id;
      console.log(selectedItems);
    }
  }

  getLanguages() {
    this.languagesService.get().subscribe((res: any) => {
      this.languages = [];
      Object.assign(this.languages, res.results);
    });
  }

  getTypeMoons() {
    this.typeMoonsService.get().subscribe((res: any) => {
      this.moons = [];
      Object.assign(this.moons, res.results);
    });
  }
}
