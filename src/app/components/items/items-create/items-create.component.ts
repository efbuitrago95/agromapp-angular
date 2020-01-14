import { Component, OnInit } from '@angular/core';
import {Properties} from '../../../models/properties';
import {Propertiesitems} from '../../../models/propertiesitems';
import {ActivatedRoute, Router} from '@angular/router';
import {PropertiesService} from '../../../services/properties.service';
import {PropertiesitemsService} from '../../../services/propertiesitems.service';
import {AppGlobals} from '../../../app-globals';


@Component({
  selector: 'app-items-create',
  templateUrl: './items-create.component.html',
  styleUrls: ['./items-create.component.css']
})
export class ItemsCreateComponent implements OnInit {
  properties: Properties[] = [];
  selectProperty = [];
  propertyitems: Propertiesitems = new Propertiesitems();
  id: number;

  constructor(private activatedRoute: ActivatedRoute,
              private propertiesitemsService: PropertiesitemsService,
              private propertiesService: PropertiesService,
              public appGlobals: AppGlobals,
              private router: Router) {
  }

  ngOnInit() {
    this.getProperties();
  }

  onSubmit() {
    this.propertiesitemsService.create(this.propertyitems).subscribe(
      res => {
        this.appGlobals.alertSuccess('Sub-propiedad creada con éxito');
        this.router.navigate(['/items']);
      },
      error => {
        this.appGlobals.alertError(error.error);
      }
    );
  }

  changeLanguage(selectedItems) {
    if (selectedItems[0]) {
      this.propertyitems.idProperty = selectedItems[0].id;
    }
  }

  getProperties() {
    this.propertiesService.get().subscribe((res: any) => {
      this.properties = [];
      Object.assign(this.properties, res.results);
    });
  }

}
