import { Component, OnInit } from "@angular/core";
import { Languages } from "../../../models/languages";
import { AppGlobals } from "../../../app-globals";
import { LanguagesService } from "../../../services/languages.service";

@Component({
  selector: "app-list-languages",
  templateUrl: "./list-languages.component.html",
  styleUrls: ["./list-languages.component.css"]
})
export class ListLanguagesComponent implements OnInit {
  language: Languages = new Languages();
  languages: Languages[] = [];

  constructor(
    private languagesServices: LanguagesService,
    public appGlobals: AppGlobals
  ) {}

  ngOnInit() {
    this.getLanguages();
  }

  onSubmit() {
    if (this.language.id) {
      this.languagesServices.updateLanguage(this.language).subscribe(
        res => {
          document.getElementById("closeModal").click();
          this.getLanguages();
          this.appGlobals.alertSuccess("Idioma actualizado con exito");
          this.language = new Languages();
        },
        error => {
          console.log(error.error);
          this.appGlobals.alertError(error.error);
        }
      );
    } else {
      this.languagesServices.createLanguage(this.language).subscribe(
        res => {
          document.getElementById("closeModal").click();
          this.getLanguages();
          this.appGlobals.alertSuccess("Idioma creado con exito");
          this.language = new Languages();
        },
        error => {
          console.log(error.error);
          this.appGlobals.alertError(error.error);
        }
      );
    }
  }

  getLanguages() {
    this.languagesServices.getLanguages().subscribe(res => {
      Object.assign(this.languages, res);
    });
  }

  openModalEditLanguage(language: Languages) {
    this.language = language;
    document.getElementById("btnOpenModal").click();
  }

  openModalCreateLanguage() {
    this.language = new Languages();
    document.getElementById("btnOpenModal").click();
  }
}
