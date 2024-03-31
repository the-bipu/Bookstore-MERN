import Image from 'next/image'
import React from 'react'

const HomeContainer = () => {
    return (
        <div className=' w-full h-auto flex flex-col items-center justify-center bg-[#5956E9] text-white text-center pt-44 mb-16'>
            <div className='lg:w-8/12 w-11/12 lg:text-8xl text-4xl font-semibold leading-loose mb-10 lufga'>Expand your mind, reading a book</div>
            <div className='lg:w-1/2 w-11/12 text-xl font-normal mb-10 lufga'>Welcome to our book store website, where you can easily find the books that you need.</div>
            <div className='flex flex-row gap-8'>
                <button className='px-6 py-3 text-base font-semibold rounded-md customWhite customShadow'>Explore More</button>
                <button className='px-6 py-3 text-base font-semibold rounded-md customBlue customShadow'>Add Books</button>
            </div>
            <Image src="https://i.ibb.co/Ch5BW6T/3d-books.png" alt='3d Books Images' width={900} height={600} className='relative w-7/12 -bottom-16' />
        </div>
    )
}

export default HomeContainer