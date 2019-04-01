import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';
import { Repo } from "../repo";
import { User } from "../user"
import { environment } from "../../environments/environment";


@Injectable()
export class SearchService {
baseUrl = "https://api.github.com";
  constructor(private http:HttpClient) {


 }
  gitSearch(){


}


  getRepos(userName:string):Observable<Repo[]>{
    return this.http.get<Repo[]>(this.baseUrl+"/users/"+ userName+"/repos")
}
  getUsers(userName:string):Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl+"/users/"+ userName)


  }


}