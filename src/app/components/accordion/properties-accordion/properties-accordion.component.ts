import { Component, OnInit } from '@angular/core';
import {AppGlobals} from '../../../app-globals';
import {ActivatedRoute, Router} from '@angular/router';
import {Properties} from '../../../models/properties';
import {PropertiesService} from '../../../services/properties.service';

@Component({
  selector: 'app-properties-accordion',
  templateUrl: './properties-accordion.component.html',
  styleUrls: ['./properties-accordion.component.css']
})
export class PropertiesAccordionComponent implements OnInit {
  property: Properties[] = [];
  properties: Properties = new Properties();
  constructor(private propertiesService: PropertiesService,
              private activatedRoute: ActivatedRoute,
              public appGlobals: AppGlobals,
              private router: Router
              ) { }

  ngOnInit() {

  }

}
