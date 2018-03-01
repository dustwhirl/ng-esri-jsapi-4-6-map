import { Injectable, ElementRef } from '@angular/core';
import esriLoader from 'esri-loader';

@Injectable()
export class MapService {
  map: __esri.Map;
  mapView: __esri.MapView;

  constructor() { }

  isLoaded() {
    return esriLoader.isLoaded();
  }

  loadMap(
    mapProperties: __esri.MapProperties,
    mapViewProperties: __esri.MapViewProperties,
    el: ElementRef
  ) {
    return esriLoader.loadScript({
      url: '//js.arcgis.com/4.6'
    }).then(() => {
      return esriLoader.loadModules([
        'esri/Map',
        'esri/views/MapView'
      ]).then(([
        Map,
        MapView
      ]:[
        __esri.MapConstructor,
        __esri.MapViewConstructor
      ]) => {
        this.map = new Map(mapProperties);

        if (!mapViewProperties.container) mapViewProperties.container = el.nativeElement.id;
        if (!mapViewProperties.map) mapViewProperties.map = this.map;

        this.mapView = new MapView(mapViewProperties);

        return {
          map: this.map,
          mapView: this.mapView
        };
      });
    });
  }
}
