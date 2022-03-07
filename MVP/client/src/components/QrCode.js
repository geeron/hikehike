import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';

export default function QrCode({ date }) {
  const [code, setCode] = useState('');

  useEffect(() => {
    QRCode.toDataURL(date).then(setCode);
  }, [date]);

  return (
    <div className="QRCode__container">
      <img className="QRCodes" src={code} />
      <hr></hr>
      <p>THIS IS WHAT IS SENT IN THE QR CODE:</p>
      <ul>
        <li>Location</li>
        <li>Your starting time</li>
      </ul>
      <p>This is what is sent, for development purposes, will be removed:</p>
      <p>
        POST:
        <a href={date} target="_blank">
          {date}
        </a>
      </p>
    </div>
  );
}
