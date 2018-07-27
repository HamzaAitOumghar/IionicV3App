import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProtieneProvider } from '../../providers/protiene/protiene';
import { Proteine } from '../../entities/Proteine';
import { DetailsProteinPage } from '../details-protein/details-protein';

/**
 * Generated class for the ProtEroteinsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-prot-eroteins',
  templateUrl: 'prot-eroteins.html',
})
export class ProtEroteinsPage {

  proteines:Proteine[];

  constructor(private proteineService:ProtieneProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

 
  ionViewDidLoad(){
    this.proteineService.getAllProteins().subscribe(
      (data:Proteine[])=>{
        this.proteines=data;
        console.log(this.proteines);
      }
    );
}
  goToDetails(pro){
    this.navCtrl.push(DetailsProteinPage,pro);
  }

}
