'use client';
import React, { useEffect, useRef, useState } from 'react'
import TotalDepartment from '@/components/TotalDepartment'
import AboutSite from '@/components/AboutSite'
import Parallax from '@/common/components/Parallax/Parallax'
import BookCardTotal from '@/components/BookCardTotal'
import axios from 'axios'
import Image from 'next/image';

import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

function Hero() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);
  const thirdSectionRef = useRef(null);

  const scrollToSection = (ref: any) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://ebookstore-backend.vercel.app/books/all')
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
      {/* First Section */}
      <div ref={firstSectionRef} className=' w-full h-auto flex flex-col items-center justify-center bg-[#5956E9] text-white text-center pt-44 mb-16'>
        <div className='lg:w-8/12 w-11/12 lg:text-8xl text-4xl font-semibold leading-loose mb-10 lufga'>Expand your mind, reading a book</div>
        <div className='lg:w-1/2 w-11/12 text-xl font-normal mb-10 lufga'>Welcome to our book store website, where you can easily find the books that you need.</div>
        <div className='flex flex-row gap-8'>
          <button className='px-6 py-3 text-base font-semibold rounded-md customWhite customShadow'>Explore More</button>
          <button className='px-6 py-3 text-base font-semibold rounded-md customBlue customShadow'>Add Books</button>
          {/* <button onClick={() => scrollToSection(firstSectionRef)}>First Section</button>
        <button onClick={() => scrollToSection(secondSectionRef)}>Second Section</button>
        <button onClick={() => scrollToSection(thirdSectionRef)}>Third Section</button> */}
        </div>
        <Image src="https://i.ibb.co/Ch5BW6T/3d-books.png" alt='3d Books Images' width={900} height={600} className='relative w-7/12 -bottom-16' />
      </div>

      {/* Second Section */}
      <div ref={secondSectionRef} className='bg-[#FFEFE0] w-full h-auto flex flex-col items-center justify-center gap-10 py-24'>
        <div className='w-8/12 h-auto flex flex-row justify-between'>
          <div className='w-5/12 h-auto text-4xl font-semibold flex flex-col'>
            <span>About</span>
            <span>The eBookStore Center</span>
          </div>
          <div className='w-5/12 h-auto font-normal text-base text-[#121212]'>Unlock the world of knowledge with our university-level book platform, offering an extensive collection tailored to students' academic needs.</div>
        </div>
        <div className='w-8/12 h-auto bg-[#FAB8C4] flex flex-row items-center justify-between rounded-2xl'>
          <div className='w-4/12 h-full flex items-end justify-end relative'>
            <Image src={'https://i.ibb.co/qWVh5dK/books-in-hand.png'} alt='' width={400} height={300} className='w-full' />
          </div>
          <div className='w-8/12 h-56 bg-white flex flex-row items-start justify-center m-5 rounded-2xl p-8 gap-4'>
            <div className='flex flex-col items-start justify-center text-4xl font-semibold w-7/12 h-full'>
              <span>The</span>
              <span>eBookstore Center</span>
            </div>
            <div className='w-4/12 h-full flex flex-col items-start justify-center gap-4 pl-8'>
              <div className='flex flex-col items-start justify-center'>
                <span className='font-bold'>Author</span>
                <span>eBookStore Library</span>
              </div>
              <div className='flex flex-col items-start justify-center'>
                <span className='font-bold'>Books</span>
                <span>Currently 0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div ref={thirdSectionRef} className='bg-[#F7F8F9] w-full h-auto flex flex-col items-center justify-center py-24 gap-10'>
        <div className='w-8/12 h-auto flex flex-row justify-between'>
          <div className='flex flex-col items-start justify-center'>
            <span className='text-4xl font-semibold'>New Arrivals</span>
            <span className='text-[#101010] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </div>
          <div className='w-auto h-auto flex flex-row gap-2'>
            <span className='bg-white text-[#5956E9] text-2xl w-12 h-12 rounded-full border-2 border-[#5956E9] cursor-pointer flex items-center justify-center'>
              <FaLongArrowAltLeft />
            </span>
            <span className='bg-[#5956E9] text-white text-2xl w-12 h-12 rounded-full border-2 border-[#5956E9] cursor-pointer flex items-center justify-center'>
              <FaLongArrowAltRight />
            </span>
          </div>
        </div>
        <div className='bg-white w-8/12 flex flex-row gap-8 items-center justify-center py-10 rounded-2xl customShadowLight'>
          <div className=' w-52 h-auto px-3 py-4 bg-[#FFEDDC] rounded-2xl flex flex-col items-center justify-center gap-4'>
            <div className='bg-[#FAB8C4] w-24 h-24 rounded-full flex items-center justify-center'>
              <Image src={'/books-3d.png'} alt='books logo' width={70} height={70} />
            </div>
            <div className='w-full h-auto bg-white p-4 rounded-lg'>
              <div className='flex items-center justify-between w-full'>
                <span>Title</span>
                <span>Price</span>
              </div>
              <div>Subheading</div>
              <button className='bg-white text-[#F0E1D4] border-2 border-[#F0E1D4] rounded-md mt-2'>View Book</button>
            </div>
          </div>
          <div className=' w-52 h-auto px-3 py-4 bg-[#DBDEFF] rounded-2xl flex flex-col items-center justify-center gap-4'>
            <div className='bg-[#5956E9] w-24 h-24 rounded-full flex items-center justify-center'>
              <Image src={'/books-3d.png'} alt='books logo' width={70} height={70} />
            </div>
            <div className='w-full h-auto bg-white p-4 rounded-lg'>
              <div className='flex items-center justify-between w-full'>
                <span>Title</span>
                <span>Price</span>
              </div>
              <div>Subheading</div>
              <button className='bg-white text-[#F0E1D4] border-2 border-[#F0E1D4] rounded-md mt-2'>View Book</button>
            </div>
          </div>
          <div className=' w-52 h-auto px-3 py-4 bg-[#DBF8FF] rounded-2xl flex flex-col items-center justify-center gap-4'>
            <div className='bg-[#64B4FF] w-24 h-24 rounded-full flex items-center justify-center'>
              <Image src={'/books-3d.png'} alt='books logo' width={70} height={70} />
            </div>
            <div className='w-full h-auto bg-white p-4 rounded-lg'>
              <div className='flex items-center justify-between w-full'>
                <span>Title</span>
                <span>Price</span>
              </div>
              <div>Subheading</div>
              <button className='bg-white text-[#F0E1D4] border-2 border-[#F0E1D4] rounded-md mt-2'>View Book</button>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full h-auto bg-white flex items-center justify-center pt-24 pb-40'>
        <div className='relative w-8/12 h-auto bg-[#5956E9] text-white flex flex-col gap-4 items-center justify-center py-12 rounded-3xl'>
          <span className='text-md text-[#cacaca] font-light'>Contact Us</span>
          <div className=' flex flex-col items-center justify-center gap-2 font-semibold text-6xl text-center capitalize'>
            <span className='lufga'>Let's work on</span>
            <span className='lufga'>something cool together</span>
          </div>
          <div className='py-10'>
            <button className='px-6 py-3 text-base font-semibold rounded-md customWhite customShadow'>Sign Up</button>
          </div>
          <div className='relative w-full h-52 flex items-center justify-center'>
          <Image src={'https://i.ibb.co/CB9Sy51/team-casual.png'} alt='' loading='lazy' width={450} height={300} className='absolute w-8/12 -bottom-40' />
          </div>
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
