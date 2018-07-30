import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BodyTabsPage } from '../pages/body-tabs/body-tabs';
import { ProgrammesPage } from '../pages/programmes/programmes';
import { ProtEroteinsPage } from '../pages/prot-eroteins/prot-eroteins';
import { SuccessStoryPage } from '../pages/success-story/success-story';
import { ProtieneProvider } from '../providers/protiene/protiene';
import { HttpClientModule } from '@angular/common/http';
import { DetailsProteinPage } from '../pages/details-protein/details-protein';
import { ProgrammeProvider } from '../providers/programme/programme';

import { AdMobFree} from '@ionic-native/admob-free';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BodyTabsPage,
    ProgrammesPage,
    ProtEroteinsPage,
    SuccessStoryPage,
    DetailsProteinPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BodyTabsPage,
    ProgrammesPage,
    ProtEroteinsPage,
    SuccessStoryPage,
    DetailsProteinPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    AdMobFree,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProtieneProvider,
    ProgrammeProvider
  ]
})
export class AppModule {}
