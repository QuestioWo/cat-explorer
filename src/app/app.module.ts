import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RandomCatEncounterComponent } from './random-cat-encounter/random-cat-encounter.component';
import { EncounterButtonsComponent } from './encounter-buttons/encounter-buttons.component';
import { CatRosterComponent } from './cat-roster/cat-roster.component';
import { BlobImgComponent } from './blob-img/blob-img.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomCatEncounterComponent,
    EncounterButtonsComponent,
    CatRosterComponent,
    BlobImgComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
