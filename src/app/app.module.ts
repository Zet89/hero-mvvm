import { environment } from 'src/environments/environment';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero-component/hero.comp';
import {
    HERO_UI_SERVICE_TOKEN, heroUIServiceFactory
} from './hero-component/hero.comp.ui-service.intf';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: HERO_UI_SERVICE_TOKEN, useFactory: heroUIServiceFactory, deps: []}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
