import React from 'react'
import Cta from '../Cta'
import IconBox from '../IconBox'
import PageHeading from '../PageHeading'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import TestimonialSlider from '../Slider/TestimonialSlider'
import Spacing from '../Spacing'

const Whyus = () => {
  return (
    <>
    <PageHeading 
        title='Why us'
        bgSrc='/images/service_hero_bg.png'
        pageLinkText="Why Us"
      />
      {/* <Spacing lg='145' md='80'/> */}
            {/* Start Why Choose Section */}
            <Spacing lg="50" md="80" />
            <Div className="container">
        <Div className="row">
          <Div className="col-xl-6 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="/images/animated/whyus1.png"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading
              title="Qualified Professionals"
              subtitle=""
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              The team comprises of experienced professionals who are CPAs, FCCAs, ACAs, CMAs, CFAs, and MBAs and provide high-quality services.
              </p>
              {/* <Spacing lg="15" md="15" />
              <p className="cs-m0">
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service. Our team applies its wide-ranging experience to
                determining.
              </p> */}
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* <Spacing lg="100" md="80" /> */}
      <Spacing lg="75" md="55" />
      <Div className="container">
        <Div className="row">
          
          <Div className="col-xl-5 col-lg-6 order-lg-1 order-2">
            <SectionHeading
              title="With Global Presence"
              subtitle=""
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              RITS Capital is an Investment banking firm with offices in the US, India, UK, and UAE, offering multi-disciplinary services.
              </p>
              <Spacing lg="15" md="15" />
              {/* <p className="cs-m0">
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service. Our team applies its wide-ranging experience to
                determining.
              </p> */}
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
          <Div className="col-xl-6 offset-xl-1 col-lg-6 order-lg-2 order-1  ">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="/images/animated/whyus2.png"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* <Spacing lg="100" md="80" /> */}
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-6 col-lg-6 ">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="/images/animated/whyus3.png"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6 ">
            <SectionHeading
              title="Providing all in One Solutions"
              subtitle=""
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0 ">
              Our team is dedicated to meeting all of your business consulting needs with our all-in-one solution.
              </p>
              <Spacing lg="15" md="15" />
              {/* <p className="cs-m0">
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service. Our team applies its wide-ranging experience to
                determining.
              </p> */}
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
    
      {/* <Spacing lg="50" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-6 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="/images/h36.jpg"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-6  col-lg-6">
            <SectionHeading
              title="Values"
              subtitle="Why Choose Us"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service. Our team applies its wide-ranging experience to
                determining. Through our years of experience, we’ve also learned
                that while each channel.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service. Our team applies its wide-ranging experience to
                determining.
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
          
          <Div className="col-xl-6  col-lg-6">
            <SectionHeading
              title="Impact"
              subtitle="Why Choose Us"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service. Our team applies its wide-ranging experience to
                determining. Through our years of experience, we’ve also learned
                that while each channel.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service. Our team applies its wide-ranging experience to
                determining.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
          <Div className="col-xl-6 col-lg-6 ">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="/images/h37.jpg"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="50" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-6 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="/images/h38.jpg"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-6  col-lg-6">
            <SectionHeading
              title="Innovation"
              subtitle="Why Choose Us"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service. Our team applies its wide-ranging experience to
                determining. Through our years of experience, we’ve also learned
                that while each channel.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service. Our team applies its wide-ranging experience to
                determining.
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
          
          <Div className="col-xl-6  col-lg-6">
            <SectionHeading
              title="Excellence"
              subtitle="Why Choose Us"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service. Our team applies its wide-ranging experience to
                determining. Through our years of experience, we’ve also learned
                that while each channel.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service. Our team applies its wide-ranging experience to
                determining.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
          <Div className="col-xl-6 col-lg-6 ">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="/images/h39.jpg"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
        </Div>
      </Div> */}
      {/* End Why Choose Section */}
    </>
  )
}

export default Whyus