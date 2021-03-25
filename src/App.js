import React,{useState} from 'react';
import './App.css';
import Multiselect from 'react-widgets/lib/Multiselect';
import SlidingPane from "react-sliding-pane";
import Select from "react-select"
import "react-sliding-pane/dist/react-sliding-pane.css";
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from './assets/data';
import Markers from './components/VenueMarkers';
import 'react-widgets/dist/css/react-widgets.css'

function App() {
  
  const currentLocation = { lat: 9.966667, lng:78.166667 }
  const [location, setlocation] = useState();
  const zoom = 9
  const [isPaneOpenLeft, setisPaneOpenLeft] = useState(false);
  let handleParentData = (formModel) => {
    //setsize(formModel.size)
    console.log(isPaneOpenLeft)
    setisPaneOpenLeft(false)
    setlocation(formModel)
  }
  return (
    <div className="App">
      <div className="filter_location">
      <div class="places">
          <label for="location_option">Location</label>
          <div class="location_option">
          <Multiselect value={location}
    data={["Onion","Tomato","Potato","Peanut","Radish","Beetroot","Carrot","Cabbage","Chilli pepper","Ginger","Garlic","Mushroom","Pumpkin"]}
    />             
              <button onClick={(e) => setisPaneOpenLeft(true)}>Select District From Map</button>
          </div>
           
      </div>
  </div>
  <SlidingPane
      className="some-custom-class"
      overlayClassName="some-custom-overlay-class"
      isOpen={isPaneOpenLeft}
      from="up"
      title="Rent Farmland & Hire Farmer"
      subtitle="VivasayaVelai.com"
      onRequestClose={() => {
        // triggered on "<" on left top click or on outside click
        setisPaneOpenLeft(false)
      }}
    >
      <Map center={currentLocation} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />

        <Markers venues={data.venues} handle={handleParentData}/>
      </Map>
    </SlidingPane>
          
     
    </div>
  );
}

export default App;
