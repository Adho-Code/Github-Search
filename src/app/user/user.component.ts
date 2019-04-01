import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profiles/profile.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [ProfileService]
})
export class UserComponent implements OnInit {
  user: any;
  repos: any;
  username: string;
  languages: Object[];

  constructor(private _profileService: ProfileService) {
    console.log('Github Component init');

  }

  search() {
    this._profileService.updateUsername(this.username);
    this._profileService.getUser().subscribe(user => {
      this.user = user;
    });

    this._profileService.getRepos().subscribe(repos => {
      this.repos = repos;
      this.calculateLanguages(repos);
    })

  }
  calculateLanguages(repos) {
    var lang = [];
    for (let repo of repos) {
      this._profileService.getLanguages(repo.languages_url).subscribe(language => {
        lang.push(language);
        this._profileService.storeLanguageMap(language);

      })
    }
    this.languages = lang;
    console.log(this.languages);
    console.log(this._profileService.getLanguageMap());

  }
  ngOnInit() {
  }

}

