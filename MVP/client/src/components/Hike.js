import React from 'react';
import moment from 'moment';

export default function Hike({ hike, setHikes }) {
  return (
    <div className="Hike__container">
      <div className="short-date">
        <h3>{hike.user} </h3>
      </div>
      <div className="hike-info">
        <h4>hiked up {hike.title}</h4>
        <p>
          Started at {moment(hike.start_date).format('hh:mm a')} -{' '}
          {moment(hike.start_date).format('Do MMMM, YYYY')}
        </p>
        <p>
          Finished at {moment(hike.finish_date).format('hh:mm a')} -{' '}
          {moment(hike.finish_date).format('Do MMMM, YYYY')}
        </p>
      </div>
    </div>
  );
}
