import React from 'react'
import AboutCard from '@/components/AboutCard'

function About() {
  return (
    <div className='gradientLinear'>
      <div className='heading-link'>
        <div className='flex flex-col gap-4 items-center justify-center pt-44 pb-28'>
          <div className='lg:w-1/2 w-11/12 text-3xl font-medium mb-2 text-white lufga'>Welcome to Our Literary World</div>
          <div className='lg:w-8/12 w-11/12 lg:text-8xl text-4xl font-semibold leading-loose mb-6 lufga text-white capitalize'>Discover our Stories & Vision Here.</div>
          <div className='lg:w-1/2 w-11/12 text-xl font-normal mb-10 text-white lufga'>Embark on a Journey Through Our Literary Universe: Where Stories Spark Imagination and Ignite Passion</div>
          <div className='flex flex-row gap-8'>
          <button className='px-6 py-3 text-base font-semibold rounded-md customWhite customShadow'>Explore</button>
          <button className='px-6 py-3 text-base font-semibold rounded-md customBlue customShadow'>Our Team</button>
        </div>
        </div>
      </div>
      {/* <div className='flex flex-col w-full items-center h-auto bg-white[#5956E9]'>
        <div className='flex flex-col text-center lg:w-full w-11/12 pt-[20px] pb-[40px] lg:px-[10%] px-4'>
          <div className='lg:text-[25px] text-[20px] font-semibold mt-4 mb-4 text-white text-center lufga'>
            Why <span className='text-[#22CFB8]'>EBooksMania🚀</span>
          </div>
          <div className='mb-8 text-black'>
            Presented herein are some of the most prevalent and sought-after sets in contemporary times.
          </div>

          <AboutCard />

        </div>
      </div> */}
    </div>
  )
}

export default About