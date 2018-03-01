import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';

import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @ViewChild('map') el: ElementRef;
  @Input() mapProperties: __esri.MapProperties;
  @Input() mapViewProperties: __esri.MapViewProperties;

  constructor(public _mapService: MapService) { }

  ngOnInit() {
    if (!this._mapService.isLoaded()) {
      this._mapService.loadMap(this.mapProperties, this.mapViewProperties, this.el).then(() => {
        console.log('map loaded');
      });
    }
  }

}
