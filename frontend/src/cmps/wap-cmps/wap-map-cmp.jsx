import React from "react";
import GoogleMapReact from 'google-map-react';
import { useSelector } from 'react-redux'
import LocationOnIcon from '@mui/icons-material/LocationOn';

export function MapCmp({ style, cmp, onElClick, selectedCmpId }) {
  const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)
  const AnyReactComponent = ({ text }) => <div>{text}</div>

  const info = cmp.info
  const defaultProps = {
    center: {
      lat: info.map.cords.lat,
      lng: info.map.cords.lng
    },
    zoom: info.map.zoom
  };

  return (
    <div id={cmp.type} className={cmp.name} data-container={JSON.stringify(cmp)} onClick={onElClick} style={style} >
      
      {cmp.info.title && <h2
        data-container={JSON.stringify(info.title)}
        onClick={onElClick}
        style={info.title.style}
        className="title"
        contentEditable={selectedElement?.id === info.title.id}
        suppressContentEditableWarning={true} >
        {info.title.txt}
      </h2>}

      <div className="map-container" data-container={JSON.stringify(info.map)} onClick={onElClick} style={info.map.style}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCB0AieRfE8jFeAQWL8okf7J69APWc8VTI" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={defaultProps.center.lat}
            lng={defaultProps.center.lng}
            text={<LocationOnIcon style={{color:'red', fontSize:'2rem'}}/>}
          />
        </GoogleMapReact>
        <div className="map-edit">✎</div>
      </div>

    </div>

  )
}