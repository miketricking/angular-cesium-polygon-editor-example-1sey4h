import './polyfills';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

declare var require;

var poll = setInterval(() => {
  // stackblitz donest support holding cesium, but a standalone angular will
  // this is a hack to load all cesium assets to stackbliz 
  const Cesium = window['Cesium'];
  if(Cesium){
    clearInterval(poll);
    Cesium.buildModuleUrl.setBaseUrl('//cesium.com/downloads/cesiumjs/releases/1.69/Build/Cesium/Assets');
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2YTY1NDYzYS01YzgxLT' +
  'Q2MGUtODBiYy0zODRmY2MwOGY4MDIiLCJpZCI6MjA1LCJpYXQiOjE1MDQ3MjQ1Njh9.rKgXUKAfFiiSAm_b9T8bpsDVdj0YyZeqGxNpzLlhxpk';

    const {AppModule} = require('./app/app.module');
    platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;

    // Otherwise, log the boot error
    }).catch(err => console.error(err));

  }
},1000)
