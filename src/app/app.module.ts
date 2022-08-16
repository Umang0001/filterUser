import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { Userlist2Component } from './userlist2/userlist2.component';
import {FormsModule} from "@angular/forms"

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    Userlist2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
