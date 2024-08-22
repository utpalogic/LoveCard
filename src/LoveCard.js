import React, { useState } from 'react';
import './LoveCard.css';

const LoveCard = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="card">
      <div className={`envelope ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        <div className="envelope-flap"></div>
        <div className="envelope-body">
          <div className="heart"></div>
        </div>
        <div className="shadow"></div>
      </div>
      <div className={`letter ${open ? 'show' : ''}`}>
        <p>My Dearest [Your partner's name],</p>
        <p>
          I wanted to take a moment to let you know how much you mean to me. Your love and support make every day brighter,
          and I am so grateful to have you in my life. You are my rock, my joy, and my everything.
        </p>
        <p>Forever yours,</p>
        <p>[your name]</p>
      </div>
    </div>
  );
};

export default LoveCard;
