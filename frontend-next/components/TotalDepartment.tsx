import React from 'react'
import departments from '../public/departments.json'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TotalDepartment = () => {

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
    <div>
      <div className='w-full flex justify-center items-center'>

        <Slider {...settings} className="w-[80%] max-w-screen-lg">
          {departments.map((department, index) => (
            <div className='md:w-[500px] w-[300px] h-auto outline-none p-4' key={index}>
              <div className='p-4 pb-0'>
                <img src={`/book-${index + 1}.png`} alt={`Book ${index + 1}`} className='shadow-inner h-[350px] w-[300px]' />
              </div>
              <div className='p-4 flex flex-col items-center justify-center w-full'>
                <div>{department.Name}</div>
              </div>
            </div>
          ))}
        </Slider>

      </div>
    </div>
  )
}

export default TotalDepartment