import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-items-accordion',
  templateUrl: './items-accordion.component.html',
  styleUrls: ['./items-accordion.component.css']
})
export class ItemsAccordionComponent implements OnInit {

  @Input() property;

  constructor() {
  }

  ngOnInit() {
    console.log('llego algo a items accordion', this.property);
  }

}
