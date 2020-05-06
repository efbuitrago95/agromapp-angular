import {Component, OnInit, Input} from '@angular/core';
import {AppGlobals} from '../../../app-globals';
import {ActivatedRoute, Router} from '@angular/router';
import {Properties} from '../../../models/properties';
import {PropertiesItems} from '../../../models/propertiesItems';
import {PropertiesService} from '../../../services/properties.service';
import {PropertiesitemsService} from '../../../services/propertiesitems.service';
import {Crops} from '../../../models/crops';

@Component({
  selector: 'app-properties-accordion',
  templateUrl: './properties-accordion.component.html',
  styleUrls: ['./properties-accordion.component.css']
})
export class PropertiesAccordionComponent implements OnInit {
  @Input() propertyLanguage: Properties = new Properties();
  @Input() cropsProperty: Crops = new Crops();
  params: any = {};
  property: Properties[] = [];
  propertiesitemsobject: PropertiesItems = new PropertiesItems();
  propertiesitemsarray: PropertiesItems[] = [];
  propertiesitemsselected: PropertiesItems[] = [];
  selectPropertiesItems = [];

  constructor(private propertiesService: PropertiesService,
              private propertiesitemsService: PropertiesitemsService,
              private activatedRoute: ActivatedRoute,
              public appGlobals: AppGlobals,
              private router: Router
  ) {
  }

  ngOnInit() {
    console.log('Llega a propiedades', this.cropsProperty)
    this.getpropertiesItems();
  }

  changepropertiesItems(selectedItems) {
    if (selectedItems[0]) {
      this.propertiesitemsselected = selectedItems;
      console.log('properties', this.propertiesitemsselected);
      this.propertiesitemsobject.idProperty = selectedItems[0].id;
      this.params.property = this.propertiesitemsobject.idProperty;
      this.propertiesService.get(this.params).subscribe((res: any) => {
      });
    } else {
      this.propertiesitemsselected = [];
    }
  }

  getpropertiesItems() {
    this.params.property = this.propertyLanguage.id;
    this.propertiesitemsService.get(this.params).subscribe((res: any) => {
      this.propertiesitemsarray = [];
      Object.assign(this.propertiesitemsarray, res.results);
      console.log('Properties items', this.propertiesitemsarray);
    });
  }
}
