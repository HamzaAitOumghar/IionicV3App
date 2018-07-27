import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BodyTabsPage } from '../body-tabs/body-tabs';
import { ProtieneProvider } from '../../providers/protiene/protiene';
import { Proteine } from '../../entities/Proteine';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToTabs(){
    this.navCtrl.push(BodyTabsPage);
  }
 

}
