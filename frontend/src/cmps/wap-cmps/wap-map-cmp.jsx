import React from "react";
import GoogleMapReact from 'google-map-react';
import { useSelector } from 'react-redux'


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export function MapCmp({ style, cmp, onElClick }) {
  const selectedElementId = useSelector((storestate) => storestate.wapModule.selectedElementId)
  const info = cmp.info
  console.log(cmp.name)
  const defaultProps = {
    center: {
      lat: info.cords.lat,
      lng: info.cords.lng
    },
    zoom: info.zoom
  };

  return (
    <div id={cmp.type} className={cmp.name} data-container={JSON.stringify(cmp)} onClick={onElClick}>
      {cmp.info.name && <h2 data-container={JSON.stringify(info.name)} onClick={onElClick} style={info.name.style} className="title" contentEditable={selectedElementId === info.name.id} suppressContentEditableWarning={true} >{info.name.txt}</h2>}
      <div>
        <div className='wap-map-container'>
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
      </div>
    </div>
  );
}