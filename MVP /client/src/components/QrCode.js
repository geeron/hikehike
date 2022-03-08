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
    </div>
  );
}
