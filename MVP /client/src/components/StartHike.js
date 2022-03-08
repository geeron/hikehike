import moment from 'moment';
import React, { useState, useEffect, forwardRef, useRef } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import Weather from './Weather';
import Map from './Map';
import Leaderboard from './Leaderboard';
import MapReact from './MapReact';

export default function StartHike() {
  const mapRef = useRef(null);
  const leaderboardRef = useRef(null);

  const search = useLocation().search;
  const title = new URLSearchParams(search).get('title');
  const start_date = new URLSearchParams(search).get('start_date');
  localStorage.setItem('start_date', start_date);
  localStorage.setItem('title', title);

  function handleScrollMap() {
    console.log(mapRef);
    mapRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  function handleScrollLeaderboard() {
    console.log(mapRef);
    leaderboardRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="StartHike__container">
      <h2>Trip has started!</h2>
      <h3>Scan QR-code at top of {title} to finish</h3>
      <h2>Leaderboard</h2>
      <Leaderboard ref={leaderboardRef} mobile="true"></Leaderboard>
      <MapReact
        longitude={new Number(new URLSearchParams(search).get('lng'))}
        latitude={new Number(new URLSearchParams(search).get('lat'))}
      ></MapReact>
    </div>
  );
}
