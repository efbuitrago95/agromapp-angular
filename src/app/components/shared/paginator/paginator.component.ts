import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  page: number;
  isDisabledPrev = true;
  @Input() paginationData;
  @Output() pageCalc = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    this.page = this.paginationData.currentPage;
  }

  onChange(value) {
    this.page += value
    this.pageCalc.emit(this.page);
  }
}
