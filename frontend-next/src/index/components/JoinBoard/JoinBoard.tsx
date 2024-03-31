import Image from 'next/image'
import React from 'react'

const JoinBoard = () => {
    return (
        <div className='w-full h-auto bg-white flex items-center justify-center pt-24 pb-40'>
            <div className='relative w-8/12 h-auto bg-[#5956E9] text-white flex flex-col gap-4 items-center justify-center py-12 rounded-3xl'>
                <span className='text-md text-[#ffffff] font-light'>Contact Us</span>
                <div className=' flex flex-col items-center justify-center gap-2 font-semibold text-6xl text-center capitalize'>
                    <span className='lufga'>Let's work on</span>
                    <span className='lufga'>something cool together</span>
                </div>
                <div className='py-10'>
                    <button className='px-6 py-3 text-base font-semibold rounded-md customWhite customShadow'>Sign Up</button>
                </div>
                <div className='relative w-full h-52 flex items-center justify-center'>
                    <Image src={'https://i.ibb.co/CB9Sy51/team-casual.png'} alt='' loading='lazy' width={450} height={300} className='absolute w-8/12 -bottom-40' />
                </div>
            </div>
        </div>
    )
}

export default JoinBoard