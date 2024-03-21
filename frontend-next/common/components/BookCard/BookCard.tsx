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
      <div key={book._id} id='bookscard' className=' relative h-auto w-56 p-4 pt-6 bg-[#abc9e2] rounded-2xl flex flex-col items-center justify-center gap-4 cardShadow'>

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
  )
}

export default BookCard