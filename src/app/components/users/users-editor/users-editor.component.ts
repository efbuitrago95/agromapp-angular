import { Component, OnInit } from '@angular/core';
import {Languages} from '../../../models/languages';
import {Countries} from '../../../models/countries';
import {Categories} from '../../../models/categories';
import {Users} from '../../../models/users';
import {ActivatedRoute, Router} from '@angular/router';
import {LanguagesService} from '../../../services/languages.service';
import {CountriesService} from '../../../services/countries.service';
import {CategoriesService} from '../../../services/categories.service';
import {UsersService} from '../../../services/users.service';
import {AppGlobals} from '../../../app-globals';
import {Properties} from '../../../models/properties';

@Component({
  selector: 'app-users-editor',
  templateUrl: './users-editor.component.html',
  styleUrls: ['./users-editor.component.css']
})
export class UsersEditorComponent implements OnInit {
  languages: Languages[] = [];
  selectLanguage = [];
  countries: Countries[] = [];
  selectCountry = [];
  categories: Categories[] = [];
  selectCategory = [];
  category: Categories = new Categories();
  country: Countries = new Countries();
  user: Users = new Users();
  id: number;


  constructor(private activatedRoute: ActivatedRoute,
              private languagesServices: LanguagesService,
              private countriesService: CountriesService,
              private categoriesService: CategoriesService,
              private usersService: UsersService,
              public appGlobals: AppGlobals,
              private router: Router) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.usersService.getById(this.id).subscribe((res: any) => {
      this.user = new Users();
      this.selectLanguage  = [];
      Object.assign(this.user, res);
      this.selectCountry.push(this.user.countries);
      this.getLanguages();
    });
    this.getLanguages();
    this.getCountries();
    this.getCategories();
  }

  onSubmit() {
    delete this.user.createdAt;
    this.usersService.update(this.user).subscribe(
      res => {
        this.appGlobals.alertSuccess('Usuario actualizado con éxito');
        this.router.navigate(['/users']);
      },
      error => {
        this.appGlobals.alertError(error.error);
      }
    );
  }

  changeLanguage(selectedItems) {
    if (selectedItems[0]) {
      this.user.idCountry = selectedItems[0].id;
    }
  }

  getLanguages() {
    this.languagesServices.get().subscribe((res: any) => {
      this.languages = [];
      Object.assign(this.languages, res.results);
    });
  }

  changeCountries(selectedItems) {
    if (selectedItems[0]) {
      this.user.idCountry = selectedItems[0].id;
    }
  }

  getCountries() {
    this.countriesService.get().subscribe((res: any) => {
      this.countries = [];
      Object.assign(this.countries, res.results);
    });
  }

  changeCategories(selectedItems) {
    if (selectedItems[0]) {
      this.category.id = selectedItems[0].id;
    }
  }

  getCategories() {
    this.categoriesService.get().subscribe((res: any) => {
      this.categories = [];
      Object.assign(this.categories, res.results);
    });
  }
}
