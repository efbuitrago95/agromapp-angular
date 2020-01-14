import {Component, OnInit} from '@angular/core';
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
  selectLanguage = [];
  property: Properties = new Properties();
  id: number;

  constructor(private activatedRoute: ActivatedRoute,
              private languagesServices: LanguagesService,
              private propertiesService: PropertiesService,
              public appGlobals: AppGlobals,
              private router: Router) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.propertiesService.getById(this.id).subscribe((res: any) => {
      this.property = new Properties();
      this.selectLanguage  = [];
      Object.assign(this.property, res);
      this.selectLanguage.push(this.property.languages);
      this.getLanguages();
    });
  }

  onSubmit() {
    this.propertiesService.update(this.property).subscribe(
      res => {
        this.appGlobals.alertSuccess('propiedad actualizada con exito');
        this.router.navigate(['/properties']);
      },
      error => {
        this.appGlobals.alertError(error.error);
      }
    );
  }

  getLanguages() {
    this.languagesServices.get().subscribe((res: any) => {
      this.languages = [];
      Object.assign(this.languages, res.results);
    });
  }

  changeLanguage(selectedItems) {
    if (selectedItems[0]) {
      this.property.idLanguage = selectedItems[0].id;
    }
  }

}
