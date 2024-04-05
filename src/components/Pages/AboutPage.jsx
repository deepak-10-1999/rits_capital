import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import FunFact from '../FunFact';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import TeamSlider from '../Slider/TeamSlider';
import Spacing from '../Spacing';

export default function AboutPage() {
  pageTitle('About');

  const funfaceData = [
    {
      title: 'Global Happy Clients',
      factNumber: '40K',
    },
    {
      title: 'Project Completed',
      factNumber: '50K',
    },
    {
      title: 'Team Members',
      factNumber: '245',
    },
    {
      title: 'Digital products',
      factNumber: '550',
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Start Page Heading Section */}
      {/* <PageHeading
        title="About Us"
        bgSrc="images/about_hero_bg.png"
        pageLinkText="About Us"
      /> */}
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="About Rits Capital"
              subtitle=""
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              At Rits Capital, we understand that wealth management is more than just numbers. It's about your goals, your dreams, and your legacy. We partner with you to create a personalized plan that grows your wealth, protects your assets, and helps you achieve your financial aspirations.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="/images/animated/about.png"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          {/* <Div className="col-lg-6">
            <img
              src="/images/h18.jpg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-6">
            <img
              src="/images/h17.jpg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div> */}
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}

      {/* Start Fun Fact Section */}
      <Div className="container">
        <FunFact
          title="Our fun fact"
          subtitle="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
          data={funfaceData}
        />
      </Div>
      {/* End Fun Fact Section */}

      {/* Start Why Choose Section */}
      <Spacing lg="75" md="55" />
      {/* <Spacing lg="50" md="80" /> */}
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-6 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="/images/animated/mission1.png"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-6  col-lg-6">
            <SectionHeading
              title="Mission"
              subtitle=""
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              Our Mission is to empower our clients through the delivery of precise, timely, and efficient investment banking services. 
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
              By providing strategic financial solutions, we equip our clients with the tools to make informed decisions, fostering the growth and success of their businesses on a global scale.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      <Spacing lg="50" md="80" />

      <Div className="container">
        <Div className="row">
          
          <Div className="col-xl-6  col-lg-6 order-lg-1 order-2">
            <SectionHeading
              title="Vision"
              subtitle=""
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              Our Vision is to emerge as a premier and highly regarded Investment Banking firm. We are dedicated to delivering expert financial solutions, strategic investment guidance, and unparalleled services tailored for a global clientele.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
              Our aim is to be recognized as the foremost customer-centric firm, providing specialized expertise in investment banking, and ensuring financial success and growth for all our clients on the global stage.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
          <Div className="col-xl-6 col-lg-6 order-lg-2 order-1 ">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="/images/animated/mission2.png"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
        </Div>
      </Div>
      {/* <Spacing lg="100" md="80" /> */}
     
      {/* End Why Choose Section */}

      {/* Start Team Section */}
      {/* <Spacing lg="145" md="80" /> */}
      <Spacing lg="75" md="55" />
      <Div className="container">
        <SectionHeading
          title="Our Team"
          subtitle=""
          variant="cs-style1"
        />
        <Spacing lg="55" md="45" />
        <TeamSlider />
      </Div>
      {/* End Team Section */}

      {/* Start CTA Section */}
      {/* <Spacing lg="150" md="80" /> */}
      <Spacing lg="75" md="55" />
      <Div className="container">
        <Cta
          title="Let's discuss and take the journey <br/>to  <i>growth</i> together"
          btnText="Setup Free Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg_2.jpeg"
        />
      </Div>
      <Spacing lg="50" md="80" />
      {/* End CTA Section */}
    </>
  );
}
