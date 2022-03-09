import React, { useEffect, useState } from 'react';
import Hike from './Hike';
import moment from 'moment';

export default function Leaderboard({ mobile }) {
  const [hikes, setHikes] = useState([]);
  const baseUrl = 'http://192.168.1.156:3001/hikes';
  const [averageTime, setAverageTime] = useState(0);
  const [numberOfHikers, setNumberOfHikers] = useState(0);
  const [topHiker, setTopHikers] = useState([]);
  const occurences = {};
  const sortedOccurences = [];

  const getHikes = () => {
    fetch(baseUrl)
      .then((res) => res.json())

      .then((data) => {
        let avgCounter = 0;
        data.forEach((n) => {
          n.duration = new Date(n.finish_date) - new Date(n.start_date);
          avgCounter += n.duration *1000;
          if (occurences[n.user]) {
            occurences[n.user]++;
          } else {
            occurences[n.user] = 1;
          }
        });
        for (let name in occurences) {
          sortedOccurences.push([name, occurences[name]]);
        }
        sortedOccurences.sort(function (a, b) {
          return b[1] - a[1];
        });
        console.log(sortedOccurences[0]);
        data.sort(function (a, b) {
          return a.duration - b.duration;
        });
        data.forEach((n, index) => {
          n.position = index + 1;
        });
        setAverageTime(avgCounter);


        setNumberOfHikers(data.length);
        setTopHikers(sortedOccurences);

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
      <div className="trip-info">
        <div>
          <p>Total number of hikers:</p>
          <h2> {numberOfHikers}</h2>
        </div>
        <div>
          <p>Average time to finish: </p>
          <h2>{moment(averageTime).format('hh:mm')}</h2>
        </div>
      </div>
      {hikes.map((hike) => (
        <Hike hike={hike} setHikes={setHikes} key={hike._id}></Hike>
      ))}
    </div>
  );
}
