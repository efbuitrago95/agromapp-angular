import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {

  @Output() propagar = new EventEmitter<string>();

  textSearch = '';
  constructor() { }

  ngOnInit() {
  }

  onPropagar() {
    this.propagar.emit(this.textSearch);
  }
}
