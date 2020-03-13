import {Component, Input, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Crops} from '../../../models/crops';
import {Languages} from '../../../models/languages';
import {Properties} from '../../../models/properties';
import {Classifications} from '../../../models/classifications';
import {LanguagesService} from '../../../services/languages.service';
import {PropertiesService} from '../../../services/properties.service';
import {ClassificationService} from '../../../services/classification.service';
import {CropsService} from '../../../services/crops.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AppGlobals} from '../../../app-globals';
import * as firebase from 'firebase';

@Component({
  selector: 'app-crops-creator',
  templateUrl: './crops-creator.component.html',
  styleUrls: ['./crops-creator.component.css']
})
export class CropsCreatorComponent implements OnInit {
  @Input() forCropsItems: Crops = new Crops();
  params: any =  {};
  properties: Properties[] = [];
  selectProperty = [];
  propertiesAccordion: Properties[] = [];
  classifications: Classifications[] = [];
  selectedClassification = [];
  languages: Languages[] = [];
  selectLanguage = [];
  crop: Crops = new Crops();
  cropRes: Crops = new Crops();
  image = '';


  constructor(private activatedRoute: ActivatedRoute,
              private languagesService: LanguagesService,
              private propertiesService: PropertiesService,
              private classificationService: ClassificationService,
              private cropsService: CropsService,
              public appGlobals: AppGlobals,
              private router: Router) { }

  ngOnInit() {
    this.getLanguages();
  }

  async onSubmit() {
    const id = Math.random().toString(36).substring(2);
    try {
      const ref = firebase.storage().ref(`flags/${id}`);
      await new Promise((resolve, reject) => {
        ref.putString(this.image, 'data_url').then(() => {
          ref.getDownloadURL().then((url) => {
            this.crop.picture = url;
            this.cropsService.create(this.crop).subscribe(
              res => {
                this.appGlobals.alertSuccess('Cultivo creado con éxito');
                Object.assign(this.cropRes, res);
                this.forCropsItems = this.cropRes;
              },
              error => {
                this.appGlobals.alertError(error.error);
              }
            );
            resolve('OK');
          }).catch((error) => {
            reject(error);
          });
        });
      });
    } catch (e) {
      console.log(e);
    }
  }

  changeLanguage(selectedItems) {
    if (selectedItems[0]) {
      this.properties = [];
      this.classifications = [];
      this.crop.idlanguage = selectedItems[0].id;
      this.params.language = this.crop.idlanguage;
      this.propertiesService.get(this.params).subscribe((res: any) => {
      this.properties = res.results;
      });
      this.classificationService.get(this.params).subscribe((res: any) => {
        this.classifications = res.results;
      });
    }
  }

  changeClassifications(selectedItems) {
    if (selectedItems[0]) {
      this.crop.idClassification = selectedItems[0].id;
    }
  }

  changeProperties(selectedItems) {
    if (selectedItems[0]) {
      this.propertiesAccordion = selectedItems;
      console.log('accordeon', this.propertiesAccordion);
    } else{
      this.propertiesAccordion = [];
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
