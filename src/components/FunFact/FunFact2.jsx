// import React from 'react'
// import Div from '../Div'

// export default function FunFact2({data, variant, bgUrl}) {
//   return (
//     <Div className={variant?`cs-funfact_wrap_2 ${variant}`:'cs-funfact_wrap_2'}>
//       {/* {bgUrl && <div className="cs-funfact_shape" style={{backgroundImage:`url(${bgUrl})`}}></div>} */}
//       <Div className="cs-funfacts">
//         {data.map((item, index) => (
//           <Div key={index}>
//             <Div className="cs-funfact cs-style2">
//               <Div className="cs-funfact_number cs-primary_font cs-semi_bold cs-primary_color"><span className="odometer" />{item.factNumber}<span className="cs-plus">+</span></Div>
//               <h3 className="cs-funfact_title">{item.title}</h3>
//             </Div>
//           </Div>
//         ))}
//       </Div>
//     </Div>
//   )
// }

import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import './funfact.scss'

 
class FunFact2 extends React.Component {
    state = {
        didViewCountUp: false
    };

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({ didViewCountUp: true });
        }
    };

    render(){
        return (
            <section className="funfacts-area ptb-120" style={{backgroundImage: 'url(./images/animated/Glass.png)'}}>
                 <div className="cs-shape_3 d-none d-md-block cs-to_up">
          <img src="/images/Dots1.png" alt="Shape" />
        </div>
                <div className="container">
                 
                    <div className="row" >
                        <div className="fan col-lg-3 col-sm-6">
                            <div className="single-funfact">
                                
                                {/* <div className="icon">
                                <img src="/images/webicons/workplace.png" alt="" />
                                </div> */}
                                <h3 className="odometer">
                                    {/* <span>$</span> */}
                                    <VisibilitySensor
                                        onChange={this.onVisibilityChange}
                                        offset={{
                                            top: 10
                                        }}
                                        delayedCall
                                    >
                                        <CountUp
                                            start={0}
                                            end={
                                                this.state.didViewCountUp
                                                    ? 100
                                                    : 0
                                            }
                                            duration={3}
                                        />
                                    </VisibilitySensor>
                                    <span>+</span>
                                </h3>
                                <p>HNIs, Ultra HNI & Family Offices</p>
                            </div>
                        </div>
      
                        
                        <div className="fan col-lg-3 col-sm-6">
                            <div className="single-funfact">
                                {/* <div className="icon">
                                <img src="/images/webicons/data-management.png" alt="" />

                                </div> */}
                                <h3 className="odometer">
                                    <VisibilitySensor
                                        onChange={this.onVisibilityChange}
                                        offset={{
                                            top: 10,
                                        
                                        }}
                                        delayedCall
                                    >
                                        <CountUp
                                            start={0}
                                            end={
                                                this.state.didViewCountUp
                                                    ? 10
                                                    : 0
                                            }
                                            duration={3}
                                        />
                                    </VisibilitySensor>
                                    <span>+</span>
                                </h3>
                                <p>Wealth Managers</p>
                            </div>
                        </div>

                        <div className="fan col-lg-3 col-sm-6">
                            <div className="single-funfact">
                                {/* <div className="icon">
                                <img src="/images/webicons/profit.png " alt="" />

                                </div> */}
                                <h3 className="odometer">
                                  <span>$</span>
                                    <VisibilitySensor
                                        onChange={this.onVisibilityChange}
                                        offset={{
                                            top: 10
                                        }}
                                        delayedCall
                                    >
                                        <CountUp
                                            start={0}
                                            end={
                                                this.state.didViewCountUp
                                                    ? 27
                                                    : 0
                                            }
                                            duration={3}
                                        />
                                    </VisibilitySensor>
                                    <span>Bn</span>
                                </h3>
                                <p>Youngest group  controller of $27Bn FTSE 200 UK Listed Group</p>
                            </div>
                        </div>

                        <div className="fan col-lg-3 col-sm-6">
                            <div className="single-funfact">
                                {/* <div className="icon">
                                <img src="/images/webicons/fixed-asset.png" alt="" />
                                </div> */}
                                <h3 className="odometer">
                                  <span>$</span>
                                    <VisibilitySensor
                                        onChange={this.onVisibilityChange}
                                        offset={{
                                            top: 10
                                        }}
                                        delayedCall
                                    >
                                        <CountUp
                                            start={0}
                                            end={
                                                this.state.didViewCountUp
                                                    ? 11
                                                    : 0
                                            }
                                            duration={3}
                                        />
                                    </VisibilitySensor>
                                    <span>Bn</span>
                                </h3>
                                <p>
Previously built a $5 Billion company, raised $6 Billion 
 in capital.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default FunFact2;
