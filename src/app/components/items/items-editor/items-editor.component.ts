import { Component, OnInit } from '@angular/core';
import {Properties} from '../../../models/properties';
import {PropertiesItems} from '../../../models/propertiesItems';
import {ActivatedRoute, Router} from '@angular/router';
import {PropertiesService} from '../../../services/properties.service';
import {PropertiesitemsService} from '../../../services/propertiesitems.service';
import {AppGlobals} from '../../../app-globals';

@Component({
  selector: 'app-items-editor',
  templateUrl: './items-editor.component.html',
  styleUrls: ['./items-editor.component.css']
})
export class ItemsEditorComponent implements OnInit {
  properties: Properties[] = [];
  selectProperty = [];
  propertyItems: PropertiesItems = new PropertiesItems();
  id: number;

  constructor(private activatedRoute: ActivatedRoute,
              private propertiesItemsService: PropertiesitemsService,
              private propertiesService: PropertiesService,
              public appGlobals: AppGlobals,
              private router: Router) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.propertiesItemsService.getById(this.id).subscribe((res: any) => {
      this.propertyItems = new PropertiesItems();
      this.selectProperty = [];
      Object.assign(this.propertyItems, res);
      this.selectProperty.push(this.propertyItems.properties);
      this.getProperties();
    });
  }

  onSubmit() {
    this.propertiesItemsService.update(this.propertyItems).subscribe(
      res => {
        this.appGlobals.alertSuccess('Sub propiedad actualizada con éxito');
        this.router.navigate(['/items']);
      },
      error => {
        this.appGlobals.alertError(error.error);
      }
    );
  }

  getProperties() {
    this.propertiesService.get().subscribe((res: any) => {
      this.properties = [];
      Object.assign(this.properties, res.results);
    });
  }

  changeProperty(selectedItems) {
    if (selectedItems[0]) {
      this.propertyItems.idProperty = selectedItems[0].id;
    }
  }
}

