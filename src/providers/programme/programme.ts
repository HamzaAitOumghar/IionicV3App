import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProgrammeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProgrammeProvider {

  constructor(public http: HttpClient) {
  }
  public getAllProgrammes(){
    return this.http.get("/assets/programmes.json");
}

}
