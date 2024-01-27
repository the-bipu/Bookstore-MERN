import React from 'react'
import AboutCard from '@/components/AboutCard'
import Image from 'next/image'

function About() {
  return (
    <div className='gradientLinear'>
      <div className='heading-link'>
        <div className='flex flex-col gap-4 items-center justify-center pt-44 pb-10'>
          <div className='lg:w-1/2 w-11/12 text-3xl font-medium mb-2 text-white lufga'>Welcome to Our Literary World</div>
          <div className='lg:w-8/12 w-11/12 lg:text-8xl text-4xl font-semibold leading-loose mb-6 lufga text-white '>Discover our stories & vision here.</div>
          <div className='lg:w-1/2 w-11/12 text-xl font-normal mb-10 text-white lufga'>Embark on a Journey Through Our Literary Universe: Where Stories Spark Imagination and Ignite Passion</div>
          <div className='flex flex-row gap-8'>
            <button className='px-6 py-3 text-base font-semibold rounded-md customWhite customShadow'>Explore</button>
            <button className='px-6 py-3 text-base font-semibold rounded-md customBlue customShadow'>Our Team</button>
          </div>
          <div className='lg:w-8/12 w-11/12 h-80 relative flex items-center justify-center mt-12'>
            <Image src={'/about/books-3d-2.png'} alt='' width={900} height={600} className='absolute w-full -bottom-28' />
          </div>
        </div>
      </div>

      <div className='w-full h-auto flex flex-col gap-8 text-center items-center justify-center bg-white pt-36 pb-24'>
        {/* <div className='w-8/12 h-auto relative flex items-center justify-center'>
          <Image src={'/about/team-3d.png'} alt='' width={900} height={600} className='relative w-8/12' />
        </div> */}
        <div className='w-8/12 p-4 flex flex-col gap-4'>
          <span className='font-medium text-base text-[#000]'>Why Us!?</span>
          <span className='text-[#868686] font-light text-xl lufga'>Welcome to our book store website, where you can easily find the books that you need. Introducing the groundbreaking platform tailored for seamless management of university textbooks—our custom-designed website. This digital haven provides an organized repository for storing names, associated PDFs, and the respective semesters wherein each book is required. Created with the student community in mind, this platform aims to revolutionize the way we access, share, and manage academic resources.</span>
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