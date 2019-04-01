import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [UserService]
})
export class UserComponent implements OnInit {
  user: any;
  repos: any;
  username: string;
  languages: Object[];

  constructor(private _userService: UserService) {
    console.log('Github Component init');

  }

  search() {
    this._userService.updateUsername(this.username);
    this._userService.getUser().subscribe(user => {
      this.user = user;
    });

    this._userService.getRepos().subscribe(repos => {
      this.repos = repos;
      this.calculateLanguages(repos);
    })

  }
  calculateLanguages(repos) {
    var lang = [];
    for (let repo of repos) {
      this._userService.getLanguages(repo.languages_url).subscribe(language => {
        lang.push(language);
        this._userService.storeLanguageMap(language);

      })
    }
    this.languages = lang;
    console.log(this.languages);
    console.log(this._userService.getLanguageMap());
  }

  ngOnInit() {
  }

}

