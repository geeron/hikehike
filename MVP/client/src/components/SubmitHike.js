import React, { useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import moment from 'moment';

export default function SubmitHike() {
  const [name, setName] = useState('');

  const search = useLocation().search;
  const title = new URLSearchParams(search).get('title');
  const finish_date = new URLSearchParams(search).get('finish_date');
  const start_date = localStorage.getItem('start_date');
  let duration = (finish_date - start_date) / 60000;
  const serverUrl = 'http://192.168.1.156:3001/hikes';

  duration = duration.toString().split('.')[0];

  const handleSubmit = (e) => {
    e.preventDefault();

    // get name from form, and other info from url query params
    let body = {
      title: title,
      start_date: start_date,
      finish_date: finish_date,
      user: name,
    };

    console.log(body);
    console.log(JSON.stringify(body));

    fetch(serverUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    setName('');
  };

  return (
    <div className="SubmitHike__container">
      <h2>Submit Your Hike!</h2>
      <h3>Congratulations!</h3>
      <p>
          You finished the hike to {title.toUpperCase()} in {duration} minutes
        </p>
      <form onSubmit={handleSubmit}>

        <label for="name">
        <h4>What is your name:</h4>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label for="rating"><h4>Rate the trip:</h4></label>
        <input type="range" min="1" max="5" id="rating" name="rating"></input>
        <br />
        <label for="review"><h4>Write your review:</h4></label>
        <textarea type="comment" rows="5" id="review" name="review"></textarea>
        <br></br>

        <input type="submit" value="Submit Hike" />


      </form>
    </div>
  );
}
