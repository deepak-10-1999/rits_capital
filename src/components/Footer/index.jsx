import React from 'react'
import Div from '../Div'
import ContactInfoWidget from '../Widget/ContactInfoWidget'
import MenuWidget from '../Widget/MenuWidget'
import Newsletter from '../Widget/Newsletter'
import SocialWidget from '../Widget/SocialWidget'
import TextWidget from '../Widget/TextWidget'
import './footer.scss'

export default function Footer({copyrightText, logoSrc, logoAlt, text}) {
  const copyrightLinks = [
    {
      title: 'Terms of Use',
      // href: '/'
    },
    {
      title: 'Privacy Policy',
      // href: '/'
    }
  ]
  const aboutMenu = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'Who we are',
      href: '/about'
    },
    {
      title: 'What we do',
      href: '/Wealthmanagement'
    },
  
    {
      title: 'Why us',
      href: '/Whyus'
    },
    {
      title: 'Contact',
      href: '/contact'
    },
    {
      title: 'Blog',
      href: '/blog'
    },
  ]

  
  const serviceMenu = [
    {
      title: 'Wealth Management Service',
      href: '/Wealthmanagement'
    },
    {
      title: 'Investment Banking',
      href: '/Investment'
    },
    {
      title: 'Financial Support Services',
      href: '/Accounting'
    },
    {
      title: 'Start-Up Incubation',
      href: '/Acceleration'
    },
    {
      title: 'Pre-IPO',
      href: '/Preipo'
    },
  ]

  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <div className="small" style={{ width:"40%",marginBottom:"1px"}} ><img src="/images/ritslogo1.png" alt="" /></div>
                <TextWidget 
                  // logoSrc='/images/ritslogo1.png' 
                  // logoAlt='Logo'
                  text ='Rits Capital is an independent investment firm with offices in United States , India, United Kingdom, Singapore, Hong Kong and UAE.'
                />
                {/* <SocialWidget/> */}
              </Div>
            </Div>
            <Div className="col-lg-2 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading='Services'/>
              </Div>
            </Div>
            <Div className="col-lg-2 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={aboutMenu} menuHeading='Quick Link'/>
              </Div>
            </Div>
            
            <Div className="col-lg-2 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title='Contact Us'/>
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter 
                  title='Subscribe' 
                  subtitle='Want to know secret to grow your wealth

                  Contact us Now +91 9810915695
                  
                 ' 
                  placeholder=' support@ritscapital.com'
                />

              </Div>
              <SocialWidget/>

            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">Copyright © 2024 Rits Capital.</Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=' cs-style2'/>
          </Div>
        </Div>
      </Div>
    </footer>
  )
}
