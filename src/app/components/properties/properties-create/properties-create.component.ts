import {Component, OnInit} from '@angular/core';
import {Languages} from '../../../models/languages';
import {Properties} from '../../../models/properties';
import {ActivatedRoute, Router} from '@angular/router';
import {LanguagesService} from '../../../services/languages.service';
import {PropertiesService} from '../../../services/properties.service';
import {AppGlobals} from '../../../app-globals';

@Component({
  selector: 'app-properties-create',
  templateUrl: './properties-create.component.html',
  styleUrls: ['./properties-create.component.css']
})
export class PropertiesCreateComponent implements OnInit {
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
    this.getLanguages();
  }

  onSubmit() {
    this.propertiesService.create(this.property).subscribe(
      res => {
        this.appGlobals.alertSuccess('Propiedad creada con éxito');
        this.router.navigate(['/properties']);
      },
      error => {
        this.appGlobals.alertError(error.error);
      }
    );
  }

  changeLanguage(selectedItems) {
    if (selectedItems[0]) {
      this.property.idLanguage = selectedItems[0].id;
    }
  }

  getLanguages() {
    this.languagesServices.get().subscribe((res: any) => {
      this.languages = [];
      Object.assign(this.languages, res.results);
    });
  }

}
