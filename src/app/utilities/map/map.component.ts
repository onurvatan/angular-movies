import { LeadingComment } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';
import { coordinatesMap } from './coordinate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.layers=this.initCoordinates.map(value => marker([value.latitude,value.longitude]));
  }
  @Input()
  initCoordinates: coordinatesMap[]=[];

  @Output()
  onSelectedLocation= new EventEmitter<coordinatesMap>();

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Angular Movies' })
    ],
    zoom: 10,
    center: latLng(40.95864123118629, 389.16870117187506)
  };

  layers : Marker<any>[] = [];

  handleMapClick(event:LeafletMouseEvent){
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
    console.log({latitude,longitude});
    this.layers=[];
    this.layers.push(marker([latitude,longitude]));
    this.onSelectedLocation.emit({latitude,longitude});
  }

}
