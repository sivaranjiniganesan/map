import React, { Fragment } from 'react'
import {Marker} from 'react-leaflet';
import {VenueLocationIcon} from './VenueLocationIcon';
import MarkerPopup from './MarkerPopup';

const VenueMarkers = (props) => {
  const { venues } = props;

  let handleParentData = (formModel) => {
    //setsize(formModel.size)
    console.log(formModel)
    props.handle(formModel)
  }
  const markers = venues.map((venue, index) => (
    <Marker key={index} position={venue.geometry} icon={VenueLocationIcon} >
      <MarkerPopup data={venue}  handle={handleParentData}/>
    </Marker>
  ));

  return <Fragment>{markers}</Fragment>
};

export default VenueMarkers;
