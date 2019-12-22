import { Component, OnInit } from '@angular/core';
import {PropertiesService} from '../../../services/properties.service';
import {LanguagesService} from '../../../services/languages.service';
import {Languages} from '../../../models/languages';
import {ActivatedRoute, Router} from '@angular/router';
import {AppGlobals} from '../../../app-globals';
import {Properties} from '../../../models/properties';

@Component({
  selector: 'app-properties-editor',
  templateUrl: './properties-editor.component.html',
  styleUrls: ['./properties-editor.component.css']
})
export class PropertiesEditorComponent implements OnInit {
  languages: Languages[] = [];

  property: Properties = new Properties();
  id: number
  constructor( private activatedRoute: ActivatedRoute,
               private languagesServices: LanguagesService,
               private propertiesService: PropertiesService,
               public appGlobals: AppGlobals,
               private router: Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.propertiesService.getById(this.id).subscribe((res: any) => {
      Object.assign(this.property, res);
    });
    this.getLanguages();
  }

  onSubmit()  {
    this.propertiesService.update(this.property).subscribe(
      res => {
        this.appGlobals.alertSuccess('propiedad actualizada con exito');
        this.router.navigate(['/properties']);
      },
      error => {
        console.log(error.error);
        this.appGlobals.alertError(error.error);
      }
    );
  }

  getLanguages() {
    this.languagesServices.get().subscribe((res: any) => {
      this.languages = [];
      console.log(res.results);
      Object.assign(this.languages, res.results);
    });
  }

  changeLanguage(selectedItems) {
    if (selectedItems[0]) {
      let asf = selectedItems[0].id;
    }
  }

}
