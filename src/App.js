import { Route, Routes } from 'react-router-dom';

import AboutPage from './components/Pages/AboutPage';
import BlogPage from './components/Pages/BlogPage';
import BlogDetailsPage from './components/Pages/BlogDetailsPage';
import ContactPage from './components/Pages/ContactPage';
import ErrorPage from './components/Pages/ErrorPage';
import Home from './components/Pages/Home';
import PortfolioDetailsPage from './components/Pages/PortfolioDetailsPage';
import ServiceDetailsPage from './components/Pages/ServiceDetailsPage';
import ServicesPage from './components/Pages/ServicesPage';
import TeamPage from './components/Pages/TeamPage';
import PortfolioPage from './components/Pages/PortfolioPage';
import TeamDetails from './components/Pages/TeamDetails';
import PhotographyAgencyHome from './components/Pages/PhotographyAgencyHome';
import CreativePortfolioHome from './components/Pages/CreativePortfolioHome';
import DigitalAgencyHome from './components/Pages/DigitalAgencyHome';
import MarketingAgencyHome from './components/Pages/MarketingAgencyHome';
import ShowcasePortfolioHome from './components/Pages/ShowcasePortfolioHome';
import CaseStudyShowcaseHome from './components/Pages/CaseStudyShowcaseHome';
import Layout from './components/Layout';
import CaseStudyDetailsPage from './components/Pages/CaseStudyDetailsPage';
import FaqPage from './components/Pages/FaqPage';
import Wealthmanagement from "./components/Pages/Wealthmanagement";
import Investment from "./components/Pages/Investment";
import Preipo from "./components/Pages/Preipo";
import Accounting from "./components/Pages/Accounting";
import Acceleration from "./components/Pages/Acceleration";
import Whyus from './components/Pages/Whyus';
import { useEffect } from 'react';
import { FaWhatsapp } from "react-icons/fa";
// import Banner from './components/Pages/Banner';


const External = ()=>{
  let currentHeight = 0;
  currentHeight = window.screen.width >600 ? window.screen.height - 142 : window.screen.height;
  useEffect(()=>{
    window.location.href = '/investor-symposium/index.html';
  },[])
  return(
    <>
{/* <iframe class="frame" src="/investor-symposium/index.html" name="preview-frame" frameborder="0" noresize="noresize" data-view="fullScreenPreview" allow="geolocation 'self'; autoplay 'self'" style={{height:`${currentHeight}px`}}>
</iframe> */}

    
    </>
  )
}



function App() {
  return (
    <>
      <Routes>
      <Route
            path="investor-symposium/"
            element={<External />}
          />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="photography-agency"
            element={<PhotographyAgencyHome />}
          />
          <Route path="digital-agency" element={<DigitalAgencyHome />} />
          <Route path="marketing-agency" element={<MarketingAgencyHome />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="service" element={<ServicesPage />} />
          {/* <Route path="Banner" element={<Banner />} /> */}
          
          <Route
            path="service/:serviceDetailsId"
            element={<ServiceDetailsPage />}
          />
          <Route path="Wealthmanagement" element={<Wealthmanagement />} />
          <Route path="Investment" element={<Investment />} />
          <Route path="Accounting" element={<Accounting />} />
          <Route path="Acceleration" element={<Acceleration />} />
          <Route path="Preipo" element={<Preipo />} />
          <Route path="Whyus" element={<Whyus />} />


          <Route path="portfolio" element={<PortfolioPage />} />
          <Route
            path="portfolio/:portfolioDetailsId"
            element={<PortfolioDetailsPage />}
          />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:blogDetailsId" element={<BlogDetailsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="team/:teamDetails" element={<TeamDetails />} />
          <Route
            path="/case-study/:caseStudyDetailsId"
            element={<CaseStudyDetailsPage />}
          />
          <Route path="faq" element={<FaqPage />} />
        </Route>
        <Route
          path="/"
          element={<Layout headerVariant="cs-site_header_full_width" />}
        >
          <Route
            path="creative-portfolio"
            element={<CreativePortfolioHome />}
          />
          <Route
            path="showcase-portfolio"
            element={<ShowcasePortfolioHome />}
          />
          <Route
            path="case-study-showcase"
            element={<CaseStudyShowcaseHome />}
          />
          
        </Route>
        
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <a  class="whats-app" href="https://api.whatsapp.com/send?phone=9810915695&text=Hello" target="_blank">
      <FaWhatsapp />
  </a>
    </>
  );
}

export default App;
