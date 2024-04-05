import React from 'react';
import { Link } from 'react-router-dom';
import Div from '../Div';
import './portfolio.scss';

export default function Portfolio({ href, src, title, subtitle, variant,subPoints }) {
  return (
    <Link
      to={href}
      className={`cs-portfolio cs-bg ${variant ? variant : 'cs-style1'}`}
    >
      <>
        <Div className="cs-portfolio_hover" />
        
        <Div
          className="cs-portfolio_bg cs-bg"
          style={{ backgroundImage: `url("${src}")` }}
        />
        <Div className="cs-portfolio_info">
          <Div className="cs-portfolio_info_bg cs-accent_bg" />
          
          <h2 className="cs-portfolio_title">{title}</h2>
          <Div className="cs-portfolio_subtitle">{subtitle}</Div>
          {Array.isArray(subPoints) && subPoints.length > 0 ? (
          <ul>
            {subPoints.map((point, index) => (
              <li className='subpoints' key={index}>{point}</li>
            ))}
          </ul>
        ) : (
          <p>No points available</p>
        )}
        </Div>
      </>
    </Link>
  );
}
