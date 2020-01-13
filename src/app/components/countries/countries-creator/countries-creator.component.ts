import {Component, OnInit} from '@angular/core';
import {Languages} from '../../../models/languages';
import {LanguagesService} from '../../../services/languages.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AppGlobals} from '../../../app-globals';
import {Countries} from '../../../models/countries';
import * as firebase from 'firebase';
import {CountriesService} from '../../../services/countries.service';

@Component({
  selector: 'app-countries-creator',
  templateUrl: './countries-creator.component.html',
  styleUrls: ['./countries-creator.component.css']
})
export class CountriesCreatorComponent implements OnInit {
  continents = [
    {id: 1, name: 'América'},
    {id: 2, name: 'Europa'},
    {id: 3, name: 'Asia'},
    {id: 4, name: 'África'},
    {id: 5, name: 'Oceanía'}
  ];
  selectedItems = [];
  dropdownSettings = {};
  languages: Languages[] = [];
  selectLanguage = [];
  country: Countries = new Countries();
  image = '';

  constructor(private languagesServices: LanguagesService,
              private countriesService: CountriesService,
              public appGlobals: AppGlobals,
              private router: Router
  ) {
  }

  ngOnInit() {
    this.getLanguages();
  }

  changeLanguage(selectedItems) {
    if (selectedItems[0]) {
      this.country.idLanguage = selectedItems[0].id;
    }
  }

  changeImage(image) {
    this.image = image;
  }

  changeContinent(selectedItems) {
    if (selectedItems[0]) {
      this.country.idContinent = selectedItems[0].id;
    }
  }

  getLanguages() {
    this.languagesServices.get().subscribe((res: any) => {
      this.languages = [];
      console.log(res.results);
      Object.assign(this.languages, res.results);
    });
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  async onSubmit() {
    const id = Math.random().toString(36).substring(2);
    try {
      const ref = firebase.storage().ref(`flags/${id}`);
      await new Promise((resolve, reject) => {
        ref.putString(this.image, 'data_url').then(() => {
          ref.getDownloadURL().then((url) => {
            this.country.image = url;
            console.log(this.country);
            this.countriesService.create(this.country).subscribe(
              res => {
                this.appGlobals.alertSuccess('País creado con exito');
                this.router.navigate(['/countries']);
              },
              error => {
                console.log(error.error);
                this.appGlobals.alertError(error.error);
              }
            );
            resolve('OK');
          }).catch((error) => {
            console.log(error);
            reject(error);
          });
        });
      });
    } catch (e) {
      console.log(e);
    }
    // console.log(this.country);
  }

}
