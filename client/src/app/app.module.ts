import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkereTableComponent } from './skere-table/skere-table.component';
import { ScoresTableComponent } from './scores-table/scores-table.component';
import { MathGameComponent } from './math-game/math-game.component';
import { SeaBettleComponent } from './sea-bettle/sea-bettle.component';

@NgModule({
  declarations: [
    AppComponent,
    SkereTableComponent,
    ScoresTableComponent,
    MathGameComponent,
    SeaBettleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
