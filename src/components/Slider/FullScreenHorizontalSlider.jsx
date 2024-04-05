import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../Button';

// import { Mousewheel, Pagination, Navigation } from 'swiper';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import parse from 'html-react-parser';
import Div from '../Div';
import 'swiper/css';
import { Autoplay , Pagination , Navigation } from "swiper";
import 'swiper/css/pagination';

export default function FullScreenHorizontalSlider({ data, btnText,
  btnLink, }) {
  return (
    <Div className="cs-swiper_arrow_style_1  text-center">
      {/* <Div className="swiper-button image-swiper-button-next">
        Next <Icon icon="bi:arrow-right" />
      </Div>
      <Div className="swiper-button image-swiper-button-prev">
        <Icon icon="bi:arrow-left" /> Prev
      </Div> */}
      <Swiper
                                    // effect={"coverflow"}
                                    grabCursor={true}
                                    centeredSlides={true}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            },
                                        // 500: {
                                        //     slidesPerView: 2,
                                        //     },
                                        // 700: {
                                        //     slidesPerView: 3,
                                        // },
                                    }}
                                    // coverflowEffect={{
                                    // rotate: 30,
                                    // stretch: 15,
                                    // depth: 320,
                                    // modifier: 1,
                                    // slideShadows: false,
                                    // }}
                                    loop={true}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: false,
                                      }}
                                  
                                    
              
                                    modules={[ Pagination , Navigation , Autoplay]}
                                    className="bannerSwiper"
                                >
      {/* <Swiper
        slidesPerView={1}
        spaceBetween={0}
        // mousewheel={true}
        pagination={{
          clickable: true,
        }}
        speed={1000}
        loop={true}
        modules={[Mousewheel, Pagination, Navigation]}
        className="mySwiper"
        navigation={{
          nextEl: '.image-swiper-button-next',
          prevEl: '.image-swiper-button-prev',
          disabledClass: 'swiper-button-disabled',
        }}
        autoplay ={{
          delay: 500, // Set the delay to 500 milliseconds (0.5 seconds)
          disableOnInteraction: false,
        }}
        
      > */}
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Div
              className="cs-hero cs-style4 text-center cs-bg"
              style={{ backgroundImage: `url(${item.imgUrl})` }}
            > 
              <div className="bg"><Link to={item.href} className="cs-hero_link" />
              <Div className="container cs-hero justify-content-center">
              <Div className="cs-hero_text">
                <h2 className="cs-hero_title">{parse(item.title)}</h2>
                <Div className="cs-hero_info text-white justify-content-space-evenly mt-5">
          
            <Div>
              <Div className="cs-hero_subtitle">{item.subtitle}</Div>
            </Div>
            
          </Div>
              </Div>
            </Div></div>
              
            </Div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Div>
  );
}
