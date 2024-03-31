import BookCard from '@/common/components/BookCard/BookCard'
import React from 'react'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'

const NewArrival = (props: any) => {
    const { books } = props;
    console.log(books);

    return (
        <div className='bg-[#F7F8F9] w-full h-auto flex flex-col items-center justify-center py-24 gap-10'>
            <div className='w-8/12 h-auto flex flex-row justify-between'>
                <div className='flex flex-col items-start justify-center'>
                    <span className='text-4xl font-semibold'>New Arrivals</span>
                    <span className='text-[#101010] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </div>
                <div className='w-auto h-auto flex flex-row gap-2'>
                    <span className='bg-white text-[#5956E9] text-2xl w-12 h-12 rounded-full border-2 border-[#5956E9] cursor-pointer flex items-center justify-center'>
                        <FaLongArrowAltLeft />
                    </span>
                    <span className='bg-[#5956E9] text-white text-2xl w-12 h-12 rounded-full border-2 border-[#5956E9] cursor-pointer flex items-center justify-center'>
                        <FaLongArrowAltRight />
                    </span>
                </div>
            </div>
            <div className='bg-white w-8/12 flex flex-row gap-8 items-center justify-center py-10 rounded-2xl customShadowLight'>
                <div className='md:px-[5rem] px-[2rem] pt-0 flex flex-row flex-wrap items-center justify-center gap-6'>
                    {books.map((item: any) => (
                        <BookCard key={item._id} book={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NewArrival