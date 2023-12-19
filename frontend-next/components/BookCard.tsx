import React from 'react'
import { MdOutlineDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";

interface Book {
  _id: string | null | undefined;
  publishyear: string; // Assuming publishyear is a string, update the type accordingly
  title: string;
  author: string;
  // Add other properties with their respective types
}

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div key={book._id} className='bg-[#fff] flex flex-col items-start w-[280px] shadow-xl'>
      <div>
        <img src="/book-1.png" alt="Home Image" className='' />
      </div>
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
        {book.publishyear}
      </h2>
      <h4 className="my-2 text-gray-500">{book._id}</h4>
      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.author}</h2>
      </div>
      <a href={`/books/delete/${book._id}`}>
        <MdOutlineDelete className='text-2xl text-red-600' />
      </a>
      <a href={`/books/details/${book._id}`}>Show More</a>
    </div>
  )
}

export default BookCard