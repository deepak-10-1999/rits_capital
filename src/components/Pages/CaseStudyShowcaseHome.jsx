import React, { useEffect } from 'react';
import { Link} from 'react-router-dom';
import { useRef } from 'react';
// import Typed from 'typed.js';
import Spacing from '../Spacing';
import SectionHeading from '../SectionHeading';

import Div from '../Div';


export default function CaseStudyShowcaseHome() {
    // const el = useRef(null);

    // useEffect(() => {
    //   const typed = new Typed(el.current, {
    //     strings: [
    //     "Wealth Management",
    //     "Investment Banking",
    //     "Financial Support ",
    //     "Startup Incubation",
    //     "Pre-IPO"
    // ], 
    //     startDelay: 100,
    //     typeSpeed: 100,
    //     backSpeed: 100,
    //     backDelay: 100,
    //     loop:true
    //   });
  
    //   return () => {
    //     typed.destroy();
    //   };
    // }, []);

  return (
    <>
    <section className="banner s3">
        <div className="shape"></div>
        <div className="shape right"></div>
        <div className="shape s3 right"></div>
   
        <div className="container big">
  <Spacing lg="100" md="60" />

            <div className="row">
                <div className="col-xl-6  col-lg-6 "style={{ zIndex: 100 }}>
                    <div className="banner__left">
                        <div className="block-text">
                            <h2 className="heading">Rits Capital
                            <br />
                                {/* <span className="arlo_tm_animation_text_word" ref={el} ></span> */}
                                </h2>
                            <p className="desc">At Rits Capital, we collaborate with you to tailor a bespoke wealth strategy, safeguarding your assets and amplifying your financial goals.
</p>

                           <Link to="/contact" className="action-btn"><span>Consult Us</span></Link>

                            
                    
                            
                        </div>

                     
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6">

                    <div className="banner__right">
                        <div className="image-1">
                            <img src="/images/Web_Hero.svg" alt="" />
                        </div>

                  

                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <Spacing lg="150" md="80" />
    <Div className="container">
        <Div className="row align-items-center">
        <Div className="col-lg-6">
          <h2 className=''>Rits Capital</h2>

            <SectionHeading
            
              title=""
              subtitle="At Rits Capital, we collaborate with you to tailor a bespoke wealth strategy, safeguarding your assets and amplifying your financial goals."
              btnText="Consult Us"
              btnLink="/contact"
              titleStyle={{ fontSize: '6px' }}
            />
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <img
                src="/images/Web_Hero.svg"
                alt="About"
                className="cs-w100 cs-radius_5"
              />
            </Div>
          </Div>
        
        </Div>
      </Div>
      <Spacing lg="100" md="80" /> */}
    </>
  );
}
