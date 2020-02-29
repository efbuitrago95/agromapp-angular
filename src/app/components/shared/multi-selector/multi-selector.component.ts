import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-multi-selector',
  templateUrl: './multi-selector.component.html',
  styleUrls: ['./multi-selector.component.css']
})
export class MultiSelectorComponent implements OnInit {
  eventArray = [];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  @Input() listItems;
  @Input() placeholder;
  @Input() single;
  @Input() listItemsSelected;
  @Output() changeSelect = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.selectedItems = this.listItemsSelected;
    this.dropdownList = this.listItems;
    this.dropdownSettings = {
      singleSelection: this.single,
      idField: 'id',
      textField: 'name',
      allowSearchFilter: true
    };
  }

  onItemSelect() {
    console.log(this.selectedItems);
    this.changeSelect.emit(this.selectedItems);
  }

}
