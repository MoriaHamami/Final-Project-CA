import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';
import { useSelector } from 'react-redux'
// import LocationOnIcon from '@mui/icons-material/LocationOn';

export function MapCmp({ style, cmp, onElClick, selectedCmpId }) {
  const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)
  const AnyReactComponent = ({ text }) => <div>{text}</div>
  const [isOn, setIsOn] = useState({ cmp: false, title: false, subtitle: false, txt: false, btn: false, img: false, map: false })


  const info = cmp.info
  const defaultProps = {
    center: {
      lat: info.map.cords.lat,
      lng: info.map.cords.lng
    },
    zoom: info.map.zoom
  };

  return (
    <div id={cmp.type}
      className={((selectedCmpId === cmp.id && selectedElement?.id === cmp.id) ? 'selected' : '') + ' ' + cmp.name + ' ' + (selectedElement?.id !== cmp.id && isOn.cmp && 'hover')}
      onMouseOut={() => setIsOn((prevIsOn) => {
        return { ...prevIsOn, cmp: false }
      })}
      onMouseOver={() => setIsOn((prevIsOn) => {
        return { ...prevIsOn, cmp: true }
      })}
      data-container={JSON.stringify(cmp)} onClick={onElClick} style={style} >

      {cmp.info.title && <h2
        data-container={JSON.stringify(info.title)}
        onClick={onElClick}
        style={info.title.style}
        className={`${(selectedCmpId === cmp.id && selectedElement?.id === info.title.id) ? 'selected' : ''} title ${selectedElement?.id !== info.title.id && isOn.title && 'hover'}`}
        onMouseOut={() => setIsOn((prevIsOn) => {
          return { ...prevIsOn, title: false }
        })}
        onMouseOver={() => setIsOn((prevIsOn) => {
          return { ...prevIsOn, title: true }
        })}
        contentEditable={selectedElement?.id === info.title.id}
        suppressContentEditableWarning={true} >
        {info.title.txt}
      </h2>}

      <div className="map-container" data-container={JSON.stringify(info.map)} onClick={onElClick} style={info.map.style}
        onMouseOut={() => setIsOn((prevIsOn) => {
          return { ...prevIsOn, map: false }
        })}
        onMouseOver={() => setIsOn((prevIsOn) => {
          return { ...prevIsOn, map: true }
        })}

      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCB0AieRfE8jFeAQWL8okf7J69APWc8VTI" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={defaultProps.center.lat}
            lng={defaultProps.center.lng}
            text="📍"
          />
        </GoogleMapReact>
        <div
          className={`${(selectedCmpId === cmp.id && selectedElement?.id === info.map.id) ? 'selected' : ''} map-edit ${selectedElement?.id !== info.map.id && isOn.map && 'hover'}`}


        >✎</div>
      </div>

    </div>

  )
}