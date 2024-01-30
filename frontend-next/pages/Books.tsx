import BookCard from '@/common/components/BookCard/BookCard';
import BookCardTotal from '@/components/BookCardTotal';
import TotalDepartment from '@/components/TotalDepartment'
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://ebookstore-backend.vercel.app/books/all')
      .then((response) => {
        setBooks(response.data.data);
        console.log(books);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='gradientLinear'>
      <div className='heading-link'>
        <div className=' w-8/12 flex flex-col gap-4 items-center justify-center pt-44 pb-10'>
          <div className='lg:w-full w-11/12 lg:text-8xl text-4xl font-semibold leading-loose mb-6 lufga text-white '>Explore Our Diverse Book Collection</div>
          <div className='lg:w-full w-11/12 text-xl font-normal mb-10 text-white lufga'>Discover a Wealth of Titles Across Various Genres and Departments in Our Library.</div>
          <div className='flex flex-row gap-8'>
            <button className='px-6 py-3 text-base font-semibold rounded-md customWhite customShadow'>Explore</button>
            <button className='px-6 py-3 text-base font-semibold rounded-md customBlue customShadow'>Our Team</button>
          </div>
          <div className='lg:w-8/12 w-11/12 h-80 relative flex items-center justify-center'>
            <Image src={'/store/books-city.png'} alt='' width={900} height={600} className=' absolute w-full -bottom-32' />
          </div>
        </div>
      </div>

      <div className='py-8 bg-white pt-32 pb-28'>
        {/* <div className='lg:text-[25px] text-[20px] font-semibold mt-4 mb-4 text-black text-center'>
          Our <span className='text-[#22CFB8]'>Book Store 🍃</span>
        </div>
        <div className='mb-8 text-black text-center'>
          Presented herein are some of the most prevalent and sought-after sets in contemporary times.
        </div>

        <BookCardTotal books={books} /> */}
      </div>
    </div>
  )
}

export default Books