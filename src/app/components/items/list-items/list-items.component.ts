import {Component, OnInit} from '@angular/core';
import {Properties} from '../../../models/properties';
import {PropertiesService} from '../../../services/properties.service';
import {PropertiesitemsService} from '../../../services/propertiesitems.service';
import {PropertiesItems} from 'src/app/models/propertiesItems';
import {AppGlobals} from '../../../app-globals';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  propertyItems: PropertiesItems[] = [];
  properties: Properties[] = [];
  params: any = {};
  paginationData: any = {};

  constructor(private propertiesitemsService: PropertiesitemsService,
              private propertiesService: PropertiesService) { }

  ngOnInit() {
    this.params.page = 1;
    this.getProperty();
    this.getPropertiesItems();
  }

  getProperty() {
    this.propertiesService.get().subscribe((res: any) => {
      this.properties = [];
      Object.assign(this.properties, res.results);
    });
  }

  changePage(page) {
    this.params.page = page;
    this.getPropertiesItems();
  }

  changeSearch(mensaje) {
    this.params.page = 1;
    this.params.search = mensaje;
    this.getPropertiesItems();
  }

  changeProperty(selectedItems) {
    this.params.page = 1;
    if (selectedItems[0]) {
      this.params.property = selectedItems[0].id;
    } else {
      delete this.params.property;
    }
    this.getPropertiesItems();
  }

  getPropertiesItems() {
    this.propertiesitemsService.get(this.params).subscribe((res: any) => {
      this.propertyItems = [];
      this.paginationData = {};
      Object.assign(this.propertyItems, res.results);
      Object.assign(this.paginationData, res.paginationData);
    });
  }
}
