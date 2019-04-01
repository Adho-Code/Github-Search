import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './profiles/profile.service'
import {GithubComponent } from './user/user.component'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    HomeComponent
  

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SearchService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
