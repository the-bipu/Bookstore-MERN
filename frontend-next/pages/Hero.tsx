'use client';
import React, { useEffect, useState } from 'react'
import TotalDepartment from '@/components/TotalDepartment'
import AboutSite from '@/components/AboutSite'
import Parallax from '@/components/Parallax'
import BookCardTotal from '@/components/BookCardTotal'
import axios from 'axios'

function Hero() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://ebookstore-backend.up.railway.app/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='gradientLinear'>
      {/* Main Image of the Home Page and it's Content */}
      <div id='home-head' className='flex flex-col lg:items-center items-center justify-center text-white lg:text-center text-center'>
        <div className='lg:w-[40%] w-[90%] lg:text-[50px] text-[40px] font-semibold leading-[3.6rem] mb-2'>We Empower you to find the right career path</div>
        <div className='lg:w-[40%] w-[90%] text-[22px] mb-4'>Welcome to our book store website, where you can easily find the books that you need.</div>
        <button className='px-6 py-3 text-[16px] bg-[#22CFB8] border-2 border-[#22CFB8] rounded-md hover:bg-black hover:border-white'>Explore More</button>
      </div>

      {/* Top books of the week section */}
      <div className='flex flex-col text-center w-full pt-[35px] pb-[20px]'>
        <div className='lg:text-[25px] text-[20px] font-semibold mt-4 mb-4 text-[#22CFB8]'>
          Top 10 <span className='text-black'>of this Week 🔥</span>
        </div>
        <div className='mb-8 text-black'>
          Presented herein are some of the most prevalent and sought-after sets in contemporary times.
        </div>

        <BookCardTotal books={books} />
      </div>

      {/* About Site Section ( Still need modification ) */}
      <AboutSite />

      {/* All Departments Section */}
      <div className='py-8'>
        <div className='lg:text-[25px] text-[20px] font-semibold mt-4 mb-4 text-black text-center'>
          Our <span className='text-[#22CFB8]'>Departments 🍃</span>
        </div>
        <div className='mb-8 text-black text-center'>
          Presented herein are some of the most prevalent and sought-after sets in contemporary times.
        </div>

        <TotalDepartment />
      </div>

      <Parallax />

      {/* All Departments Section */}
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
