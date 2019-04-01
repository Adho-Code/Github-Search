import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable()
export class ProfileService {
  getUser(): any {
    throw new Error("Method not implemented.");
  }
  private username="adhoadhi";
  private client_id="c77be61fbf3d94df87bc";
  private client_secret="ee20ec268711c18982e2c1bd3ac666f6b2599279";
  languageMap = new Map();

  constructor(private _http: Http) {
    console.log ('Github service init');
   }

   getRepos() {
    return this._http.get(`https://api.github.com/users/${this.username}/repos?per_page=100`)
      .pipe(map(res => res.json()));
  }
  updateUsername(username: string) {
    this.username = username;
  }
  getLanguages(url: string) {
    return this._http.get(url).pipe(map(res => res.json()));
  }
  storeLanguageMap(language: Object) {
    var languageArray = Object.keys(language);
    for (var j = 0; j < languageArray.length; j++) {
      var name = languageArray[j];
      var value = language[name];
      console.log(value);
      if (!this.languageMap.get(name)) {
        this.languageMap.set(name, value);
      } else {
        var tempVal = this.languageMap.get(name);
        tempVal += value;
        this.languageMap.set(name, tempVal);
      }
      
    }
  }
  getLanguageMap() {
    return this.languageMap;
  }

}


