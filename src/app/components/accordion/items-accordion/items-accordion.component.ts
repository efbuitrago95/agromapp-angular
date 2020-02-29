import {Component, Input, OnInit} from '@angular/core';
import {CropsService} from '../../../services/crops.service';
import {CropItemsService} from '../../../services/cropItems.service';
import {CropsItems} from '../../../models/cropItems';
import {PropertiesService} from '../../../services/properties.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AppGlobals} from '../../../app-globals';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';

@Component({
  selector: 'app-items-accordion',
  templateUrl: './items-accordion.component.html',
  styleUrls: ['./items-accordion.component.css']
})
export class ItemsAccordionComponent implements OnInit {

  @Input() propertyItems;
  cropItem: CropsItems = new CropsItems();
  cropItemRes: CropsItems = new CropsItems();
  image = '';
  constructor(private activatedRoute: ActivatedRoute,
              private cropItemsService: CropItemsService,
              private propertiesService: PropertiesService,
              private cropsService: CropsService,
              public appGlobals: AppGlobals,
              private router: Router) { }

  ngOnInit() {
  }

  async onSubmit() {
    const id = Math.random().toString(36).substring(2);
    try {
      const ref = firebase.storage().ref(`flags/${id}`);
      await new Promise((resolve, reject) => {
        ref.putString(this.image, 'data_url').then(() => {
          ref.getDownloadURL().then((url) => {
            /*this..picture = url;*/
            this.cropItemsService.create(this.cropItem).subscribe(
              res => {
                this.appGlobals.alertSuccess('Item guardado con éxito');
                Object.assign(this.cropItemRes, res);
              },
              error => {
                this.appGlobals.alertError(error.error);
              }
            );
            resolve('OK');
          }).catch((error) => {
            reject(error);
          });
        });
      });
    } catch (e) {
      console.log(e);
    }
  }

  changeImage(image) {
    this.image = image;
  }

}
