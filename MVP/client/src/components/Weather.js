import React, { useState } from 'react';

export default function Weather() {
  const latitude = '41.421377';
  const longitude = '2.118190';

  const [weatherInfo, setWeatherInfo] = useState('');

  // fetch(
  //   `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${latitude}&lon=${longitude}`
  // )
  //   .then((res) => res.json())
    // .then((data) => (setWeatherInfo(data)))


  return (
    <div>
      <p>This is the weather today, still testing</p>
    </div>
  );
}
