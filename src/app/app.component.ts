import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mapProperties: __esri.MapProperties = {
    basemap: 'topo'
  };
  mapViewProperties: __esri.MapViewProperties = {
    center: [-74.25, 43],
    zoom: 13
  };
}
