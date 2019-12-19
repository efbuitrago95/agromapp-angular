import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../../../services/languages.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Languages} from '../../../models/languages';
import {AppGlobals} from '../../../app-globals';
@Component({
  selector: 'app-languages-editor',
  templateUrl: './languages-editor.component.html',
  styleUrls: ['./languages-editor.component.css']
})
export class LanguagesEditorComponent implements OnInit {

  language: Languages = new Languages();
  id: number
  constructor( private activatedRoute: ActivatedRoute,
               private languagesServices: LanguagesService,
               public appGlobals: AppGlobals,
               private router: Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.languagesServices.getLanguageById(this.id).subscribe((res: any) => {
      Object.assign(this.language, res);
    });
  }

  onSubmit()  {
    this.languagesServices.updateLanguage(this.language).subscribe(
      res => {
        this.appGlobals.alertSuccess('Idioma actualizado con exito');
        this.router.navigate(['/languages']);
      },
      error => {
        console.log(error.error);
        this.appGlobals.alertError(error.error);
      }
    );
  }

}
