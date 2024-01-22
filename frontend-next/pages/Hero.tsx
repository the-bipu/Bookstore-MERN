'use client';
import React, { useEffect, useState } from 'react'
import TotalDepartment from '@/components/TotalDepartment'
import AboutSite from '@/components/AboutSite'
import Parallax from '@/common/components/Parallax/Parallax'
import BookCardTotal from '@/components/BookCardTotal'
import axios from 'axios'
import Image from 'next/image';

function Hero() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books/all')
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
    <div className='bg-white'>
      {/* Main Image of the Home Page and it's Content */}
      <div className=' w-full h-auto flex flex-col items-center justify-center bg-[#5956E9] text-white text-center pt-44 mb-16'>
        <div className='lg:w-8/12 w-11/12 lg:text-8xl text-4xl font-normal leading-loose mb-10 righteous'>Expand your mind, reading a book</div>
        <div className='lg:w-1/2 w-11/12 text-xl font-normal mb-10'>Welcome to our book store website, where you can easily find the books that you need.</div>
        <div className='flex flex-row gap-8'>
          <button className='px-6 py-3 text-base font-semibold rounded-md customWhite customShadow'>Explore More</button>
          <button className='px-6 py-3 text-base font-semibold rounded-md customBlue customShadow'>Add Books</button>
        </div>
        <Image src={'/home/3d-books.png'} alt='' width={900} height={600} className='relative w-7/12 -bottom-16' />
      </div>

      <div className='bg-[#FFEFE0] w-full h-auto flex flex-col items-center justify-center gap-10 py-24'>
        <div className='w-8/12 h-auto flex flex-row justify-between'>
          <div className='w-4/12 h-auto text-4xl font-semibold flex flex-col'>
            <span>About</span>
            <span>The eBookStore Center</span>
          </div>
          <div className='w-4/12 h-auto font-normal text-base text-[#121212]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis at exercitationem ex harum nemo quos recusandae aliquam quod odio eum!</div>
        </div>
        <div className='w-8/12 h-auto bg-[#FAB8C4] flex flex-row items-center justify-between rounded-2xl'>
          <div className='w-4/12 h-full flex items-end justify-end relative'>
            <Image src={'/home/books-in-hand.png'} alt='' width={400} height={300} className='w-full' />
          </div>
          <div className='w-8/12 h-full bg-white flex flex-row items-start justify-center m-5 rounded-2xl'>
            <div className='flex flex-col items-center justify-center text-4xl font-semibold py-20 w-7/12'>
              <span>The</span>
              <span>eBookstore Center</span>
            </div>
            <div className='w-5/12 h-auto flex items-center justify-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis rerum incidunt deleniti sit at itaque veniam excepturi nobis inventore quia, non dicta! Exercitationem laudantium quasi earum a fugit culpa autem.</div>
          </div>
        </div>
      </div>

      <div className='bg-[#F7F8F9] w-full h-auto flex flex-col items-center justify-center py-24 gap-10'>
        <div className='w-8/12 h-auto flex flex-row justify-between'>
          <div className='flex flex-col items-start justify-center'>
            <span className='text-4xl font-semibold'>New Arrivals</span>
            <span className='text-[#101010] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </div>
          <div className=''></div>
        </div>
        <div className='bg-white w-8/12 flex flex-row gap-8 items-center justify-center py-10 rounded-2xl customShadowLight'>
          <div className=' w-44 h-56 bg-violet-400 rounded-2xl'></div>
          <div className=' w-44 h-56 bg-red-400 rounded-2xl'></div>
          <div className=' w-44 h-56 bg-green-400 rounded-2xl'></div>
        </div>
      </div>

      {/* Top books of the week section */}
      {/* <div className='flex flex-col text-center w-full pt-[35px] pb-[20px]'>
        <div className='lg:text-[25px] text-[20px] font-semibold mt-4 mb-4 text-[#22CFB8]'>
          Top 10 <span className='text-black'>of this Week 🔥</span>
        </div>
        <div className='mb-8 text-black'>
          Presented herein are some of the most prevalent and sought-after sets in contemporary times.
        </div>

        <BookCardTotal books={books} />
      </div> */}

      {/* About Site Section ( Still need modification ) */}
      {/* <AboutSite /> */}

      {/* All Departments Section */}
      {/* <div className='py-8'>
        <div className='lg:text-[25px] text-[20px] font-semibold mt-4 mb-4 text-black text-center'>
          Our <span className='text-[#22CFB8]'>Departments 🍃</span>
        </div>
        <div className='mb-8 text-black text-center'>
          Presented herein are some of the most prevalent and sought-after sets in contemporary times.
        </div>

        <TotalDepartment />
      </div> */}

      {/* <Parallax /> */}

      {/* All Departments Section */}
      {/* <div className='py-8'>
        <div className='lg:text-[25px] text-[20px] font-semibold mt-4 mb-4 text-black text-center'>
          Our <span className='text-[#22CFB8]'>Departments 🍃</span>
        </div>
        <div className='mb-8 text-black text-center'>
          Presented herein are some of the most prevalent and sought-after sets in contemporary times.
        </div>

        <TotalDepartment />
      </div> */}

    </div>
  )
}

export default Hero
