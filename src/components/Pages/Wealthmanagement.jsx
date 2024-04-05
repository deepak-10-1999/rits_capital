import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Cta from '../Cta'
import IconBox from '../IconBox'
import SectionHeading from '../SectionHeading'

import PageHeading from '../PageHeading'
import Div from '../Div'
import Spacing from '../Spacing'
import SocialWidget from '../Widget/SocialWidget'

const Wealthmanagement = () => {
  return (
   <>
   <PageHeading 
     title=' Wealth Management'
     bgSrc='/images/animated/wealthbanner.png'
     pageLinkText='Wealth Management Servic'
   />
   
   <Spacing lg='80' md='80'/>
   <Div className="container">
     <Div className="row align-items-center">
       {/* <Div className="col-xl-6 col-lg-6 ">
        
         <Div className="cs-radius_15 cs-shine_hover_1">
        
         <img src="/images/animated/wealth.png" alt="Member"className="w-100"  />
         </Div>
        
       </Div> */}
     <Div className="col-lg-12">
         <Spacing lg='0' md='45'/>
         <Div className="cs-section_heading cs-style1">
           <h2 className="cs-section_title text-center">  Wealth Management </h2>
           <Div className="cs-height_10 cs-height_lg_10" />
           {/* <h3 className="cs-section_subtitle">Product Designer</h3> */}
           <Div className="cs-height_5 cs-height_lg_5" />
           {/* <div className="d-flex align-items-center"><Div className="cs-separator cs-accent_bg mx-1" />◈<Div className="cs-separator cs-accent_bg mx-1" /></div> */}
           <Div className="cs-height_45 cs-height_lg_25" />
           <p className="cs-m0 text-center">At Rits Capital, we offer personalized wealth management, focusing on maximizing returns while minimizing risks. With transparent communication and a client-centric approach, we guide clients towards their financial goals. We become trusted partners in our clients’ financial journey through following services under wealth management.
</p>
           <Div className="cs-height_25 cs-height_lg_20" />
           {/* <p className="cs-m0">We address critical financial needs and offer tailored solutions using our strategies and methodologies. Our services focus on execution and planned investments for future success. We provide effective products and facilities tailored to meet their specific requirements. </p> */}
           <Div className="cs-height_45 cs-height_lg_30" />
           {/* <SocialWidget/> */}
         </Div>
       </Div>
     </Div>
     
   </Div>
   <Spacing lg='80' md='80'/>

   <Div className="container">
     <Div className="row align-items-center">
     
       <Div className="col-lg-6 order-lg-1 order-2">
         <Spacing lg='0' md='45'/>
         <Div className="cs-section_heading cs-style1">
           <h2 className="cs-section_title">Portfolio Management Services (PMS)</h2>
           <Div className="cs-height_10 cs-height_lg_10" />
           {/* <h3 className="cs-section_subtitle">Product Designer</h3> */}
           <Div className="cs-height_5 cs-height_lg_5" />
          <div className="d-flex align-items-center"><Div className="cs-separator cs-accent_bg mx-1" />◈<Div className="cs-separator cs-accent_bg mx-1" /></div>
           <Div className="cs-height_45 cs-height_lg_25" />
           <ul>

<li>Personalized strategy for financial success in Portfolio Management Service.</li>
<li>Expert team tackles market challenges to enhance your investment journey.</li>
<li>Collaborative planning creates tailored portfolios meeting customer requirements.</li></ul>
           {/* <p className="cs-m0">Portfolio Management Service where financial success meets personalized strategy. Our dedicated team of experts directs the market challenges to check your investment journey. Our team has collaborative planning and creates separate portfolios which focus on customer’s requirements 
</p> */}
           <Div className="cs-height_25 cs-height_lg_20" />
           <p className="cs-m0"></p>
           <Div className="cs-height_45 cs-height_lg_30" />
           {/* <SocialWidget/> */}
         </Div>
       </Div>
       <Div className="col-xl-6 col-lg-6 order-lg-2 order-1">
         {/* <Div className="cs-radius_15 cs-shine_hover_1"> */}
           <img src="/images/animated/pms.png" alt="Member" className="w-100" />
         {/* </Div> */}
       </Div>
     </Div>

     
   </Div>
   <Spacing lg='80' md='80'/>

   <Div className="container">
     <Div className="row align-items-center">
       <Div className="col-xl-6 col-lg-6 ">
         {/* <Div className="cs-radius_15 cs-shine_hover_1"> */}
           <img src="/images/animated/start.png" alt="Member" className="w-100" />
         {/* </Div> */}
       </Div>
       <Div className="col-lg-6">
         <Spacing lg='0' md='45'/>
         <Div className="cs-section_heading cs-style1 show">
           <h2 className="cs-section_title">Startup Investment </h2>
           <Div className="cs-height_10 cs-height_lg_10" />
           {/* <h3 className="cs-section_subtitle">Product Designer</h3> */}
           <Div className="cs-height_5 cs-height_lg_5" />
          <div className="d-flex align-items-center"><Div className="cs-separator cs-accent_bg mx-1" />◈<Div className="cs-separator cs-accent_bg mx-1" /></div>
           <Div className="cs-height_45 cs-height_lg_25" />
           <ul>

<li>Rigorous startup selection criteria ensure investment quality.</li>
<li>Emphasizing innovation and scalability for strong growth potential.</li>
<li>Our Wealth Management services prioritize high-potential startup investments.</li></ul>
           {/* <p className="cs-m0">Our Wealth Management services extend beyond traditional investment avenues, embracing the dynamic world of start-up investments. Our dedicated Start-Up Investment Division is a testament to our commitment to generating substantial wealth for our clients through strategic investments in high-potential start-ups. 
 
</p> */}
{/* <button className="cs-newsletter_btn show"><span>M</span></button> */}
{/* <Div className="cs-height_25 cs-height_lg_20" />
<p className='hide'>At Rits Capital, we believe that the future belongs to those who innovate and adapt. Our Wealth Management services, particularly in start-up investments, are designed to place you at the forefront of this future. Whether you are new to start-up investments or looking to diversify your portfolio, we invite you to explore the possibilities with us. Let’s embark on a journey of growth, innovation, and unparalleled returns.</p> */}

           <Div className="cs-height_25 cs-height_lg_20" />
           <p className="cs-m0"></p>
           <Div className="cs-height_45 cs-height_lg_30" />
           {/* <SocialWidget/> */}
         </Div>
       </Div>
     </Div>
     
   </Div>
   <Spacing lg='80' md='80'/>

   <Div className="container">
     <Div className="row align-items-center">
     
       <Div className="col-lg-6 order-lg-1 order-2">
         <Spacing lg='0' md='45'/>
         <Div className="cs-section_heading cs-style1 show ">
           <h2 className="cs-section_title">Real Estate Investment </h2>
           <Div className="cs-height_10 cs-height_lg_10" />
           {/* <h3 className="cs-section_subtitle">Product Designer</h3> */}
           <Div className="cs-height_5 cs-height_lg_5" />
          <div className="d-flex align-items-center"><Div className="cs-separator cs-accent_bg mx-1" />◈<Div className="cs-separator cs-accent_bg mx-1" /></div>
           <Div className="cs-height_45 cs-height_lg_25" />
           <ul>
           <li> Data-driven expertise for prime real estate investments.</li>
         
           
           <li>Focus on prime locations and quality construction.</li>
           <li>Benefit from attractive margins appreciation on construction projects.</li></ul>
           {/* <p className="cs-m0">Our Real Estate Investment team is a cornerstone of our commitment to offering diversified, high-return investment opportunities. We stand at the forefront of the industry, leveraging data-driven decision-making processes to identify and capitalize on the most promising real estate investments. 
 </p>
 <Div className="cs-height_25 cs-height_lg_20" />
 <p className='hide'>Investing in real estate offers a unique blend of safety, growth, and income. Our data-driven approach, combined with deep market insights and a focus on quality, positions us to capitalize on the most lucrative real estate opportunities. Whether you’re looking to diversify your investment portfolio or seeking stable income through rental yields, our Real Estate Investment division is equipped to exceed your expectations.</p> */}
 <Div className="cs-height_10 cs-height_lg_10" />
           {/* <h3 className="cs-section_subtitle">
</h3> */}
           {/* <Div className="cs-height_25 cs-height_lg_20" /> */}
          
           <p className="cs-m0">

</p>
           <Div className="cs-height_25 cs-height_lg_20" />

<p></p>
           <Div className="cs-height_45 cs-height_lg_30" />
           {/* <SocialWidget/> */}
         </Div>
       </Div>
       <Div className="col-xl-6 col-lg-6  order-lg-2 order-1">
         {/* <Div className="cs-radius_15 cs-shine_hover_1"> */}
         <img src="/images/animated/real.png" alt="Member" className="w-100" />

            {/* </Div> */}
       </Div>
     </Div>
     
   </Div>
   {/* <Spacing lg='80' md='80'/> */}

   <Div className="container">
     <Div className="row align-items-center">
       <Div className="col-xl-6 col-lg-6">
         {/* <Div className="cs-radius_15 cs-shine_hover_1"> */}
         <img src="/images/animated/sme.png" alt="Member" className="w-100" />

         {/* </Div> */}
       </Div>
       <Div className="col-lg-6 ">
         <Spacing lg='0' md='45'/>
         <Div className="cs-section_heading cs-style1 show">
           <h2 className="cs-section_title">SME IPO Investment </h2>
           <Div className="cs-height_10 cs-height_lg_10" />
           {/* <h3 className="cs-section_subtitle">Unlocking Exceptional Returns

</h3>
           <Div className="cs-height_5 cs-height_lg_5" /> */}
          <div className="d-flex align-items-center"><Div className="cs-separator cs-accent_bg mx-1" />◈<Div className="cs-separator cs-accent_bg mx-1" /></div>
           <Div className="cs-height_45 cs-height_lg_25" />
           <ul>
            <li>Investing in promising SMEs for exponential growth potential.</li>
           <li>Leveraging deep industry expertise and thorough due diligence for informed investment decisions.</li>
           <li>Designed to unlock significant returns for our investors, targeting an ambitious 10X return on investments.</li>
           </ul>

           {/* <p className="cs-m0">We specialize in identifying and investing in Small and Medium-sized Enterprises (SMEs) that are on the brink of exponential growth. Our SME IPO investment strategy is designed to unlock significant returns for our investors, targeting an ambitious 10X return on investments. 


     </p>
     <Div className="cs-height_25 cs-height_lg_20" />
     <p className='hide'>
Investing in SME IPOs presents a unique opportunity to be part of a company’s growth story from an early stage. These investments not only offer the potential for significant financial returns but also allow investors to contribute to the success of innovative and dynamic businesses poised for expansion.

</p> */}
           {/* <Div className="cs-height_25 cs-height_lg_20" />
           <p className="cs-m0">Exceptional Returns
Stringent Selection
Robust Growth Potential: <br />
Ethical Governance: <br />
Clear Path to Profitability
Extensive Analysis <br />
Investing in Pre-IPO opportunities with Rits Capital offers investors a unique chance to participate in the growth story of tomorrow's market leaders. With a proven track record of delivering exceptional returns, a rigorous selection process, and a commitment to ethical governance, we provide investors with access to lucrative investment opportunities that have the potential to reshape industries and generate significant wealth. <br />Join us as we navigate the exciting world of Pre-IPO investments and unlock unparalleled growth potential for our investors.
</p>
           <Div className="cs-height_45 cs-height_lg_30" /> */}
           {/* <SocialWidget/> */}
         </Div>
       </Div>
     </Div>
     
   </Div>
   
   <Spacing lg='80' md='80'/>

<Div className="container">
  <Div className="row align-items-center">
  
    <Div className="col-lg-6 order-lg-1 order-2">
      <Spacing lg='0' md='45'/>
      <Div className="cs-section_heading cs-style1 show ">
        <h2 className="cs-section_title">Pre-IPO Investment  </h2>
        <Div className="cs-height_10 cs-height_lg_10" />
        {/* <Div className="cs-height_10 cs-height_lg_10" /> */}
           {/* <h3 className="cs-section_subtitle">Unlocking Growth Potential
</h3>
           <Div className="cs-height_5 cs-height_lg_5 " /> */}
           <div className="d-flex align-items-center"><Div className="cs-separator cs-accent_bg mx-1" />◈<Div className="cs-separator cs-accent_bg mx-1" /></div>
           <Div className="cs-height_45 cs-height_lg_25" />
           <ul><li>We offer investors unparalleled opportunities to participate in the success of tomorrow's market leaders.</li>
           <li>Robust growth potential with a track record of delivering average returns exceeding 80%.</li>
          
           <li>With a rigorous selection process, we provide investors with access to lucrative investment opportunities that have the potential to reshape industries and generate significant wealth.
</li>
           </ul>

           {/* <p className="cs-m0">Our Pre-IPO Investment division is dedicated to identifying and investing in companies poised for exponential growth before they go public. With a track record of delivering average returns exceeding 80%, we offer investors unparalleled opportunities to participate in the success of tomorrow's market leaders. <br /> Here's why our Pre-IPO investments stand out:
</p>
           <Div className="cs-height_25 cs-height_lg_20" />
           <p className=" hide cs-m0">
Investing in Pre-IPO opportunities with Rits Capital offers investors a unique chance to participate in the growth story of tomorrow's market leaders. With a proven track record of delivering exceptional returns, a rigorous selection process, and a commitment to ethical governance, we provide investors with access to lucrative investment opportunities that have the potential to reshape industries and generate significant wealth.
</p> */}
<Div className="cs-height_45 cs-height_lg_30" />
        {/* <SocialWidget/> */}
      </Div>
    </Div>
    <Div className="col-xl-6 col-lg-6  order-lg-2 order-1">
      {/* <Div className="cs-radius_15 cs-shine_hover_1"> */}
        <img src="/images/animated/pre.png" alt="Member" className="w-100" />
      {/* </Div> */}
    </Div>
  </Div>
  
</Div>
 
   <Spacing lg='80' md='80'/>
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

export default Wealthmanagement