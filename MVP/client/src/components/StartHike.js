import moment from 'moment';
import React from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import Weather from './Weather';

export default function StartHike() {
  const search = useLocation().search;
  const title = new URLSearchParams(search).get('title');
  const start_date = new URLSearchParams(search).get('start_date');
  localStorage.setItem('start_date', start_date);
  localStorage.setItem('title', title);


  return (
    <div>
      <h2>Trip has started!</h2>
      <h3>Scan QR-code at top of {title} to finish</h3>
      <p>Current hikers on this path</p>
      <p>2</p>
      <p>Best time:</p>
      <p>Sol, 24 min, June 3rd</p>

      <Weather></Weather>
    </div>
  );
}
