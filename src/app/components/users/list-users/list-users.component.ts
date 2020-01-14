import { Component, OnInit } from '@angular/core';
import {Languages} from '../../../models/languages';
import {Users} from '../../../models/users';
import {UsersService} from '../../../services/users.service';
import {LanguagesService} from '../../../services/languages.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  user: Users = new Users();
  users: Users[] = [];
  languages: Languages[] = [];
  params: any = {};
  paginationData: any = {};

  constructor(
    private usersService: UsersService,
    private languagesServices: LanguagesService
  ) {
  }

  ngOnInit() {
    this.params.page = 1;
    this.getLanguages();
    this.getUsers();
  }

  getLanguages() {
    this.languagesServices.get().subscribe((res: any) => {
      this.languages = [];
      Object.assign(this.languages, res.results);
    });
  }

  changePage(page) {
    this.params.page = page;
    this.getUsers();
  }

  changeSearch(mensaje) {
    this.params.page = 1;
    this.params.search = mensaje;
    this.getUsers();
  }

  changeLanguage(selectedItems) {
    this.params.page = 1;
    if (selectedItems[0]) {
      this.params.language = selectedItems[0].id;
    } else {
      delete this.params.language;
    }
    this.getUsers();
  }

  getUsers() {
    this.usersService.get(this.params).subscribe((res: any) => {
      this.users = [];
      this.paginationData = {};
      Object.assign(this.users, res.results);
      Object.assign(this.paginationData, res.paginationData);
    });
  }
}
