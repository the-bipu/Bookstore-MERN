import React from 'react'
import BookCard from '../components/BookCard'
import AboutCard from '@/components/AboutCard'
import TotalDepartment from '@/components/TotalDepartment'
import CustomSlider from '@/components/SliderHome'
import AboutSite from '@/components/AboutSite'

function Hero() {
  return (
    <div className='gradientLinear'>
      {/* Main Image of the Home Page and it's Content */}
      <div id='home-head' className='flex flex-col lg:items-start items-center justify-center text-white lg:pl-32 pl-0 lg:text-left text-center'>
        <div className='lg:w-[40%] w-[90%] lg:text-[50px] text-[40px] font-semibold leading-[3.6rem] mb-2'>We Empower you to find the right career path</div>
        <div className='lg:w-[40%] w-[90%] text-[22px] mb-4'>Welcome to our book store website, where you can easily find the books that you need.</div>
        <button className='px-6 py-3 text-[16px] bg-[#22CFB8] border-2 border-[#22CFB8] rounded-md hover:bg-transparent hover:border-white'>Explore More</button>
      </div>

      {/* <div className={`header__main`}>
        <div className='text-black font-bold text-[25px] w-[50%] pl-40'>BooksMania 🚀</div>
        <div className='text-[18px] text-black w-[50%] pl-40'>
           Introducing the groundbreaking platform tailored for seamless management of university textbooks—our custom-designed website.
        </div>
      </div> */}

      <div className='flex flex-col text-center w-full pt-[35px] pb-[20px]'>
        <div className='lg:text-[25px] text-[20px] font-semibold mt-4 mb-4 text-[#22CFB8]'>
          Top 10 <span className='text-black'>of this Week 🔥</span>
        </div>
        <div className='mb-8 text-black'>
          Presented herein are some of the most prevalent and sought-after sets in contemporary times.
        </div>

        <BookCard />
      </div>

      {/* <div className='flex flex-col w-full items-center h-auto bg-[#ffffff]'>
        <div className='flex flex-col text-center lg:w-full w-[90%] pt-[20px] pb-[40px] lg:px-[10%] px-4'>
          <div className='lg:text-[25px] text-[20px] font-semibold mt-4 mb-4 text-black text-center'>
            Why <span className='text-[#22CFB8]'>EBooksMania🚀</span>
          </div>
          <div className='mb-8 text-black'>
            Presented herein are some of the most prevalent and sought-after sets in contemporary times.
          </div>

          <AboutCard />

        </div>
      </div> */}

      <AboutSite />

      

      <div className='py-8'>
        <div className='lg:text-[25px] text-[20px] font-semibold mt-4 mb-4 text-black text-center'>
          Our <span className='text-[#22CFB8]'>Departments 🍃</span>
        </div>
        <div className='mb-8 text-black text-center'>
          Presented herein are some of the most prevalent and sought-after sets in contemporary times.
        </div>

        <TotalDepartment />
      </div>

    </div>
  )
}

export default Hero
