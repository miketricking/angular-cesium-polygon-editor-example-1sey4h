import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import the new component
import { MapViewComponent } from './map.component';
import { MapRouting } from './map.routing';
import {
  AngularCesiumModule,
  AngularCesiumWidgetsModule,
} from 'angular-cesium';

@NgModule({
  imports: [
    AngularCesiumModule,
    AngularCesiumWidgetsModule,
    CommonModule,
    MapRouting,
  ],
  declarations: [MapViewComponent],
  exports: [MapViewComponent],
})
export class MapModule {}
