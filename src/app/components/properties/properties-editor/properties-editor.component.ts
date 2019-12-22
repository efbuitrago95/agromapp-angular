import { Component, OnInit } from '@angular/core';
import {PropertiesService} from '../../../services/properties.service';
import {LanguagesService} from '../../../services/languages.service';
import {Languages} from '../../../models/languages';

@Component({
  selector: 'app-properties-editor',
  templateUrl: './properties-editor.component.html',
  styleUrls: ['./properties-editor.component.css']
})
export class PropertiesEditorComponent implements OnInit {
  languages: Languages[] = [];

  constructor(
    private propertiesServices: PropertiesService,
    private languagesServices: LanguagesService
  ) {
  }

  ngOnInit() {
    this.getLanguages();
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
