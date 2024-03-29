import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Div from '../Div'
import Spacing from '../Spacing'
import SocialWidget from '../Widget/SocialWidget'

const Acceleration = () => {
  return (
   <>
   <PageHeading 
     title='Acceleration '
     bgSrc='/images/team_hero_bg.jpeg'
     pageLinkText='Acceleration '
   />
   <Spacing lg='150' md='80'/>
   <Div className="container">
     <Div className="row align-items-center">
       <Div className="col-xl-5 col-lg-6">
         <Div className="cs-radius_15 cs-shine_hover_1">
           <img src="/images/h26.jpg" alt="Member" className="w-100" />
         </Div>
       </Div>
       <Div className="col-lg-6 offset-xl-1">
         <Spacing lg='0' md='45'/>
         <Div className="cs-section_heading cs-style1">
           <h2 className="cs-section_title">Acceleration </h2>
           <Div className="cs-height_10 cs-height_lg_10" />
           {/* <h3 className="cs-section_subtitle">Product Designer</h3> */}
           <Div className="cs-height_5 cs-height_lg_5" />
           <Div className="cs-separator cs-accent_bg" />
           <Div className="cs-height_45 cs-height_lg_25" />
           <p className="cs-m0">Fuel your business growth with Rits Capital's Acceleration services. Experience personalized mentorship and handholding that propels your venture to new heights. Navigate strategic roll-ups with our expert guidance, optimizing synergies for unparalleled success. Unlock a dynamic office space that fosters innovation and collaboration.</p>
           <Div className="cs-height_25 cs-height_lg_20" />
           <p className="cs-m0"> At Rits Capital, we go beyond funding – we provide comprehensive Funding Support, ensuring your business has the financial backing it needs to thrive. Propel your journey with Rits Capital's Acceleration services, where mentorship, strategy, infrastructure, and funding converge for a transformative business trajectory.</p>
           <Div className="cs-height_45 cs-height_lg_30" />
           {/* <SocialWidget/> */}
         </Div>
       </Div>
     </Div>
     
   </Div>
   <Spacing lg='50' md='80'/>

   <Div className="container">
     <Div className="row align-items-center">
     
       <Div className="col-lg-6">
         <Spacing lg='0' md='45'/>
         <Div className="cs-section_heading cs-style1">
           <h2 className="cs-section_title">Mentorship and Handholding </h2>
           <Div className="cs-height_10 cs-height_lg_10" />
           <h3 className="cs-section_subtitle">Navigating Success Together </h3>
           <Div className="cs-height_5 cs-height_lg_5" />
           <Div className="cs-separator cs-accent_bg" />
           <Div className="cs-height_45 cs-height_lg_25" />
           <p className="cs-m0">At Rits Capital, we believe in more than just financial support. Our Mentorship and Handholding program provides personalized guidance, leveraging the wealth of experience within our network. Count on us to be your trusted mentor, guiding you through every financial decision. </p>
           <Div className="cs-height_25 cs-height_lg_20" />
           {/* <p className="cs-m0">Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.</p> */}
           <Div className="cs-height_45 cs-height_lg_30" />
           {/* <SocialWidget/> */}
         </Div>
       </Div>
       <Div className="col-xl-5 col-lg-6 offset-xl-1">
         <Div className="cs-radius_15 cs-shine_hover_1">
           <img src="/images/h27.jpg" alt="Member" className="w-100" />
         </Div>
       </Div>
     </Div>
     
   </Div>
   <Spacing lg='50' md='80'/>

   <Div className="container">
     <Div className="row align-items-center">
       <Div className="col-xl-5 col-lg-6">
         <Div className="cs-radius_15 cs-shine_hover_1">
           <img src="/images/h28.jpg" alt="Member" className="w-100" />
         </Div>
       </Div>
       <Div className="col-lg-6 offset-xl-1">
         <Spacing lg='0' md='45'/>
         <Div className="cs-section_heading cs-style1">
           <h2 className="cs-section_title">Strategic Rolls-ups </h2>
           <Div className="cs-height_10 cs-height_lg_10" />
           <h3 className="cs-section_subtitle">Elevate Your Business </h3>
           <Div className="cs-height_5 cs-height_lg_5" />
           <Div className="cs-separator cs-accent_bg" />
           <Div className="cs-height_45 cs-height_lg_25" />
           <p className="cs-m0">Experience strategic growth with Rits Capital's Strategic Roll-ups. We help consolidate businesses for enhanced efficiency and market positioning. Our experts navigate the complexities, ensuring a seamless integration that propels your business to new heights. </p>
           <Div className="cs-height_25 cs-height_lg_20" />
           {/* <p className="cs-m0">Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.</p> */}
           <Div className="cs-height_45 cs-height_lg_30" />
           {/* <SocialWidget/> */}
         </Div>
       </Div>
     </Div>
     
   </Div>
   <Spacing lg='50' md='80'/>

   <Div className="container">
     <Div className="row align-items-center">
     
       <Div className="col-lg-6">
         <Spacing lg='0' md='45'/>
         <Div className="cs-section_heading cs-style1">
           <h2 className="cs-section_title">Office Space </h2>
           <Div className="cs-height_10 cs-height_lg_10" />
           <h3 className="cs-section_subtitle">Prime Locations, Seamless Operation</h3>
           <Div className="cs-height_5 cs-height_lg_5" />
           <Div className="cs-separator cs-accent_bg" />
           <Div className="cs-height_45 cs-height_lg_25" />
           <p className="cs-m0">Rits Capital offers more than financial solutions. Gain access to our premium Office Spaces strategically located for your convenience. Elevate your operations in a professional environment designed to foster productivity and success. </p>
           <Div className="cs-height_25 cs-height_lg_20" />
           {/* <p className="cs-m0">Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.</p> */}
           <Div className="cs-height_45 cs-height_lg_30" />
           {/* <SocialWidget/> */}
         </Div>
       </Div>
       <Div className="col-xl-5 col-lg-6 offset-xl-1">
         <Div className="cs-radius_15 cs-shine_hover_1">
           <img src="/images/h29.jpg" alt="Member" className="w-100" />
         </Div>
       </Div>
     </Div>
     
   </Div>
   <Spacing lg='50' md='80'/>
   <Div className="container">
     <Div className="row align-items-center">
       <Div className="col-xl-5 col-lg-6">
         <Div className="cs-radius_15 cs-shine_hover_1">
           <img src="/images/h30.jpg" alt="Member" className="w-100" />
         </Div>
       </Div>
       <Div className="col-lg-6 offset-xl-1">
         <Spacing lg='0' md='45'/>
         <Div className="cs-section_heading cs-style1">
           <h2 className="cs-section_title">Empowering Your Financial Journey </h2>
           <Div className="cs-height_10 cs-height_lg_10" />
           {/* <h3 className="cs-section_subtitle">Product Designer</h3> */}
           <Div className="cs-height_5 cs-height_lg_5" />
           <Div className="cs-separator cs-accent_bg" />
           <Div className="cs-height_45 cs-height_lg_25" />
           <p className="cs-m0">Embark on your financial journey with confidence, supported by Rits Capital's Funding Support. Whether you're launching a startup or expanding operations, our financial experts assist in securing the capital you need. Benefit from our extensive network and propel your business forward. </p>
           <Div className="cs-height_25 cs-height_lg_20" />
           {/* <p className="cs-m0">Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.</p> */}
           <Div className="cs-height_45 cs-height_lg_30" />
           {/* <SocialWidget/> */}
         </Div>
       </Div>
     </Div>
     
   </Div>
 
   <Spacing lg='50' md='80'/>
   {/* <Div className="container">
     <Cta 
       title='Let’s disscuse make <br />something <i>cool</i> together' 
       btnText='Apply For Meeting' 
       btnLink='/contact' 
       bgSrc='/images/cta_bg.jpeg'
     />
   </Div> */}
 </>
  )
}

export default Acceleration