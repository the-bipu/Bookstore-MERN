import React from 'react'
import Image from 'next/image'

const AboutContainer = () => {
    return (
        <div className='heading-link'>
            <div className='flex flex-col gap-4 items-center justify-center pt-44 pb-10'>
                <div className='lg:w-1/2 w-11/12 text-3xl font-medium mb-2 text-white lufga'>Welcome to Our Literary World</div>
                <div className='lg:w-8/12 w-11/12 lg:text-8xl text-4xl font-semibold leading-loose mb-6 lufga text-white '>Discover our stories & vision here.</div>
                <div className='lg:w-1/2 w-11/12 text-xl font-normal mb-10 text-white lufga'>Embark on a Journey Through Our Literary Universe: Where Stories Spark Imagination and Ignite Passion</div>
                <div className='flex flex-row gap-8'>
                    <button className='px-6 py-3 text-base font-semibold rounded-md customWhite customShadow'>Explore</button>
                    <button className='px-6 py-3 text-base font-semibold rounded-md customBlue customShadow'>Our Team</button>
                </div>
                <div className='lg:w-8/12 w-11/12 h-80 relative flex items-center justify-center mt-12'>
                    <Image src={'/about/books-3d-2.png'} alt='' width={900} height={600} className='absolute w-full -bottom-28' />
                </div>
            </div>
        </div>
    )
}

export default AboutContainer