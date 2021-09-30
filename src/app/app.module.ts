import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import {
  AngularCesiumModule,
  AngularCesiumWidgetsModule,
  PolygonsEditorService,
} from 'angular-cesium';
import { MapModule } from './views/map/map.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MapModule,
    AppRoutingModule,
    AngularCesiumModule.forRoot(),
    AngularCesiumWidgetsModule,
  ],
  declarations: [AppComponent],
  providers: [PolygonsEditorService],

  bootstrap: [AppComponent],
})
export class AppModule {}
