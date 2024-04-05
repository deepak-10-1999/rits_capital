import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SocialWidget from '../Widget/SocialWidget';
import Newsletter from '../Widget/Newsletter';
import './header.scss';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import Div from '../Div';
import DropDown from './DropDown';

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(true);
      }
    });
  }, []);

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-capitalise ${
          variant ? variant : ''
        } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" to="/">
                  <img className='image' src="/images/ritslogo1.png" alt="Logo" />
                </Link>
              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? 'block' : 'none'}` }}
                  >
                    <li 
                    className="menu-item-has-children"
                    >
                      <NavLink to="/" onClick={() => setMobileToggle(false)}>
                        Home
                      </NavLink>
                      <DropDown>
                        <ul>
                          <li>
                            <Link to="/" onClick={() => setMobileToggle(false)}>
                              Main Home
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="photography-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Photography Agency
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="creative-portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Creative Portfolio
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="digital-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Digital Agency
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="marketing-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Marketing Agency
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="showcase-portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Showcase Portfolio
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="case-study-showcase"
                              onClick={() => setMobileToggle(false)}
                            >
                              Case Study Showcase
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li>
                      <NavLink
                        to="about"
                        onClick={() => setMobileToggle(false)}
                      >
                        Who we are
                      </NavLink>
                    </li>
                    {/* <li 
                    className="menu-item-has-children"
                    >
                      <NavLink
                        to="service"
                        onClick={() => setMobileToggle(false)}
                      >
                        Services
                      </NavLink>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              to="service"
                              onClick={() => setMobileToggle(false)}
                            >
                              Services
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/service/service-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Service Details
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li> */}
                    <li className="menu-item-has-children">
                      <NavLink
                        to="Wealthmanagement"
                        onClick={() => setMobileToggle(false)}
                      >
                        What we do
                      </NavLink>
                      <DropDown>
                        <ul>
                          {/* <li>
                            <Link
                              to="portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Portfolio
                            </Link>
                          </li> */}
                          <li>
                            <Link
                              to="Wealthmanagement"
                              onClick={() => setMobileToggle(false)}
                            >
                              Wealth Management Service
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="Investment"
                              onClick={() => setMobileToggle(false)}
                            >
                              Investment Banking
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="Accounting"
                              onClick={() => setMobileToggle(false)}
                            >
                              Financial Support Services
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="Acceleration"
                              onClick={() => setMobileToggle(false)}
                            >
                              Startup Incubation
                            </Link>
                          </li>
                          {/* <li>
                            <Link
                              to="Preipo"
                              onClick={() => setMobileToggle(false)}
                            >
                              Pre-IPO
                            </Link>
                          </li> */}
                          {/* <li>
                            <Link
                              to="portfolio/portfolio-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Portfolio Details
                            </Link>
                          </li> */}
                        </ul>
                      </DropDown>
                    </li>
                   
                    <li>
                      <NavLink
                        to="Whyus"
                        onClick={() => setMobileToggle(false)}
                      >
                        Why us
                      </NavLink>
                    </li>
                    <li
                    //  className="menu-item-has-children"
                     >
                      <Link to="/contact" onClick={() => setMobileToggle(false)}>
                        Contact
                      </Link>
                      {/* <DropDown>
                        <ul>
                          <li>
                            <Link
                              to="/contact"
                              onClick={() => setMobileToggle(false)}
                            >
                              Contact
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/team"
                              onClick={() => setMobileToggle(false)}
                            >
                              Team
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/team/team-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Team Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/case-study/case-study-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Case Study Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/faq"
                              onClick={() => setMobileToggle(false)}
                            >
                              FAQ
                            </Link>
                          </li>
                        </ul>
                      </DropDown> */}

                    </li>
                    <li className="menu-item-has-children">
                      <NavLink to="blog" onClick={() => setMobileToggle(false)}>
                        Blog
                      </NavLink>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              to="blog"
                              onClick={() => setMobileToggle(false)}
                            >
                              Blog
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="blog/blog-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Blog Details
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs-toggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>
              <Div className="cs-main_header_right">
                <Div className="cs-toolbox">
                  <span
                    className="cs-icon_btn"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      <Div
        className={
          sideHeaderToggle ? 'cs-side_header active' : 'cs-side_header'
        }
      >
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div className="cs-side_header_in">
          {/* <Div className="cs-side_header_shape" /> */}
          <Link className="cs-site_branding" to="/">
            <img className='w-100 h-200 rounded-none ' src="images/ritslogo1.png" alt="Logo" />
          </Link>
          {/* <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
              Do you have a project in your <br /> mind? Keep connect us.
            </h2>
          </Div> */}
          <Div className="cs-side_header_box">
            <ContactInfoWidget title="Contact Us" withIcon />
          </Div>
          <Div className="cs-side_header_box">
            <Newsletter
              title="Subscribe"
              subtitle="Rits Capital is an independent investment firm with offices in United States , India, United Kingdom, Singapore, Hong Kong and UAE."
              placeholder="example@gmail.com"
            />
          </Div>
          <Div className="cs-side_header_box">
            <SocialWidget />
          </Div>
        </Div>
      </Div>
    </>
  );
}
