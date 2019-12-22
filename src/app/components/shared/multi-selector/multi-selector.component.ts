import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-multi-selector',
  templateUrl: './multi-selector.component.html',
  styleUrls: ['./multi-selector.component.css']
})
export class MultiSelectorComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  @Input() listItems;
  @Input() placeholder;
  @Output() changeLanguage = new EventEmitter();

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('init');
    console.log(this.listItems);
    for (const item of this.listItems) {
      // console.log(item)
      this.dropdownList.push(item);
    }
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      allowSearchFilter: true
    };
  }

  onItemSelect(event) {
    this.changeLanguage.emit(this.selectedItems);
  }

  onFilterChange(event) {
    this.changeLanguage.emit(this.selectedItems);
  }
}
