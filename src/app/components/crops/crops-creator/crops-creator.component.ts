import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Crops} from '../../../models/crops';
import {Languages} from '../../../models/languages';
import {Properties} from '../../../models/properties';
import {LanguagesService} from '../../../services/languages.service';
import {PropertiesService} from '../../../services/properties.service';
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
  params: any =  {};
  properties: Properties[] = [];
  selectProperty = [];
  propertiesAccordion: Properties[] = [];
  Classifications = [
    {id: 1, name: 'Aromatica de flor y fruto'},
    {id: 2, name: 'Aromaticas medicinales'},
    {id: 3, name: 'Aromatica de hoja'},
    {id: 4, name: 'Hortaliza de hoja'},
    {id: 5, name: 'Hortaliza de flor y fruto'},
    {id: 6, name: 'Hortalizas de bulbo'},
    {id: 7, name: 'Frutales'},
    {id: 8, name: 'Granos secos'},
    {id: 9, name: 'Leguminosas'},
    {id: 10, name: 'Ornamentales'},
    {id: 11, name: 'Cereales'},
    {id: 12, name: 'Gramineas'},
    {id: 13, name: 'Forestales'},
    {id: 14, name: 'Hongos'},
    {id: 15, name: 'Algas'}
  ];
  selectedClassification = [];
  languages: Languages[] = [];
  selectLanguage = [];
  crop: Crops = new Crops();
  image = '';


  constructor(private activatedRoute: ActivatedRoute,
              private languagesService: LanguagesService,
              private propertiesService: PropertiesService,
              private cropsService: CropsService,
              public appGlobals: AppGlobals,
              private router: Router) { }

  ngOnInit() {
    this.getLanguages();
  }

  async onSubmit() {
    console.log('es este', this.crop.idlanguage);
    return ;
    const id = Math.random().toString(36).substring(2);
    try {
      const ref = firebase.storage().ref(`flags/${id}`);
      await new Promise((resolve, reject) => {
        ref.putString(this.image, 'data_url').then(() => {
          ref.getDownloadURL().then((url) => {
            this.crop.picture = url;
            this.cropsService.create(this.crop).subscribe(
              res => {
                this.appGlobals.alertSuccess('País creado con éxito');
                this.router.navigate(['/countries']);
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
      this.crop.idlanguage = selectedItems[0].id;
      this.params.language = this.crop.idlanguage;
      this.propertiesService.get(this.params).subscribe((res: any) => {
      this.properties = res.results;
      console.log(this.properties);
      });
    }
  }

  changeClassifications(selectedItems) {
    if (selectedItems[0]) {
      this.crop.classification = selectedItems;
    }
  }

  changeProperties(selectedItems) {
    if (selectedItems[0]) {
      this.propertiesAccordion = selectedItems;
      console.log('accordeon', this.propertiesAccordion);
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
