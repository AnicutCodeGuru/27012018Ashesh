import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Counter } from '../counter/counter';
import {Todo}  from '../todo/Todo';
import {TaskList}  from '../todo/TaskList';

@NgModule({
  declarations: [
    AppComponent,Counter,TaskList
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
