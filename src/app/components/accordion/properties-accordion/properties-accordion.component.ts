import {Component, OnInit, Input} from '@angular/core';
import {AppGlobals} from '../../../app-globals';
import {ActivatedRoute, Router} from '@angular/router';
import {Properties} from '../../../models/properties';
import {Propertiesitems} from '../../../models/propertiesitems';
import {PropertiesService} from '../../../services/properties.service';
import {PropertiesitemsService} from '../../../services/propertiesitems.service';

@Component({
  selector: 'app-properties-accordion',
  templateUrl: './properties-accordion.component.html',
  styleUrls: ['./properties-accordion.component.css']
})
export class PropertiesAccordionComponent implements OnInit {
  @Input() propertyLanguage: Properties = new Properties();
  params: any = {};
  property: Properties[] = [];
  propertiesitemsobject: Propertiesitems = new Propertiesitems();
  propertiesitemsarray: Propertiesitems[] = [];
  propertiesitemsselected: Propertiesitems[] = [];
  selectPropertiesItems = [];

  constructor(private propertiesService: PropertiesService,
              private propertiesitemsService: PropertiesitemsService,
              private activatedRoute: ActivatedRoute,
              public appGlobals: AppGlobals,
              private router: Router
  ) {
  }

  ngOnInit() {
    this.getpropertiesItems();
  }

  changepropertiesItems(selectedItems) {
    if (selectedItems[0]) {
      this.propertiesitemsselected = selectedItems;
      this.propertiesitemsobject.idProperty = selectedItems[0].id;
      this.params.property = this.propertiesitemsobject.idProperty;
      this.propertiesService.get(this.params).subscribe((res: any) => {
      });
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
