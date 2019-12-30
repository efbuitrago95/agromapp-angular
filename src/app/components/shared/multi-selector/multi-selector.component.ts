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
  @Input() single;
  @Input() listItemsSelected;
  @Output() changeLanguage = new EventEmitter();

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    this.selectedItems = this.listItemsSelected;
    this.dropdownList = this.listItems;
    console.log(this.selectedItems);
    this.dropdownSettings = {
      singleSelection: this.single,
      idField: 'id',
      textField: 'name',
      allowSearchFilter: true
    };
  }

  onItemSelect(event) {
    this.changeLanguage.emit(this.selectedItems);
  }
}
