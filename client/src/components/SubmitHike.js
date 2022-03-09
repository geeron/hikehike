import React, { useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import exifr from 'exifr'

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

    console.log(JSON.stringify(body))



    fetch(serverUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    window.alert('Hike successfully added to leaderboard!')
    setName('');
  };

  return (
    <div className="SubmitHike__container">
      <p>
        You finished the hike to {title.toUpperCase()} in {duration} minutes
        </p>
      <form className='SubmitHikeForm' onSubmit={handleSubmit}>
        <label for="name">
          <h4>Input your name:</h4>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="rating">
          <h4>Rate your hike:</h4>
        </label>
        <input type="range" min="1" max="5" id="rating" name="rating"></input>
        <br />
        <label htmlFor="review">
          <h4>Write your review:</h4>
        </label>
        <textarea type="text" rows="10" cols="30" id="review" name="review"></textarea>
        <br></br>
        <input type="submit" value="Submit Hike" />
      </form>

      <p>Disclaimer: When you submit, your information<br></br> will be stored and shown on the leaderboard</p>
    </div>
  );
}
