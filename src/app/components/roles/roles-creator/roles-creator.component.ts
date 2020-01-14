import { Component, OnInit } from '@angular/core';
import {Roles} from '../../../models/roles';
import {RolesServices} from '../../../services/roles.service';
import {AppGlobals} from '../../../app-globals';
import {Router} from '@angular/router';

@Component({
  selector: 'app-roles-creator',
  templateUrl: './roles-creator.component.html',
  styleUrls: ['./roles-creator.component.css']
})
export class RolesCreatorComponent implements OnInit {
  roles: Roles = new Roles();
  constructor(
    private rolesServices: RolesServices,
    public appGlobals: AppGlobals,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.rolesServices.create(this.roles).subscribe(
      res => {
        this.appGlobals.alertSuccess('Rol creado con exito');
        this.router.navigate(['/roles']);
      },
      error => {
        this.appGlobals.alertError(error.error);
      }
    );
  }

}
