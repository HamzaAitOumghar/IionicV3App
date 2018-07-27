import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Proteine } from '../../entities/Proteine';

/**
 * Generated class for the DetailsProteinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-details-protein',
  templateUrl: 'details-protein.html',
})
export class DetailsProteinPage {

  public proteine:Proteine;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.proteine=this.navParams.data;
    console.log(this.proteine);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsProteinPage');
  }

}
