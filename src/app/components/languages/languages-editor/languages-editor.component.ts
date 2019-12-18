import {Component, OnInit} from '@angular/core';
import {LanguagesService} from '../../../services/languages.service';
import {ActivatedRoute} from '@angular/router';
import {Languages} from '../../../models/languages';
import {AppGlobals} from '../../../app-globals';

@Component({
  selector: 'app-languages-editor',
  templateUrl: './languages-editor.component.html',
  styleUrls: ['./languages-editor.component.css']
})
export class LanguagesEditorComponent implements OnInit {

  language: Languages = new Languages();
  id: number;

  constructor(private languagesServices: LanguagesService,
              private activatedRoute: ActivatedRoute,
              private appGlobals: AppGlobals) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.languagesServices.getLanguageById(this.id).subscribe((res: any) => {
      Object.assign(this.language, res.results);
    });
  }

  onSubmit() {
    this.languagesServices.updateLanguage(this.language).subscribe(
      res => {
        document.getElementById('closeModal').click();
        this.appGlobals.alertSuccess('Idioma actualizado con exito');
        this.language = new Languages();
      },
      error => {
        console.log(error.error);
        this.appGlobals.alertError(error.error);
      }
    );
  }
}
