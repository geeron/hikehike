import React, { useEffect, useState } from 'react';
import Leaderboard from './Leaderboard';
import MapReact from './MapReact';
import QrCode from './QrCode';

export default function DasboardStart() {

  const testUrl = 'http://192.168.1.156:3000/hike?';
  const lng = '&lng=2.118184'
  const lat = '&lat=41.420102'
  const title = 'title=Tibidabo'
  const start_date = '&start_date=' + Math.floor(Date.now())



  const [date, setDate] = useState(Math.floor(Date.now()));

  useEffect(() => {
    const id = setInterval(() => setDate((oldCount) => Date.now()), 2500);

    return () => {
      clearInterval(id);
    };
  }, [date]);


  return (
    <div className="Dashboard__container">
      <div className='Leaderboard'>
        <Leaderboard></Leaderboard>
      </div>

      <div className='QR'>
      <div>
        <MapReact></MapReact>
      </div>
      <div className='hike-start'>

        <QrCode date={testUrl + title + start_date + lng + lat}></QrCode>
        <h2>Scan to start your hike</h2>
      </div>

      </div>
    </div>

  );
}
