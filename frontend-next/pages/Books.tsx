import BookCard from '@/common/components/BookCard/BookCard';
import BookCardTotal from '@/components/BookCardTotal';
import TotalDepartment from '@/components/TotalDepartment'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books/all')
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
        <div className='py-6'>
          <h3>Our Books</h3>
          <p> <a href="/">home</a> / books </p>
        </div>
      </div>
      <div className='py-8'>
        <div className='lg:text-[25px] text-[20px] font-semibold mt-4 mb-4 text-black text-center'>
          Our <span className='text-[#22CFB8]'>Book Store 🍃</span>
        </div>
        <div className='mb-8 text-black text-center'>
          Presented herein are some of the most prevalent and sought-after sets in contemporary times.
        </div>

        <BookCardTotal books={books} />
      </div>
    </div>
  )
}

export default Books