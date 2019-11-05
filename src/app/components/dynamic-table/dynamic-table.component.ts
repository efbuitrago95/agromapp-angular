import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MessageService} from 'primeng/api';
import {DomSanitizer} from '@angular/platform-browser';
import * as moment from 'moment';
import {isNumeric} from 'rxjs/internal-compatibility';

export interface DynamicTableCol {
  field?: string;
  header?: string;
  type?: DynamicTableType;
  options?: any[];
  label?: string;
  required?: boolean;
  autoRange?: boolean;
  min?: number;
  max?: number;
  values?: number[];
}

export class DynamicTableType {
  static number = 'number';
  static select = 'select';
  static image = 'image';
  static multiselect = 'multiselect';
  static currency = 'currency';
  static textArea = 'text-area';
  static text = 'text';
}

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit, OnChanges {

  @Input() cols: DynamicTableCol[];
  @Input() data: any[];
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onStoreRow = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDeleteRow = new EventEmitter<any>();

  displayDialog: boolean;
  selectedRow: any;
  row: any;

  defaultLabel = 'Todo';

  objectsData: any[] = [];
  optionsCurrencyMask = {precision: 0, align: 'left', decimal: ',', thousands: '.', allowNegative: false};

  constructor(private messageService: MessageService,
              private sanitizer: DomSanitizer) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.data);
    if (changes['data'] || changes['cols']) {
      if (this.cols) {
        for (const col of this.cols) {
          if (col.type === DynamicTableType.number
            || col.type === DynamicTableType.currency) {
            if (col.autoRange) {
              const values: number[] = this.data.map((x) => {
                return x[col.field];
              });
              col.min = Math.min(...values);
              col.max = Math.max(...values);
            }
            col.values = [col.min, col.max];
          }
          if (col.type === DynamicTableType.select) {
            const obj = {};
            obj[col.label] = this.defaultLabel;
            col.options = [obj].concat(col.options);
            this.objectsData.push(col);
          }
        }
      }

    }
  }

  ngOnInit() {
  }

  onFilterNumberChange($event, dt, col) {
    let values = this.data.filter(x => x[col.field] >= $event.values[0] && x[col.field] <= $event.values[1]);
    values = values.map((x) => {
      return x[col.field];
    });
    dt.filter(values, col.field, 'in');
  }

  onFilterSelectChange($event, dt, col) {
    if ($event.value) {
      if ($event.value[col.label] === this.defaultLabel) {
        dt.filter(null, col.field + '.' + col.label, 'equals');
      } else {
        dt.filter($event.value[col.label], col.field + '.' + col.label, 'equals');
      }
    } else {
      dt.filter(null, col.field, 'equals');
    }
  }

  onFilterMultiselectChange($event, dt, col) {
    console.log(dt.value);
    if ($event.value) {
      if ($event.value.length === 0) {
        dt.filteredValue = dt.value;
      } else {
        dt.filteredValue = dt._value.filter(x => this.searchObjects(x, $event.value, col));
      }
    } else {
      dt.filteredValue = dt._value;
    }
  }

  searchObjects(listX: any[], listY: any[], col: any): boolean {
    if (listX) {
      if (listX[col.field]) {
        for (const x of listX[col.field]) {
          for (const y of listY) {
            if (x[col.label] === y[col.label]) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }

  onUpload(event, row: any, form) {
    const reader = new FileReader();
    reader.readAsDataURL(event.files[0]);
    reader.onload = (_event) => {
      row.image = reader.result.toString();
    };
    form.clear();
  }

  openToast() {
    this.messageService.add({
      key: 'c',
      severity: 'warn',
      summary: '¿Eliminar?',
      detail: ''
    });
  }

  closeToast() {
    this.messageService.clear('c');
  }

  showDialogToAdd() {
    this.selectedRow = null;
    this.row = {};
    this.displayDialog = true;
  }

  save() {
    this.onStoreRow.emit(this.row);
    this.displayDialog = false;
    this.row = null;
  }

  delete() {
    this.displayDialog = false;
    this.closeToast();
    this.onDeleteRow.emit(this.selectedRow);
  }

  onRowSelect(event) {
    this.row = this.cloneProject(event.data);
    this.displayDialog = true;
  }

  cloneProject(p: any): any {
    const project = {};
    for (const prop of Object.keys(p)) {
      project[prop] = p[prop];
    }
    return project;
  }

  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  sortNumber($event) {
    $event.data.sort((data1, data2) => {
      const value1 = data1[$event.field];
      const value2 = data2[$event.field];
      let result = null;

      if (value1 == null && value2 != null) {
        result = -1;
      } else if (value1 != null && value2 == null) {
        result = 1;
      } else if (value1 == null && value2 == null) {
        result = 0;
      } else {
        if (isNumeric(value1)) {
          result = (Number(value1) < Number(value2)) ? -1 : (Number(value1) > Number(value2)) ? 1 : 0;
        } else {
          try {
            result = value1.localeCompare(value2);
          } catch (e) {
            const label = this.cols.find(x => x.field === $event.field).label;
            result = value1[label].localeCompare(value2[label]);
          }
        }
      }

      return ($event.order * result);
    });
  }
}