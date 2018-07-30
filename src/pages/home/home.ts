import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BodyTabsPage } from '../body-tabs/body-tabs';
import { ProtieneProvider } from '../../providers/protiene/protiene';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private admobFree: AdMobFree) {

          
  }
  ionViewDidLoad(){
    const bannerConfig: AdMobFreeBannerConfig = {

      id:'ca-app-pub-3940256099942544/6300978111',
      isTesting: true,
      autoShow: true
    };
    this.admobFree.banner.config(bannerConfig);
    
    this.admobFree.banner.prepare()
      .then(() => {

                  })
      .catch(e => console.log(e));

  }

  goToTabs(){
    this.navCtrl.push(BodyTabsPage);
  }
 

}
