import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Proteine } from '../../entities/Proteine';
import { ProtieneProvider } from '../../providers/protiene/protiene';
import { ProgrammeProvider } from '../../providers/programme/programme';
import { Programme } from '../../entities/Programme';

/**
 * Generated class for the ProgrammesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-programmes',
  templateUrl: 'programmes.html',
})
export class ProgrammesPage {

  programmes : Programme[];

  constructor(public programmeService:ProgrammeProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad(){
    this.programmeService.getAllProgrammes().subscribe(
      (data:Programme[])=>{
       this.programmes=data;
      }
    )
  }
}
