// import React from 'react'
// import Div from '../Div'
// import './funfact.scss'

// export default function FunFact({variant, title, subtitle, data}) {
  
//   return (
//     <Div className={variant ? `cs-funfact_wrap ${variant}`: 'cs-funfact_wrap'}>
//       <Div className="cs-funfact_shape"  style={{backgroundImage: 'url( /images/contactbg.avif)'}} />
//       <Div className="cs-funfact_left">
//         <Div className="cs-funfact_heading">
//           <h2>{title}</h2>
//           <p>{subtitle}</p>
//         </Div>
//       </Div>
//       <Div className="cs-funfact_right">
//         <Div className="cs-funfacts">
//         {data.map((item, index) => (
//           <Div className="cs-funfact cs-style1" key={index}>
//             <Div className="cs-funfact_number cs-primary_font cs-semi_bold cs-primary_color"><span/>{item.factNumber}</Div>
//             <Div className="cs-funfact_text">
//               <span className="cs-accent_color">+</span>
//               <p>{item.title}</p>
//             </Div>
//           </Div>
//           ))}
//         </Div>
//       </Div>
//     </Div>
//   )
// }
import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import './funfact.scss'

 
class FunFact extends React.Component {
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
            <section className="funfacts-area ptb-120"style={{backgroundImage: 'url(./images/funfact_shape_bg.svg)'}}>
                  <div className="cs-shape_3 d-none d-md-block cs-to_up">
          <img src="/images/Dots1.png" alt="Shape" />
        </div>
                <div className="container">
                    <div className="row">
                        <div className="fan col-lg-3 col-sm-6">
                            <div className="single-funfact">
                                {/* <div className="icon">
                                <img src="/images/webicons/profit.png" alt="" />
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
                                                    ? 10
                                                    : 0
                                            }
                                            duration={3}
                                        />
                                    </VisibilitySensor>
                                    <span>Bn</span>
                                </h3>
                                <p>Raised and Counting</p>
                            </div>
                        </div>
                        
                        <div className="fan col-lg-3 col-sm-6">
                            <div className="single-funfact">
                                {/* <div className="icon">
                                    <img src="/images/webicons/ipo.png" alt="" />
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
                                                    ? 80
                                                    : 0
                                            }
                                            duration={3}
                                        />
                                    </VisibilitySensor>
                                    <span>%</span>
                                </h3>
                                <p>Average return on Pre-IPO investments </p>
                            </div>
                        </div>

                        <div className="fan col-lg-3 -sm-6">
                            <div className="single-funfact mx-6">
                                {/* <div className="icon">
                                <img src="/images/webicons/return-on-investment.png" alt="" />
                                    
                                </div> */}
                                <h3 className="odometer">
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
                                                    ? 200
                                                    : 0
                                            }
                                            duration={3}
                                        />
                                    </VisibilitySensor>
                                    <span>X</span>
                                </h3>
                                <p>Return on Investments</p>
                            </div>
                        </div>

                        <div className="fan col-lg-3 -sm-6">
                            <div className="single-funfact">
                                {/* <div className="icon">
                                <img src="/images/webicons/asset.png" alt="" />
                                    
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
                                                    ? 250
                                                    : 0
                                            }
                                            duration={3}
                                        />
                                    </VisibilitySensor>
                                    <span>Mn+</span>
                                </h3>
                                <p>Asset Under Management</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default FunFact;