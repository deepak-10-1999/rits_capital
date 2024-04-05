import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import { FaInstagramSquare } from "react-icons/fa";
import Div from '../Div';
import { FaFacebookSquare } from "react-icons/fa";

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link to='https://www.linkedin.com/company/79799394/admin/feed/posts/' className="cs-center">
        <Icon icon="fa6-brands:linkedin-in" />
      </Link>
      {/* <Link to='/' className="cs-center">
        <Icon icon="fa6-brands:twitter" />               
      </Link> */}
      <Link to='https://www.instagram.com/rits_capital/' className="cs-center">
        {/* <Icon icon="fa6-brands:youtube" /> */}
        <FaInstagramSquare />
      </Link>
      <Link to='https://www.facebook.com/profile.php?id=61554233074916' className="cs-center">
        {/* <Icon icon="fa6-brands:slack" /> */}
        <FaFacebookSquare />
       

      </Link>
    </Div>
  )
}
