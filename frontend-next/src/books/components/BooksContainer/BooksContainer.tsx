import React from 'react'
import BookCard from '@/common/components/BookCard/BookCard';

const BooksContainer = (props: any) => {
    const { books } = props;

    return (
        <div className='bg-white pt-32 pb-20 flex flex-col gap-4 items-center justify-center'>
            <div className='font-medium text-base text-[#000] text-center capitalize'>
                Explore the collection
            </div>
            <div className='text-[#868686] font-light text-xl mb-8 lufga'>
                Presented herein are some of the most prevalent and sought-after sets in contemporary times.
            </div>

            <div className='md:px-[5rem] px-[2rem] pt-0 flex flex-row flex-wrap items-center justify-center gap-6'>
                {books.map((item: any) => (
                    <BookCard key={item._id} book={item} />
                ))}
            </div>
        </div>
    )
}

export default BooksContainer