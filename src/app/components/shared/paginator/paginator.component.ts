import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() public paginationData: string;
  constructor() { }

  ngOnInit() {
    console.log(this.paginationData);
  }

}
