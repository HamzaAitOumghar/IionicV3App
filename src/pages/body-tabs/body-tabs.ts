import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ProtEroteinsPage } from '../prot-eroteins/prot-eroteins';
import { SuccessStoryPage } from '../success-story/success-story';
import { ProgrammesPage } from '../programmes/programmes';

/**
 * Generated class for the BodyTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-body-tabs',
  templateUrl: 'body-tabs.html'
})
export class BodyTabsPage {

  protEroteinsRoot = ProtEroteinsPage
  successStoryRoot = SuccessStoryPage
  programmesRoot = ProgrammesPage


  constructor(public navCtrl: NavController) {}

}
