import { Component } from '@angular/core';
import { PolygonsEditorService } from 'angular-cesium';

@Component({
  selector: 'home',
  template: `
    <h1>Map test</h1>
    <div style="height: 800px; width: 100%;">
      <ac-map>
      </ac-map>
  </div>
  `,
  providers: [PolygonsEditorService],
})
export class MapViewComponent {
  constructor(private polygonEditor: PolygonsEditorService) {}
}
