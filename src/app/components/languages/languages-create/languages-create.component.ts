import {Component, OnInit} from '@angular/core';
import {Languages} from '../../../models/languages';
import {LanguagesService} from '../../../services/languages.service';
import {AppGlobals} from '../../../app-globals';
import {Router} from '@angular/router';

@Component({
  selector: 'app-languages-create',
  templateUrl: './languages-create.component.html',
  styleUrls: ['./languages-create.component.css']
})
export class LanguagesCreateComponent implements OnInit {

  language: Languages = new Languages();
  constructor(
    private languagesServices: LanguagesService,
    public appGlobals: AppGlobals,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.languagesServices.createLanguage(this.language).subscribe(
      res => {
        this.appGlobals.alertSuccess('Idioma creado con exito');
        this.router.navigate(['/languages']);
      },
      error => {
        console.log(error.error);
        this.appGlobals.alertError(error.error);
      }
    );
  }

}
