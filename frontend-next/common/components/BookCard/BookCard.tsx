'use client';
import React, { useState } from 'react'
import Link from 'next/link';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/navigation';
import { MdOutlineDelete } from 'react-icons/md';
import { GoHeart, GoHeartFill } from "react-icons/go";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";

import './BookCardModule.scss';
import Image from 'next/image';

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
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
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

  const likeClick = () => {
    setIsLiked(!isLiked);
  }

  const saveClick = () => {
    setIsSaved(!isSaved);
  }

  return (
    <>
      <div key={book._id} id='bookscard' className=' relative h-auto w-56 px-3 py-4 bg-[#abc9e2] rounded-2xl flex flex-col items-center justify-center gap-4 cardShadow'>

        <div className='bg-[#5956E9] w-24 h-24 rounded-full flex items-center justify-center'>
          <Image src={'/books-3d.png'} alt='books logo' width={70} height={70} />
        </div>
        <div className='w-full h-auto bg-white p-4 rounded-lg'>
          <div className='flex flex-col items-center justify-center w-full'>
            <div className='flex flex-row items-center justify-center gap-2 text-xl mb-2'>
              {isLiked ? <GoHeartFill onClick={likeClick} className='cursor-pointer' /> : <GoHeart onClick={likeClick} className='cursor-pointer' />}
              {isSaved ? <IoBookmark onClick={saveClick} className='cursor-pointer' /> : <IoBookmarkOutline onClick={saveClick} className='cursor-pointer' />}
            </div>
            <span className='text-base text-[#393939] font-medium'>{book.title}</span>
            <span>{book.author}</span>
          </div>
        </div>

      </div>
    </>
    // <div key={book._id} className={`relative bg-[#fff] flex flex-col w-[260px] h-[340px] shadow-xl rounded-md cardDiv`}>
    //   <div>
    //     <h2 className="absolute px-4 py-1 left-0 bg-black text-white rounded-lg z-10 m-2">
    //       {book.publishyear}
    //     </h2>
    //     <Link href={`/Details/${book._id}`} className='absolute bg-slate-500 text-black rounded-lg px-4 py-1 m-2 right-0'>
    //       Show More
    //     </Link>

    //     {/* <img src={`${book.imgLink}`} alt='image' className='w-[260px] h-[340px] object-cover z-5 rounded-md' /> */}

    //     <div className={`w-full h-[4rem] absolute bottom-0 text-center bg-white nameDiv`}>
    //       <h2 className="text-[1.3rem] font-semibold">{book.title}</h2>
    //       <h2 className="text-[1rem]">{book.author}</h2>
    //     </div>

    //   </div>

    //   {/* <div className='p-4 py-2 flex items-center justify-center flex-col'>
    //     <div className="flex justify-start items-center flex-col">
    //       <h2 className="my-1 text-[1.3rem] font-semibold">{book.title}</h2>
    //       <h2 className="text-[1rem]">{book.author}</h2>
    //     </div>

    //     <button onClick={handleDeleteBook}>
    //       <MdOutlineDelete className='text-2xl text-red-600' />
    //     </button>
    //   </div> */}

    // </div>
  )
}

export default BookCard