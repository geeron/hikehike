import moment from 'moment';
import React, { useState,useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import Weather from './Weather';
import Map from './Map';
import Leaderboard from './Leaderboard';

export default function StartHike() {
  const search = useLocation().search;
  const title = new URLSearchParams(search).get('title');
  const start_date = new URLSearchParams(search).get('start_date');
  localStorage.setItem('start_date', start_date);
  localStorage.setItem('title', title);



  return (
    <div className='StartHike__container'>
      <h2>Trip has started!</h2>
      <h3>Scan QR-code at top of {title} to finish</h3>
      <p>Best time:</p>
      <Leaderboard  mobile='true'></Leaderboard>
      <p>Your route:</p>
      <Map longitude={new Number(new URLSearchParams(search).get('lng'))} latitude={new Number(new URLSearchParams(search).get('lat'))}></Map>
    </div>
  );
}
