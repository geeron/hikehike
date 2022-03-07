import React, { useRef, useState, useEffect } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

export default function Map({longitude, latitude}) {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZ2Vlcm9uIiwiYSI6ImNsMGdyNm05eDAwOG0zaW9lcm0zNTUyN2EifQ.Nlk32ph1Np1DqPKI4WCACA';

  const mapContainer = useRef(null);

  const map = useRef(null);
  const [lng, setLng] = useState(longitude);
  const [lat, setLat] = useState(latitude);
  const [zoom, setZoom] = useState(12);


  // const [marker, setMarker] = useState(
  //   new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map)
  // );

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
