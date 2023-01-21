import React from "react";
import GoogleMapReact from 'google-map-react';
import { useSelector } from 'react-redux'


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export function MapCmp({ style, cmp, onElementClick }) {
  const selectedElementId = useSelector((storestate) => storestate.wapModule.selectedElementId)
  const info = cmp.info

  const defaultProps = {
    center: {
      lat: info.cords.lat,
      lng: info.cords.lng
    },
    zoom: info.zoom
  };

  return (
    // Important! Always set the container height explicitly
    // <div id={cmp.type} style={style} className={cmp.name} data-container='parent' onClick={onElementClick}>
    //   <h2 style={info.name.style} data-container={info.name.id} contentEditable={selectedElementId === info.name.id} onClick={onElementClick} className="title" >{info.name.txt}</h2>
    <div style={style}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCB0AieRfE8jFeAQWL8okf7J69APWc8VTI" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={info.cords.lat}
          lng={info.cords.lng}
          text="📍"
        />
      </GoogleMapReact>
    </div>
    // </div>
  );
}