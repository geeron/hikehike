import React, { useEffect, useState } from 'react';
import Leaderboard from './Leaderboard';
import QrCode from './QrCode';

export default function DasboardStart() {
  const [hikes, setHikes] = useState([]);

  const baseUrl = 'http://192.168.1.156:3001/hikes';
  const testUrl = 'http://192.168.1.156:3000/hike?title=tibidabo';

  const getHikes = () => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => setHikes(data));
  };

  useEffect(() => {
    getHikes();
  }, []);

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
        <Leaderboard hikes={hikes} setHikes={setHikes}></Leaderboard>
      </div>
      <div className='QR'>
      <h1>START OF HIKE!</h1>
        <p>You can join this hiking trip</p>
        <h2>Scan to start your hike</h2>
        <QrCode date={testUrl + '&start_date=' + date}></QrCode>
      </div>
    </div>

  );
}
