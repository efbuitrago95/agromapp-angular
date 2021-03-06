import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crops-editor',
  templateUrl: './crops-editor.component.html',
  styleUrls: ['./crops-editor.component.css']
})
export class CropsEditorComponent implements OnInit {
  listelement = [{
    id:1,
    name:"prueba1"
  }];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor() { }

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
}
