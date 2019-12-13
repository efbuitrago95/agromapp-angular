import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../../../services/languages.service';
import { ActivatedRoute } from '@angular/router';
import {Languages} from '../../../models/languages';
@Component({
  selector: 'app-languages-editor',
  templateUrl: './languages-editor.component.html',
  styleUrls: ['./languages-editor.component.css']
})
export class LanguagesEditorComponent implements OnInit {

  language: Languages = new Languages();
  id: number
  constructor( private languagesService: LanguagesService,
               private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.languagesService.getLanguageById(this.id).subscribe((res: any) => {
      Object.assign(this.language, res.results);
    });
  }

  onSubmit()  {
    console.log(this.language);
  }

}
