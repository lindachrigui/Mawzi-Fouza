import React from 'react';

import "./Card.css"

const Card = () => {
  return (
    
      <div className="plan">
      
        <div className="inner">
        <h1 className="titl">Premium Plan</h1>
          <span className="pricing1">
            <span className='pri'>
              $49<small>/Month</small>
            </span>
          </span>
          
          <p className="info">This plan is for those who have a team already and running a large business.</p>
          <ul className="features">
            <li>
              
            Plan team meetings
            </li>
            <li>
              
            Plan team meetings
            </li>
            <li>
              
            Plan team meetings
            </li>
            <li>
              
            Plan team meetings
            </li>
            <li>
              
            Plan team meetings
            </li>
          </ul>
          <div className="action">
            <a className="button" href="#">
              Choose plan
            </a>
          </div>
        </div>
      </div>
    
  );
}

export default Card;