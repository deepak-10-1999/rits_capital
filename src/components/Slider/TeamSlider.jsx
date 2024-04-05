import { Icon } from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Team from '../Team';

export default function TeamSlider() {
  /** Team Member Data **/
  const teamData = [
    {
      memberImage: '/images/h1.jpg',
      memberName: 'Jyoti  Nathani',
      memberDesignation: 'Equity Research',
      memberPoints: ['Jyoti has over 8 years of experience in financial analysis, including equity research, strategic advisory, and credit analysis. She has a strong track record of success in identifying investment opportunities, developing financial models, and conducting research.', "Jyoti has held positions at renowned financial institutions such as GSN Invest, Marsh & McLennan, Moody's Analytics, and MCube Financial LLC.",'Jyoti is proficient in a variety of financial analysis techniques, including fundamental analysis, DCF valuation, and multiples valuation. She is also adept at identifying financial red flags and formulating financial queries.',"Jyoti is a highly motivated and results-oriented individual with a strong work ethic"],
      // memberPoints: 'page',

      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: '/images/member_2.jpeg',
      memberName: 'Rounak Mishra ',
      memberDesignation: 'Wealth Manager',
      memberPoints: ['Ex edelweiss & A certified finance professional from KPMG India, Rounak is an experienced UHNI(Affluent) wealth manager with a demonstrated history of working in the financial services and capital Markets.','Managing the AUM of 1500Cr+ across multiple asset classes for Individuals, corporates, institutions and family offices.','Skilled in strategic planning, equity research via macro top down approach, wealth consulting, capital raising, and pre-IPO investments.  ','Delivered the phenomenal returns of 8X and 112% in a year in pre-IPO and listed equity investments respectively.'],
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: '/images/member_3.jpeg',
      memberName: 'Vikram Verma',
      memberDesignation: 'Equity Research',
      memberPoints: ['Manages a portfolio exceeding Rs. 500 crore with a projected return of 40-50%.',"Utilizes Fibonacci Retracement and Gann Theory to identify stocks for investment.","Specializes in portfolio management and investment advisory services within the Indian equity markets.","Demonstrates a track record of consistently outperforming the market, delivering superior returns.","Adept at generating market-beating returns through strategic investment decisions and meticulous portfolio management."],
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: '/images/member_4.jpeg',
      memberName: 'Praveen Dhingra',
      memberDesignation: 'Equity Operations',
      memberPoints: ["Praveen brings forth over a decade of professional experience, specializing in trading and investment endeavors.","A former Angel One employee with dedicated 2.5 years to client engagement within the realms of Equity, Mutual funds, and Derivatives.","Expertise in this domain is evident through his consistent and effective application of technical knowledge in producing insightful and visually compelling charts.", "Leveraging technical expertise and employing sophisticated options strategies, proficiently manage funds within a hedge fund framework by skillfully implementing hedging mechanisms to safeguard and optimize financial portfolios."],
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: '/images/member_1.jpeg',
      memberName: 'Sachin Nandwani',
      memberDesignation: 'VP - Corporate Finance',
      memberPoints: ["Chartered Accountant with 20+ years of extensive experience in Corporate and Project Finance, Treasury, and Fund Management.      ",
       "Proficient in Trade and Structured Finance, Budgeting, and Forecasting.",
       "Skilled in structuring and negotiating advantageous terms for deals and transactions with Banking and Financial Institutions.",
      " Demonstrated ability to evaluate and establish control mechanisms for business assurances and governance.",
    "Experienced in implementing improved financial and management reporting tools.",
    "Expertise in conducting cost improvement and efficiency enhancement studies."
  ],
    
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: '/images/member_1.jpeg',
      memberName: 'ASITAVA B',
      memberDesignation: 'VP - Corporate Finance',
      memberPoints: ['MBA in Finance with over 19+ years of experience.', 
      'Specialized in strategic financial planning and financial reporting.',
       'Skilled in MIS (Management Information Systems) and financial control.',
      "Well-versed in structuring and negotiating favorable terms for deals and transactions.",
      "    Proven ability to evaluate and set up control mechanisms for business assurances and governance.",
      "Experienced in implementing improved financial and management reporting tools.",
    ],
      

      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: '/images/member_1.jpeg',
      memberName: '  ANURAG BANSAL',
      memberDesignation: 'AVP - Corporate Finance',
      memberPoints: ['Experienced Deputy General Manager of Finance in the mining and metals industry.      ', 
      'Proficient in Financial Planning and Budgeting.',
       'Skilled in Funding and Working Capital Management.',
      "Experienced in Cash Flow Management and Finalization of Accounts.",
      "    Knowledgeable in Taxation and Transfer Pricing.",
      " Expertise in Risk Management.",
    ],
      

      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    










    {
      memberImage: '/images/member_1.jpeg',
      memberName: 'VAIBHAV',
      memberDesignation: 'VP- Business Development',
      memberPoints: ['Chartered Accountant with 20+ years of extensive experience in Corporate and Project Finance, Treasury, and Fund Management.', 
      'Proficient in Trade and Structured Finance, Budgeting, and Forecasting.',
       'Skilled in structuring and negotiating advantageous terms for deals and transactions with Banking and Financial Institutions.',
      "Demonstrated ability to evaluate and establish control mechanisms for business assurances and governance.",
      "Experienced in implementing improved financial and management reporting tools.",
      "Expertise in conducting cost improvement and efficiency enhancement studies.",
    ],
      

      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {

      
      
      
      
     
      
     
      
      
     
     
      memberImage: '/images/member_1.jpeg',
      memberName: ' Nitish Bhardwaj',
      memberDesignation: ' VP- Operations',
      memberPoints: ['CPA(US), MBA, M com', 
      '13+ years of expertise in US GAAP compliance and technical accounting standards.',
       'Proven track record in preparing for and managing quarterly and annual audits.',
      " Extensive experience in SEC filings and PCAOB review processes.",
      " Strong background in SOX implementation, including process documentation and control testing.",
      "Skilled in management accounting, budget preparation, and providing strategic financial insights.",
    ],
      

      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: '/images/member_1.jpeg',
      memberName: 'Dr. Eish Taneja',
      memberDesignation: 'VP - TECHNICAL ACCOUNTING',
      memberPoints: ['CPA(US), FCA, LLB', 
      '      Over 18 years of specialized expertise in technical accounting and US GAAP research.',
       ' Proven track record in supporting SEC filings and consolidating comments.',
      "Extensive experience in implementing software systems like Workday for accounting purposes.",
      "  Proficient in preparing and reviewing monthly, quarterly, and annual financial statements.",
      "  Skilled in presenting financial information to audit committees and boards, with previous Big 4 audit management experience.",
    ],
      

      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
  ];
  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-24 cs-arrow_style2">
      {teamData.map((item, index) => (
        <Div key={index}>
          <Team
            memberImage={item.memberImage}
            memberName={item.memberName}
            memberDesignation={item.memberDesignation}
            memberPoints={item.memberPoints}
            

            memberSocial={item.memberSocial}
          />
        </Div>
      ))}
    </Slider>
  );
}
