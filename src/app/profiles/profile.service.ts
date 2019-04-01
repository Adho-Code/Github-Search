import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable()
export class ProfileService {
  private username="";
  private client_id="c77be61fbf3d94df87bc";
  private client_secret="ee20ec268711c18982e2c1bd3ac666f6b2599279";
  languageMap = new Map();

  constructor(private _http: Http) {
    console.log ('Github service init');
   }

   getUser
}
