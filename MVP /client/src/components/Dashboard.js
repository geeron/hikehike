import React, { useEffect, useState } from 'react';
import Leaderboard from './Leaderboard';
import QrCode from './QrCode';

export default function Dashboard({}) {
  const testUrl = 'http://192.168.1.156:3000/submit?title=tibidabo';


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
        <h2>Leaderboard</h2>
        <Leaderboard ></Leaderboard>
      </div>
      <div className='QR'>
        <h1>END OF HIKE!</h1>
        <p>You have reached the top!</p>
        <h2>Scan to submit your hike</h2>
        <QrCode date={testUrl + '&finish_date=' + date}></QrCode>
      </div>
    </div>

  );
}
