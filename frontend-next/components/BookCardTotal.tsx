import React, { Key } from "react";
import BookCard from "../common/components/BookCard/BookCard";

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
        <>
            <div className='md:px-[5rem] px-[2rem] pt-0 flex flex-row flex-wrap items-center justify-center gap-6'>
                {books.map((item) => (
                    <BookCard key={item._id} book={item} />
                ))}
            </div>
        </>
    );
};

export default BookCardTotal;
