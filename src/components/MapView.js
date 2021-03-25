import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../assets/data';
import Markers from './VenueMarkers';

class MapView extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      currentLocation: { lat: 9.966667, lng:78.166667 },
      zoom: 9,
    }
  }
  
  render() {
    let handleParentData = (formModel) => {
      //setsize(formModel.size)
      console.log(formModel)
    }
    const { currentLocation, zoom } = this.state;

    return (
      <Map center={currentLocation} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />

        <Markers venues={data.venues} handle={handleParentData}/>
      </Map>
    );
  }
}

export default MapView;
