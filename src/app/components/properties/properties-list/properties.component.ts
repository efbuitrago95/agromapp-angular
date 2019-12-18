import { Component, OnInit } from "@angular/core";
import { Properties } from "../../../models/properties";
import { PropertiesService } from "../../../services/properties.service";
import { LanguagesService } from "../../../services/languages.service";
import { AppGlobals } from "../../../app-globals";
import { Languages } from "src/app/models/languages";
import {
  DynamicTableCol,
  DynamicTableType
} from "../../dynamic-table/dynamic-table.component";

@Component({
  selector: "app-properties",
  templateUrl: "./properties.component.html",
  styleUrls: ["./properties.component.css"]
})
export class PropertiesComponent implements OnInit {
  property: Properties = new Properties();
  properties: Properties[] = [];
  languages: Languages[] = [];
  cols: DynamicTableCol[];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};


  constructor(
    private propertiesServices: PropertiesService,
    private languagesServices: LanguagesService,
    public appGlobals: AppGlobals
  ) {}

  ngOnInit() {
    console.log(this.property);
    this.languagesServices.getLanguages().subscribe(res => {
      Object.assign(this.languages, res);
    });
    this.getProperties();
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

  onSubmit() {
    if (this.property.id) {
      this.propertiesServices.updateProperty(this.property).subscribe(
        res => {
          document.getElementById("closeModal").click();
          this.getProperties();
          this.appGlobals.alertSuccess("Propiedad actualizada con exito");
          this.property = new Properties();
        },
        error => {
          console.log(error.error);
          this.appGlobals.alertError(error.error);
        }
      );
    } else {
      this.propertiesServices.createProperty(this.property).subscribe(
        res => {
          document.getElementById("closeModal").click();
          this.getProperties();
          this.appGlobals.alertSuccess("Propiedad creado con exito");
          this.property = new Properties();
        },
        error => {
          console.log(error.error);
          this.appGlobals.alertError(error.error);
        }
      );
    }
  }

  getProperties() {
    this.propertiesServices.getProperties().subscribe(res => {
      Object.assign(this.properties, res);
      // console.log(this.properties);
      const opt: any[] = [];
      Array.prototype.push.apply(opt, this.languages);
      this.cols = [
        { field: "name", header: "Nombre", type: DynamicTableType.text },
        {
          field: "languages",
          header: "Idioma",
          type: DynamicTableType.select,
          options: opt,
          label: "name",
          required: true
        }
      ];
    });
  }

  openModalEditProperty(property: Properties) {
    this.property = property;
    document.getElementById("btnOpenModal").click();
  }
}
