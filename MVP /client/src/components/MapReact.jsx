import React, { useState } from 'react';
import Map, { Marker } from 'react-map-gl';

export default function MapReact({ longitude, latitude }) {
  console.log(parseFloat(latitude), parseFloat(longitude));

  const [lat, setLat] = useState(latitude);
  const [lng, setLng] = useState(longitude);
  return (
    <div className='MapComponent'>
      <div>
        <h2>Sarria - Tibidabo</h2>
      </div>
      <div className="MapReact__container">
        <Map
          initialViewState={{
            longitude: 2.125375842 + 0.001,
            latitude: 41.41960408,
            zoom: 13,
          }}
          style={{ width: 360, height: 360 }}
          mapStyle="mapbox://styles/mapbox/outdoors-v11"
          mapboxAccessToken="pk.eyJ1IjoiZ2Vlcm9uIiwiYSI6ImNsMGdyNm05eDAwOG0zaW9lcm0zNTUyN2EifQ.Nlk32ph1Np1DqPKI4WCACA"
        >
          <Marker
            longitude={2.132027539366759}
            latitude={41.41699338560686}
            anchor="bottom"
          >
            <img className="mapMarker" src={require('./map/start64px.png')} />
          </Marker>

          <Marker
            longitude={2.1187241449459493}
            latitude={41.42221476576812}
            anchor="bottom"
          >
            <img className="mapMarker" src={require('./map/finish64px.png')} />
          </Marker>
        </Map>
      </div>
      <div>
        <h3>Length: 2km | Elevation Gain: 302m</h3>
      </div>
    </div>
  );
}
