import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProtieneProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProtieneProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProtieneProvider Provider');
  }

  public getAllProteins(){
      return this.http.get("/assets/proteine.json");
  }

}
