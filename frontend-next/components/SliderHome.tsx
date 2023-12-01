'use client'
import React, { useRef } from 'react';
import 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomSlider: React.FC = () => {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
  
    };
  
    return (
      <div className='w-full flex justify-center items-center'>
        <Slider {...settings} className="w-[80%] max-w-screen-lg">
            <div>
            <img src="/bg-home.png" alt="Image" className="md:w-[500px] w-[300px] h-auto rounded-lg" />
            </div>
            <div>
            <img src="/bg-home.png" alt="Image" className="md:w-[500px] w-[300px] h-auto rounded-lg" />
            </div>
            <div>
            <img src="/bg-home.png" alt="Image" className="md:w-[500px] w-[300px] h-auto rounded-lg" />
            </div>
            <div>
            <img src="/bg-home.png" alt="Image" className="md:w-[500px] w-[300px] h-auto rounded-lg" />
            </div>
            <div>
            <img src="/bg-home.png" alt="Image" className="md:w-[500px] w-[300px] h-auto rounded-lg" />
            </div>
      </Slider>
      </div>
    );
  };
  
  export default CustomSlider;