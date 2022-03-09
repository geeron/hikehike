import React from 'react';
import moment from 'moment';

export default function Hike({ hike }) {
  return (
    <div className="Hike__container">
      <div className="rank">
        <h3>{hike.position}</h3>
      </div>
      <div className="hike-info">
        <div className="name">
          <h2>{hike.user}</h2>
        </div>

        <div className="date">
          <h4>
            Hiked up {hike.title} on{' '}
            {moment(hike.start_date).format('Do MMMM, YYYY')}
          </h4>
        </div>
      </div>
      <div className="duration">
        <h3>{moment.utc(hike.duration).format('HH:mm:ss')}</h3>
      </div>
    </div>
  );
}
