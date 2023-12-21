import React, { Key } from "react";
import BookCard from "./BookCard";

type BookItem = {
    _id: Key | null | undefined;
    publishyear: number;
    title: string;
    author: string;
    imgLink: string;
};

interface Book extends BookItem {
    _id: string | null | undefined;
}

interface BookCardTotalProps {
    books: Book[];
}

const BookCardTotal: React.FC<BookCardTotalProps> = ({ books }) => {
    return (
        <div>
            <div className='flex flex-col w-full h-auto'>
                <div className='md:px-[5rem] px-[2rem] pt-0 pb-12 flex flex-wrap flex-row items-center justify-center gap-6'>
                    {books.map((item) => (
                        <BookCard key={item._id} book={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookCardTotal;
