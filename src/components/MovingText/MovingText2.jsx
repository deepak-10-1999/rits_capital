import React from 'react';
import { Link } from 'react-router-dom';
import Div from '../Div';
import './movingtext.scss';

export default function MovingText2({ data, reverseDirection }) {
  return (
    <Div className="cs-moving_text_wrap cs-type1 cs-bold cs-primary_font">
      <Div className="cs-moving_text_in">
        <Div
          className={
            reverseDirection
              ? 'cs-moving_text cs-reverse_animation'
              : 'cs-moving_text'
          }
        >
          {/* {data.map((item, index) => (
            <>
              <Link key={index} to={item.href}>
                {item.title}
              </Link>
              -
            </>
          ))} */}
                    <img className='logoimgs' src="/images/logo1.png" alt="" />
                   <img className='logoimgs' src="/images/logo2.png" alt="" />
                   <img className='logoimgs' src="/images/logo3.png" alt="" />
                   <img className='logoimgs' src="/images/logo4.png" alt="" />
                   <img className='logoimgs' src="/images/logo5.png" alt="" />
                   <img className='logoimgs' src="/images/logo6.png" alt="" />
                   <img className='logoimgs' src="/images/logo4.png" alt="" />


         

        </Div>
        <Div
          className={
            reverseDirection
              ? 'cs-moving_text cs-reverse_animation'
              : 'cs-moving_text'
          }
        >
          {/* {data.map((item, index) => (
            <>
              <Link key={index} to={item.href}>
                {item.title}
              </Link>
              -
            </>
          ))} */}
                 <img className='logoimgs' src="/images/logo1.png" alt="" />
                   <img className='logoimgs' src="/images/logo2.png" alt="" />
                   <img className='logoimgs' src="/images/logo3.png" alt="" />
                   <img className='logoimgs' src="/images/logo4.png" alt="" />
                   <img className='logoimgs' src="/images/logo5.png" alt="" />
                   <img className='logoimgs' src="/images/logo6.png" alt="" />
                   <img className='logoimgs' src="/images/logo4.png" alt="" />

                  



         
        </Div>
      </Div>
    </Div>
  );
}
