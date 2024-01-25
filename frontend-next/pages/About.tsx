import React from 'react'
import AboutCard from '@/components/AboutCard'

function About() {
  return (
    <div className='gradientLinear'>
      <div className='heading-link'>
        <div className='py-6'>
          <h3 className='text-white'>About Us</h3>
          <p> <a href="/">home</a> / about </p>
        </div>
      </div>
      <div className='flex flex-col w-full items-center h-auto'>
        <div className='flex flex-col text-center lg:w-full w-[90%] pt-[20px] pb-[40px] lg:px-[10%] px-4'>
          <div className='lg:text-[25px] text-[20px] font-semibold mt-4 mb-4 text-black text-center'>
            Why <span className='text-[#22CFB8]'>EBooksMania🚀</span>
          </div>
          <div className='mb-8 text-black'>
            Presented herein are some of the most prevalent and sought-after sets in contemporary times.
          </div>

          <AboutCard />

        </div>
      </div>
    </div>
  )
}

export default About