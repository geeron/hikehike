import React from 'react';
import Hike from './Hike';

export default function Leaderboard({ hikes, setHikes }) {
  return (
    <div className="Leaderboard__container">
      {hikes.map((hike) => (
        <Hike hike={hike} setHikes={setHikes} key={hike._id}></Hike>
      ))}
    </div>
  );
}
