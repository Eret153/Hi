import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkereTableComponent } from './skere-table/skere-table.component';
import { ScoresTableComponent } from './scores-table/scores-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SkereTableComponent,
    ScoresTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
