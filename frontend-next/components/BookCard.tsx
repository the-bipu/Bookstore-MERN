'use client';
import React, { useState } from 'react'
import { MdOutlineDelete } from 'react-icons/md'
import Link from 'next/link';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/navigation';

interface Book {
  _id: string | null | undefined;
  publishyear: string;
  title: string;
  author: string;
  imgLink: string;
}

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {

  const [loading, setLoading] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const handleDeleteBook = () => {
    setLoading(true);
    if (!book._id) {
      console.error('ID is undefined');
      return;
    }

    axios
      .delete(`https://ebookstore-backend.up.railway.app/books/delete/${book._id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Deleted Successfully", { variant: 'success' });
        router.push('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: 'error' });
        console.log(error);
      });
  }

  return (
    <div key={book._id} className='bg-[#fff] flex flex-col items-start w-[280px] shadow-xl'>
      <div>
        <img src={`${book.imgLink}`} alt='image' className='w-[280px] h-full' />
      </div>
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
        {book.publishyear}
      </h2>
      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.author}</h2>
      </div>
      {/* <button onClick={handleDeleteBook}>
        <MdOutlineDelete className='text-2xl text-red-600' />
      </button> */}
      <Link href={`/Details/${book._id}`}>Show More</Link>
    </div>
  )
}

export default BookCard