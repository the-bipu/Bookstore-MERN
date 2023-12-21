'use client';
import React, { useState } from 'react'
import Link from 'next/link';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/navigation';
import { MdOutlineDelete } from 'react-icons/md';

interface Book {
  _id: string | null | undefined;
  publishyear: number;
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
    <div key={book._id} className={`relative bg-[#fff] flex flex-col w-[260px] h-[340px] shadow-xl rounded-md cardDiv`}>
      <div>
        <h2 className="absolute px-4 py-1 left-0 bg-black text-white rounded-lg z-10 m-2">
          {book.publishyear}
        </h2>
        <Link href={`/Details/${book._id}`} className='absolute bg-slate-500 text-black rounded-lg px-4 py-1 m-2 right-0'>Show More</Link>
        <img src={`${book.imgLink}`} alt='image' className='w-[260px] h-[340px] object-cover z-0 rounded-md' />

        <div className={`w-full h-[4rem] absolute bottom-0 text-center bg-white nameDiv`}>
          <h2 className="text-[1.3rem] font-semibold">{book.title}</h2>
          <h2 className="text-[1rem]">{book.author}</h2>
        </div>

      </div>

      {/* <div className='p-4 py-2 flex items-center justify-center flex-col'>
        <div className="flex justify-start items-center flex-col">
          <h2 className="my-1 text-[1.3rem] font-semibold">{book.title}</h2>
          <h2 className="text-[1rem]">{book.author}</h2>
        </div>

        <button onClick={handleDeleteBook}>
          <MdOutlineDelete className='text-2xl text-red-600' />
        </button>
      </div> */}

    </div>
  )
}

export default BookCard