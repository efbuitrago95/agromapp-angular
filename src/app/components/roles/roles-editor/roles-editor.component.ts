import { Component, OnInit } from '@angular/core';
import {Roles} from '../../../models/roles';
import {RolesServices} from '../../../services/roles.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AppGlobals} from '../../../app-globals';

@Component({
  selector: 'app-roles-editor',
  templateUrl: './roles-editor.component.html',
  styleUrls: ['./roles-editor.component.css']
})
export class RolesEditorComponent implements OnInit {
  rol: Roles = new Roles();
  id: number
  constructor( private activatedRoute: ActivatedRoute,
               private rolesServices: RolesServices,
               public appGlobals: AppGlobals,
               private router: Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.rolesServices.getById(this.id).subscribe((res: any) => {
      Object.assign(this.rol, res);
      console.log('resultado', this.rol);
    });
  }

  onSubmit()  {
    this.rolesServices.update(this.rol).subscribe(
      res => {
        this.appGlobals.alertSuccess('Rol actualizado con éxito');
        this.router.navigate(['/roles']);
      },
      error => {
        console.log(error.error);
        this.appGlobals.alertError(error.error);
      }
    );
  }
}
