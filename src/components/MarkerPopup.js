import React from 'react';
import {Popup} from 'react-leaflet';

const MarkerPopup = (props) => {
  const { name } = props.data;
  //onChange={(e) =>  props.handle("getchange getchange getchange getchange")}
  return  (<Popup >
    <div className='poup-text' onClick={(e) =>  props.handle(name)}>{name}</div>
  </Popup>);
};

export default MarkerPopup;
