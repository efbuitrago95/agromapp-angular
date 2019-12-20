import { Component, OnInit } from '@angular/core';
import { DemoFilePickerAdapter } from '../../../demo-file-picker.adapter';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crops-creator',
  templateUrl: './crops-creator.component.html',
  styleUrls: ['./crops-creator.component.css']
})
export class CropsCreatorComponent implements OnInit {
  listelement = [{
    id:1,
    name:"prueba1"
  }];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  adapter = new DemoFilePickerAdapter(this.http);
  constructor(private http:HttpClient) { }

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
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
