import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';

import Hero6 from '../Hero/Hero6';

export default function ShowcasePortfolioHome() {
  pageTitle('Showcase Portfolio');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const showcaseData = [
    {
      title: 'Rits Capital',
      imgUrl: '/images/b1.png',
      // href: '/case-study/case-study-details',
      subtitle:"At Rits Capital, we understand that wealth management is more than just numbers. It's about your goals, your dreams, and your legacy. We partner with you to create a personalized plan that grows your wealth, protects your assets, and helps you achieve your financial aspirations.",
    },
    {
      title: 'Wealth Management Service',
      imgUrl: '/images/b2.png',
      // href: '/case-study/case-study-details',
      subtitle:"At Rits Capital, our primary goal is to assist clients in achieving their financial goals with a personalized approach to wealth management. We tailor our services to individual needs, focusing on maximizing returns while minimizing risks across various investment avenues. ",
    },
    {
      title: 'Investment',
      imgUrl: '/images/b3.png',
      // href: '/case-study/case-study-details',
      subtitle:"Unlock the power of financial success with Rits Capital's Investment Banking expertise. From guiding Initial Public Offerings (IPOs) to managing Mergers and acquisitions (M&A), our seasoned team ensures strategic growth. ",
    },
    {
      title: 'Financial Support Services',
      imgUrl: '/images/b4.png',
      // href: '/case-study/case-study-details',
      subtitle:"Experience financial precision with Rits Capital's comprehensive accounting services. Our experts bring accuracy and transparency to your financial records, ensuring compliance with Tax regulations. ",
    },
    {
      title: 'Startup Incubation',
      imgUrl: '/images/b5.png',
      // href: '/case-study/case-study-details',
      subtitle:"Fuel your business growth with Rits Capital's Acceleration services. Experience personalized mentorship and handholding that propels your venture to new heights. Navigate strategic roll-ups with our expert guidance, optimizing synergies for unparalleled success. ",
    },
    {
      title: 'Pre-IPO',
      imgUrl: '/images/b6.png',
      // href: '/case-study/case-study-details',
      subtitle:"Embark on your Pre-IPO journey with Rits Capital, where unique opportunities await. Explore exclusive deals in unlisted shares, strategically curated to align with your investment goals. ",
    },
  ];

  return (
    <Hero6
      heroSocialLinks={heroSocialLinks}
      socialLinksHeading="Follow Us"
      showcaseData={showcaseData}
      
      
    />
  );
}
