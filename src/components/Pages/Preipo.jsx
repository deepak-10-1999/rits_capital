import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Div from '../Div'
import Spacing from '../Spacing'
import SocialWidget from '../Widget/SocialWidget'

const Preipo = () => {
  return (
   <>
   <PageHeading 
     title='Pre IPO '
     bgSrc='/images/team_hero_bg.png'
     pageLinkText='Pre IPO '
   />
   <Spacing lg='150' md='80'/>
   <Div className="container">
     <Div className="row align-items-center">
       <Div className="col-xl-6 col-lg-6">
         <Div className="cs-radius_15 cs-shine_hover_1">
           <img src="/images/animated/preipo.png" alt="Member" className="w-100" />
         </Div>
       </Div>
       <Div className="col-lg-6 ">
         <Spacing lg='0' md='45'/>
         <Div className="cs-section_heading cs-style1">
           <h2 className="cs-section_title">Pre IPO </h2>
           <Div className="cs-height_10 cs-height_lg_10" />
           {/* <h3 className="cs-section_subtitle">Product Designer</h3> */}
           {/* <Div className="cs-height_5 cs-height_lg_5" /> */}
          <div className="d-flex align-items-center"><Div className="cs-separator cs-accent_bg mx-1" />◈<Div className="cs-separator cs-accent_bg mx-1" /></div>
           <Div className="cs-height_45 cs-height_lg_25" />
           
           <p className="cs-m0">Embark on your Pre-IPO journey with Rits Capital, exploring exclusive unlisted share deals tailored to your investment goals. Benefit from the following holistic IPO services and navigate uncharted territories for success.</p>
           <Div className="cs-height_25 cs-height_lg_20" />
           {/* <p className="cs-m0">Rits Capital's Pre-IPO expertise ensures that you stay ahead in the ever-evolving financial landscape, securing your position for success. Join us as we navigate the uncharted territories of unlisted shares, bringing you unparalleled opportunities and strategic investment avenues. Elevate your investment experience with Rits Capital's Pre-IPO offers.</p>
           <Div className="cs-height_45 cs-height_lg_30" /> */}
           {/* <SocialWidget/> */}
         </Div>
       </Div>
     </Div>
     
   </Div>
   <Spacing lg='50' md='80'/>
   <Div className="container">
     <Div className="row align-items-center">
     
       <Div className="col-lg-6 order-md-1 order-2">
         <Spacing lg='0' md='45'/>
         <Div className="cs-section_heading cs-style1">
           <h2 className="cs-section_title">Unlisted Shares </h2>
           <Div className="cs-height_10 cs-height_lg_10" />
           {/* <h3 className="cs-section_subtitle">Unlocking Investment Opportunities </h3> */}
           {/* <Div className="cs-height_5 cs-height_lg_5" /> */}
          <div className="d-flex align-items-center"><Div className="cs-separator cs-accent_bg mx-1" />◈<Div className="cs-separator cs-accent_bg mx-1" /></div>
           <Div className="cs-height_45 cs-height_lg_25" />
           <ul>
                <li>Discover untapped market potential with Rits Capital's Unlisted Shares.</li>
                <li>Diversify portfolio with exclusive investment opportunities beyond stock exchange.</li>
                <li>Our experts guide you through this unique avenue, providing insights into potential growth.</li>
          </ul>
           {/* <p className="cs-m0">Explore the untapped potential of the market with Rits Capital's Unlisted Shares platform. Diversify your portfolio and access exclusive investment opportunities beyond the traditional stock exchange. Our experts guide you through this unique avenue, providing insights into potential growth. </p>
           <Div className="cs-height_25 cs-height_lg_20" /> */}
           {/* <p className="cs-m0">Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.</p> */}
           <Div className="cs-height_45 cs-height_lg_30" />
           {/* <SocialWidget/> */}
         </Div>
       </Div>
       <Div className="col-xl-6 col-lg-6 order-md-2 order-1">
         <Div className="cs-radius_15 cs-shine_hover_1">
           <img src="/images/webicons/g36.gif" alt="Member" className="w-100" />
         </Div>
       </Div>
     </Div>
     
   </Div>
   <Spacing lg='50' md='80'/>

   <Div className="container">
     <Div className="row align-items-center">
       <Div className="col-xl-6 col-lg-6">
         <Div className="cs-radius_15 cs-shine_hover_1">
           <img src="/images/webicons/g38.gif" alt="Member" className="w-100" />
         </Div>
       </Div>


       <Div className="col-lg-6  ">
         <Spacing lg='0' md='45'/>
         <Div className="cs-section_heading cs-style1">
           <h2 className="cs-section_title">Deals </h2>
           <Div className="cs-height_10 cs-height_lg_10" />
           <h3 className="cs-section_subtitle">Product Designer</h3>
           {/* <Div className="cs-height_5 cs-height_lg_5" /> */}
          <div className="d-flex align-items-center"><Div className="cs-separator cs-accent_bg mx-1" />◈<Div className="cs-separator cs-accent_bg mx-1" /></div>
           <Div className="cs-height_45 cs-height_lg_25" />
           <ul>
                <li>	Diversify portfolio with high-potential companies on our platform.</li>
                <li>Benefit from strategic insights, expert guidance, and a seamless investment experience.</li>
                <li>Join Rits Capital for exclusive access to promising unlisted shares.</li>
          </ul>
           {/* <p className="cs-m0">Explore lucrative investment opportunities in esteemed unlisted shares like Lava, Plymertech, NSE, and more at Rits Capital. Our platform opens doors to high-potential companies, allowing you to diversify your portfolio with unique assets. Benefit from strategic insights, expert guidance, and a seamless investment experience. Don't miss out on the best deals – join Rits Capital for exclusive access to unlisted shares that promise growth and value. </p>
           <Div className="cs-height_25 cs-height_lg_20" /> */}
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
     
       <Div className="col-lg-6 order-md-1 order-2">
         <Spacing lg='0' md='45'/>
         <Div className="cs-section_heading cs-style1">
           <h2 className="cs-section_title">Baskets </h2>
           <Div className="cs-height_10 cs-height_lg_10" />
           {/* <h3 className="cs-section_subtitle">Curated Investment Portfolios </h3> */}
           {/* <Div className="cs-height_5 cs-height_lg_5" /> */}
          <div className="d-flex align-items-center"><Div className="cs-separator cs-accent_bg mx-1" />◈<Div className="cs-separator cs-accent_bg mx-1" /></div>
           <Div className="cs-height_45 cs-height_lg_25" />
           <ul>
                <li>Introducing Baskets: Curated portfolios tailored to your goals.</li>
                <li>Diversified approach for optimal wealth management and returns.</li>
                <li>Let our experts guide you to align with aspirations.</li>
          </ul>
           {/* <p className="cs-m0">Rits Capital introduces Baskets – thoughtfully curated investment portfolios tailored to your financial goals. These diversified baskets offer a strategic approach to wealth management, providing a mix of assets for optimal returns. Let our experts guide you in building a portfolio that aligns with your aspirations. </p>
           <Div className="cs-height_25 cs-height_lg_20" /> */}
           {/* <p className="cs-m0">Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.</p> */}
           <Div className="cs-height_45 cs-height_lg_30" />
           {/* <SocialWidget/> */}
         </Div>
       </Div>
       <Div className="col-xl-6 col-lg-6 order-md-2 order-1">
         <Div className="cs-radius_15 cs-shine_hover_1">
           <img src="/images/webicons/g18(1).gif" alt="Member" className="w-100" />
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

export default Preipo