import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LanguagesService} from '../../../services/languages.service';
import {CountriesService} from '../../../services/countries.service';
import {CategoriesService} from '../../../services/categories.service';
import {UsersService} from '../../../services/users.service';
import {Languages} from '../../../models/languages';
import {Countries} from '../../../models/countries';
import {Categories} from '../../../models/categories';
import {Users} from '../../../models/users';

import {AppGlobals} from '../../../app-globals';



@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {
  languages: Languages[] = [];
  selectLanguage = [];
  countries: Countries[] = [];
  selectCountry = [];
  categories: Categories[] = [];
  selectCategory = [];
  category: Categories = new Categories();
  country: Countries = new Countries();
  user: Users = new Users();


  constructor(private activatedRoute: ActivatedRoute,
              private languagesServices: LanguagesService,
              private countriesService: CountriesService,
              private categoriesService: CategoriesService,
              private usersService: UsersService,
              public appGlobals: AppGlobals,
              private router: Router) {
  }

  ngOnInit() {
    this.getLanguages();
    this.getCountries();
    this.getCategories();
  }

  onSubmit() {
    this.usersService.create(this.user).subscribe(
      res => {
        this.appGlobals.alertSuccess('Usuario creado con éxito');
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
      this.country.id = selectedItems[0].id;
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
