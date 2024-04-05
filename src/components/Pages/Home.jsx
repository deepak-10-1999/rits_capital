import React, { useEffect } from 'react';
import Card from '../Card';
import FunFact from '../FunFact';
import Hero from '../Hero';
import Portfolio2 from '../Portfolio/Portfolio2';
import Portfolio3 from '../Portfolio/Portfolio3';
import Div from '../Div';
// import Banner from './Banner';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import FunFact2 from '../FunFact/FunFact2';
import MovingText2 from '../MovingText/MovingText2';
// import { FaWhatsapp } from "react-icons/fa";
import Cta from '../Cta';
import LogoList from '../LogoList';
import MovingText from '../MovingText';
import PortfolioSlider from '../Slider/PortfolioSlider';
import PostSlider from '../Slider/PostSlider';
import TestimonialSlider from '../Slider/TestimonialSlider';
import TeamSlider from '../Slider/TeamSlider';
import VideoModal from '../VideoModal';
import TimelineSlider from '../Slider/TimelineSlider';
import { pageTitle } from '../../helper';
// import ShowcasePortfolioHome from './ShowcasePortfolioHome';
// import Hero7 from '../Hero7';
import CaseStudyShowcaseHome from './CaseStudyShowcaseHome';

export default function Home() {
  pageTitle('Home');
  

  // Hero Social Links
  const heroSocialLinks = [
    {
      name: 'Behance',
      links: '/',
    },
    {
      name: 'Twitter',
      links: '/',
    },
  ];
  const funfaceData2 = [
    {
      title: 'WEALTH MANAGERS',
      factNumber: '10',
    },
    {
      title: ' HNIs, Ultra HNIs',
      factNumber: '100',
    },
    {
      title: 'CXO',
      factNumber: '10',
    },
    {
      title: 'Investors and Founders',
      factNumber: '100',
    },
  ]
  const serviceData1 = [
    {
      title: 'Our',
      // href: '/service/service-details',
    },
    {
      title: 'Event',
      // href: '/service/service-details',
    },
    {
      title: 'Partners',
      // href: '/service/service-details',
    },
  ];
  // FunFact Data

  const funfaceData = [
    {
      title: 'ASSETS UNDER MANAGEMENT',
      factNumber: '$250M',
    },
    {
      title: 'AVERAGE RETURN',
      factNumber: '80%',
    },
    {
      title: 'RAISED SO FAR',
      factNumber: '$10Bn',
    },
    {
      title: 'YEARS OF COMBINED EXPERIENCE',
      factNumber: '55',
    },
  ];
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const portfolioData = [
    {
      title: 'Wealth Management Services',
      subtitle:"",
      subPoints: [" Personalized wealth management services for individual needs.",
      " Maximize returns while minimizing risks through strategic planning.",
      " Rigorous analysis tailored to your financial objectives."
    ],
      btnText: 'See Details',
      btnLink: '/Wealthmanagement',
      imageUrl: '/images/animated/Wealth.png',
      category: 'Web Development',
    },
    {
      title: 'Investment Banking',
      subtitle: "",
      subPoints: [" Strategic growth through IPOs and M&As guidance.",
      "Access tailored Private Equity solutions for funding including Equity and Debts Capital Markets.",
      " Navigate with precision and sustainability to enable successful financial decisions"
    ],
  
      btnText: 'See Details',
      btnLink: '/Investment',
      imageUrl: '/images/animated/invest.png',
      category: 'Branding',
    },
    {
      title: (
        <>
          Financial <span style={{ color: '' }}>Support</span> Services
        </>
      ),
      subtitle: "",
      subPoints: [" Precision accounting: Ensure compliance with tax regulations.",
      "  Tailored advisory: Strategic financial guidance for your goals.",
      "  Meticulous audit support and holistic accounting solutions for accurate financial processes."
    ],
    
      btnText: 'See Details',
      btnLink: '/Accounting',
      imageUrl: '/images/animated/Financial.png',
      category: 'UI Design',
    },
    {
      title: 'Startup Incubation ',
      subtitle: "",
    
      subPoints: ["Accelerate growth with personalized mentorship and strategic roll-ups.",
      "  Access dynamic office space fostering innovation and collaboration.",
      " Comprehensive funding support for thriving businesses for unparalleled success."
    ],
      btnText: 'See Details',
      btnLink: '/Acceleration',
      imageUrl: '/images/animated/startup.png',
      category: 'Apps Design',
    },
    // {
    //   title: 'Pre-IPO ',
    //   subtitle: "",
   
    //   subPoints: [" Discover exclusive unlisted share deals aligned with your  investment goals.",
    //   " Diversify with tailored baskets of shares for wealth creation.",
    //   " Explore unparalleled Pre-IPO opportunities and strategic investment avenues."
    // ],
    //   btnText: 'See Details',
    //   btnLink: '/Preipo',
    //   imageUrl: '/images/animated/preipo.png',
    //   category: 'Apps Design',
    // },

  ];

  return (
    <>
      {/* Start Hero Section */}
      {/* <Hero7/> */}
      <CaseStudyShowcaseHome 
      />

      {/* <ShowcasePortfolioHome/> */}
      {/* <Banner/> */}
      {/* <Hero
        title="Rits Capital"
        subtitle="At Rits Capital, we understand that wealth management is more than just numbers. It's about your goals, your dreams, and your legacy. We partner with you to create a personalized plan that grows your wealth, protects your assets, and helps you achieve your financial aspirations."
        btnText="Get a Quote"
        btnLink="/contact"
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/h1.jpg"
        
      /> */}
     
     <Div  className="glow d-none d-md-block" ><img id='i1' src="/images/Glow.svg" alt="" /></Div>
      
      {/* End Hero Section */}
  {/* <Spacing lg="50" md="80" /> */}
      {/* Start FunFact Section */}
      <div className="container">
        <FunFact/>
        {/* <FunFact
          variant="cs-type1"
          title="Our fun fact"
          subtitle="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
          data={funfaceData}
        /> */}
      </div>

      {/* // About */}
      {/* <Spacing lg="50" md="80" />
       <Div className="container">
        <Div className="row align-items-center cs-column_reverse_lg">
          <Div className="col-lg-5">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <img
                src="/images/h2.jpg"
                alt="About"
                className="cs-w100 cs-radius_5"
              />
            </Div>
          </Div>
          <Div className="col-lg-6 offset-lg-1">
            <SectionHeading
              title="About Us"
              subtitle="At Rits Capital, we understand that wealth management is more than just numbers. It's about your goals, your dreams, and your legacy. We partner with you to create a personalized plan that grows your wealth, protects your assets, and helps you achieve your financial aspirations."
              btnText="Learn More"
              btnLink="/about"
            />
            <Spacing lg="0" md="40" />
          </Div>
        </Div>
      </Div> */}
      {/* what we do */}
      
   

      <Div className="glow d-none d-md-block"><img id='i4' src="/images/Glow1.svg" alt="" /></Div>
      <Spacing lg="50" md="45" />
      <Div className="container">
        <SectionHeading
          title="What We Do"
          subtitle=""
          variant="cs-style1 text-center red-text"
          
        />
        <Spacing lg="50" md="45" />
      </Div>
      {portfolioData.map((item, index) =>
        index % 2 === 0 ? (
          <Div key={index}>
             <Portfolio3
              title={item.title}
              subtitle={item.subtitle}
              subPoints={item.subPoints}
              btnText={item.btnText}
              btnLink={item.btnLink}
              imageUrl={item.imageUrl}
            
              // category={item.category}
            />

           
            <Spacing lg="50" md="50" />
      {/* <Div className="glow"><img id='i4' src="/images/Glow1.svg" alt="" /></Div> */}

          </Div>
        ) : (
          <Div key={index}>
            <Portfolio2
              title={item.title}
              subtitle={item.subtitle}
              subPoints={item.subPoints}
              btnText={item.btnText}
              btnLink={item.btnLink}
              imageUrl={item.imageUrl}
              
              // category={item.category}
            />
            <Spacing lg="50" md="70" />
          </Div>
        ),
      )}
      {/* End FunFact Section */}

      {/* Start Service Section */}
      {/* <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Services we can help you with"
                subtitle="What Can We Do"
                btnText="See All Services"
                btnLink="/service"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="UI/UX design"
                    link="/service/service-details"
                    src="/images/service_1.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="React.js Development"
                    link="/service/service-details"
                    src="/images/service_2.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Digital Marketing"
                    link="/service/service-details"
                    src="/images/service_3.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Technology"
                    link="/service/service-details"
                    src="/images/service_4.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div> */}
      {/* End Service Section */}

      {/* Start Portfolio Section */}
      {/* <Spacing lg="150" md="50" />
      <Div>
        <Div className="container">
          <SectionHeading
            title="Portfolio to explore"
            subtitle="Latest Projects"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <PortfolioSlider />
      </Div> */}
      {/* End Portfolio Section */}

      {/* Start Awards Section */}
      {/* <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_2">
        <Div className="cs-shape_2">
          <Div />
        </Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              
              <SectionHeading
                title="Why Us"
                subtitle="Why Us"
                bgSrc="/images/contactbg.avif"
                variant="cs-style1"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <TimelineSlider />
            </Div>
          </Div>
        </Div>
      </Div> */}
      {/* End Awards Section */}

      {/* Start Video Block Section */}
      {/* <Spacing lg="130" md="70" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
          Our agile process is ability to adapt and respond to change. Agile
          organizations view change as an opportunity, not a threat.
        </h2>
        <Spacing lg="70" md="70" />
        <VideoModal
          videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
          bgUrl="/images/video_bg.jpeg"
        />
      </Div> */}
      {/* End Video Block Section */}

      {/* Start Team Section */}
      {/* <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      <Spacing lg="150" md="80" /> */}
      {/* End Team Section */}

      {/* Start Testimonial Section */}
      {/* <TestimonialSlider /> */}
      {/* End Testimonial Section */}
      {/* <Div className="glow"><img id='i2' src="/images/Glow.svg" alt="" /></Div> */}
      <Spacing lg="50" md="80" />
     
      <Div className="container">
        <FunFact2
          // data={funfaceData2}
          // variant="cs-no_shadow"
          // bgUrl="/images/contactbg.avif"
        />
      </Div>
      {/* Start Blog Section */}
      {/* <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Explore recent publication"
                subtitle="Our Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div> */}
      {/* End Blog Section */}

      {/* Start MovingText Section */}
      {/* <Spacing lg="125" md="70" />
      <MovingText text="Our reputed world wide partners" />
       */} 
       {/* <Spacing lg="50" md="80" />  */}
       <Spacing lg="50" md="45" />
      <Div className="container">
        <SectionHeading
          title="Our Event Patners"
          subtitle=""
          variant="cs-style1 text-center red-text"
          
        />
        <Spacing lg="50" md="45" />
      </Div>
       {/* <Div><h3>our Event part</h3></Div> */}
      <MovingText2 data={serviceData1} />
      <Spacing lg="50" md="80" /> 
      {/* <Spacing lg="105" md="70" /> */}
      {/* End MovingText Section */}
      {/* <Spacing lg="150" md="80" /> */}

      {/* Start LogoList Section */}
      {/* <Div className="container">
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" /> */}
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="glow d-none d-md-block"><img id='i3' src="/images/Glow.svg" alt="" /></Div>

      <Div className="container">
        <Cta
          title="Let's discuss and take the journey <br/>to  <i>growth</i> together"cta
          btnText="Setup Free Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      <Spacing lg="50" md="80" />
   
      {/* End CTA Section */}
    </>
  );
}
