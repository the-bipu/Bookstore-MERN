import React from 'react'
import BookCard from '../components/BookCard'
import AboutCard from '@/components/AboutCard'

function Hero() {
  return (
    <div>
      <div id='home-head' className='' />

      <div className='flex flex-col text-center w-full pt-[35px] pb-[20px]'>
        <div className='lg:text-[25px] text-[20px] font-semibold mt-4 mb-4 text-black'>
            Trending <span className='text-[#22CFB8]'>Sets 🔥</span>
        </div>
        <div className='mb-8 text-black'>
            Presented herein are some of the most prevalent and sought-after sets in contemporary times.
        </div>

        <BookCard />
      </div>

      <div className='flex flex-col w-full items-center h-auto bg-[#ffffff]'>
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

export default Hero
