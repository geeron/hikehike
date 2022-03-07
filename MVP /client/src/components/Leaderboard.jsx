import React, { useEffect, useState } from 'react';
import Hike from './Hike';

export default function Leaderboard({ mobile }) {
  const [hikes, setHikes] = useState([]);
  const baseUrl = 'http://192.168.1.156:3001/hikes';

  const getHikes = () => {
    fetch(baseUrl)
      .then((res) => res.json())

      .then((data) => {
        data.forEach((n) => {
          n.duration = new Date(n.finish_date) - new Date(n.start_date);
        });
        data.sort(function (a, b) {
          return a.duration - b.duration;
        });
        if (mobile === 'true') {
          setHikes([data[0], data[1], data[2]]);
        } else {
          setHikes(data);
        }
      });
  };
  useEffect(() => {
    getHikes();
  }, []);

  return (
    <div className="Leaderboard__container">

      <button>Today</button>
      <button>This Week</button>
      <button>This Month</button>
      <button>All Time</button>


      {hikes.map((hike) => (
        <Hike hike={hike} setHikes={setHikes} key={hike._id}></Hike>
      ))}
    </div>
  );
}


