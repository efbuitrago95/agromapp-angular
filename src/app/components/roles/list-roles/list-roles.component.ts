import { Component, OnInit } from '@angular/core';
import {Roles} from '../../../models/roles';
import {RolesServices} from '../../../services/roles.service';
import {AppGlobals} from '../../../app-globals';


@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.component.html',
  styleUrls: ['./list-roles.component.css']
})
export class ListRolesComponent implements OnInit {

  roles: Roles[] = [];
  params: any = {};
  paginationData: any = {};

  constructor(
    private rolesServices: RolesServices,
    public appGlobals: AppGlobals
  ) {
  }

  ngOnInit() {
    this.params.page = 1;
    this.getRoles();
  }

  changePage(page) {
    this.params.page = page;
    this.getRoles();
  }

  changeSearch(mensaje) {
    this.params.page = 1;
    this.params.search = mensaje;
    this.getRoles();
  }

  getRoles() {
    this.rolesServices.get(this.params).subscribe((res: any) => {
      this.roles = [];
      this.paginationData = {};
      Object.assign(this.roles, res.results);
      Object.assign(this.paginationData, res.paginationData);
    });
  }
}
