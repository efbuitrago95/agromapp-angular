import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppGlobals} from '../../../app-globals';
import {CountriesService} from '../../../services/countries.service';
import {Countries} from '../../../models/countries';
import {LanguagesService} from '../../../services/languages.service';
import {Languages} from '../../../models/languages';

@Component({
  selector: 'app-countries-editor',
  templateUrl: './countries-editor.component.html',
  styleUrls: ['./countries-editor.component.css']
})
export class CountriesEditorComponent implements OnInit {
  continents = [
    {id: 1, name: 'América'},
    {id: 2, name: 'Europa'},
    {id: 3, name: 'Asia'},
    {id: 4, name: 'África'},
    {id: 5, name: 'Oceanía'}
  ];
  languages: Languages[] = [];
  selectLanguage = [];
  selectContinent = [];
  country: Countries = new Countries();
  id: number;

  constructor(private activatedRoute: ActivatedRoute,
              private countriesService: CountriesService,
              public appGlobals: AppGlobals,
              private router: Router,
              private languagesService: LanguagesService) {
  }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.params.id;
    this.countriesService.getById(this.id).subscribe((res: any) => {
      Object.assign(this.country, res);
      this.selectLanguage  = [];
      this.selectLanguage.push(this.country.languages);
      this.selectContinent = [];
      this.continents.forEach(continent => {
        if (continent.id === Number(this.country.idContinent)) {
          this.selectContinent.push({id: continent.id, name: continent.name});
        }
      });
      this.getLanguages();
    });
  }

  getLanguages() {
    this.languagesService.get().subscribe((res: any) => {
      this.languages = [];
      Object.assign(this.languages, res.results);
    });
  }

  onSubmit()  {
    this.countriesService.update(this.country).subscribe(
      res => {
        this.appGlobals.alertSuccess('País actualizado con éxito');
        this.router.navigate(['/countries']);
      },
      error => {
        this.appGlobals.alertError(error.error);
      }
    );
  }

  changeLanguage(selectedItems) {
    if (selectedItems[0]) {
      this.country.idLanguage = selectedItems[0].id;
    }
  }

  changeContinent(selectedItems) {
    if (selectedItems[0]) {
      this.country.idContinent = selectedItems[0].id;
    }
  }
}
