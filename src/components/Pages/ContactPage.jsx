import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';
import { pageTitle } from '../../helper';
import Div from '../Div';
import PageHeading from '../PageHeading';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import IconBox from '../IconBox';





export default function ContactPage({ withIcon }) {
  pageTitle('Contact Us');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedin: '',
    mobile: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const isEmailValid = (email) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isMobileValid = (mobile) => {
    // Basic mobile number validation (10 digits)
    const mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobile);
  };

  const isLinkedInValid = (linkedin) => {
    // Basic LinkedIn URL validation
    const linkedinRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[A-Za-z0-9_-]+\/?$/;
    return linkedinRegex.test(linkedin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
 if (!formData.name) {
      alert('Name is mandatory!');
      return;
    }
    // Validate email, mobile, and LinkedIn before submitting
    if (!isEmailValid(formData.email)) {
      alert('Invalid email address');
      return;
    }

    if (!isMobileValid(formData.mobile)) {
      alert('Invalid mobile number');
      return;
    }

    if (formData.linkedin && !isLinkedInValid(formData.linkedin)) {
      alert('Invalid LinkedIn URL');
      return;
    }


    const comment = `contact - ${formData.mobile}, Linkdin url - ${formData.linkedin}`;

    // Create payload for API
    const payload = {
      name: formData.name,
      email: formData.email,
      // linkedin: "contact-" + formData.linkedin, 
      sponsor: `contact-${formData.mobile}`,

      message: comment,
      website: "ritscapital",
    };

    // Send data to the API
    const rawResponse = await fetch("https://api.khubero.com/website/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // Handle the API response as needed
    const response = await rawResponse.json();
    console.log(response);

    setFormData({
      name: '',
      email: '',
      linkedin: '',
      mobile: '',
      message: '',
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="Contact Us"
        bgSrc="/images/team_hero_bg.png"
        pageLinkText="Contact"
      />
      <Spacing lg="50" md="10" />
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeading
              title=""
              subtitle="Get in Touch"
            />
          </div>
          <div className="col-lg-8 mx-auto">
            <form onSubmit={handleSubmit} action="#" className="row">
              <div className="col-sm-6">
                <label className="cs-primary_color">Full Name*</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="cs-form_field"
                />
              </div>
              <div className="col-sm-6">
                <label className="cs-primary_color">Email*</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="cs-form_field"
                />
              </div>
              <div className="col-sm-6">
                <label className="cs-primary_color">Linkedin*</label>
                <input
                  type="text"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  className="cs-form_field"
                />
              </div>
              <div className="col-sm-6">
                <label className="cs-primary_color">Mobile*</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="cs-form_field"
                />
              </div>
              <div className="col-sm-12">
                <label className="cs-primary_color">Message*</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  cols="30"
                  rows="7"
                  className="cs-form_field"
                ></textarea>
              </div>
              <Spacing lg="10" md="10" />
              <div className="col-sm-12">
                <button type="submit" className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Spacing lg="50" md="80" />
      <div className="container">
        <SectionHeading
          title="Our Presence"
          subtitle=""
          variant="cs-style1 text-center"
        />
        <div className="row">
          <div className="contactt d-flex justify-content-evenly">
            <ul className="cs-menu_widget cs-style1 cs-mp0">
              <h5>INDIA</h5>
              <li>
                <span className="cs-accent_color">
                  <Icon icon="material-symbols:add-call-rounded" />
                </span>
                +919711996998
              </li>
              <li>
                <span className="cs-accent_color">
                  <Icon icon="mdi:envelope" />
                </span>
                rit@ritscapital.com
              </li>
              <li>
                <span className="cs-accent_color">
                  <Icon icon="mdi:map-marker" />
                </span>
                A-96, Sector-63, Noida, India
              </li>
            </ul>
                 {/* <ul className="cs-menu_widget cs-style1 cs-mp0">
         <h5>UAE</h5>
         <li>
           {<span className='cs-accent_color'><Icon icon="material-symbols:add-call-rounded" /></span>}
           +1 925 915 6637
         </li>
         <li>
           {<span className='cs-accent_color'><Icon icon="mdi:envelope" /></span>}
           rit@ritscapital.com
         </li>
         <li>
           {<span className='cs-accent_color'><Icon icon="mdi:map-marker" /></span>}
            SUITE 7000 CASPER
       WY 82609, <br/>USA
         </li>
       </ul> */}
            <ul className="cs-menu_widget cs-style1 cs-mp0">
              <h5>US</h5>
              <li>
                <span className="cs-accent_color">
                  <Icon icon="material-symbols:add-call-rounded" />
                </span>
                +1 925 915 6637
              </li>
              <li>
                <span className="cs-accent_color">
                  <Icon icon="mdi:envelope" />
                </span>
                rit@ritscapital.com
              </li>
              <li>
                <span className="cs-accent_color">
                  <Icon icon="mdi:map-marker" />
                </span>
                SUITE 7000 CASPER, WY 82609, <br />USA
              </li>
            </ul>
          </div>
        </div>
      </div>
     
      <Spacing lg="150" md="80" />
      <div className="cs-google_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd"
          allowFullScreen
          title="Google Map"
        />
      </div>
      <Spacing lg="50" md="40" />
    </>
  );
}
