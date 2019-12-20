import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-multi-selector',
  templateUrl: './multi-selector.component.html',
  styleUrls: ['./multi-selector.component.css']
})
export class MultiSelectorComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  @Input() listelement:any={};


  constructor(private http:HttpClient) { }

  ngOnInit() {
    console.log(this.listelement);


  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
