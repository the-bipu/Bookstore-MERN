import Image from 'next/image'
import React from 'react'

const ContactBoard = () => {
    return (
        <div className='heading-link'>
            <div className=' w-8/12 flex flex-col gap-4 items-center justify-center pt-44 pb-10'>
                <div className='lg:w-full w-11/12 lg:text-8xl text-4xl font-semibold leading-loose mb-6 lufga text-white '>Get in Touch</div>
                <div className='lg:w-full w-11/12 text-xl font-normal mb-10 text-white lufga'>Reach Out to Us for Inquiries, Support, or Just to Say Hello!</div>
                <div className='flex flex-row gap-8'>
                    <button className='px-6 py-3 text-base font-semibold rounded-md customWhite customShadow'>Explore</button>
                    <button className='px-6 py-3 text-base font-semibold rounded-md customBlue customShadow'>Our Team</button>
                </div>
                <div className='lg:w-8/12 w-11/12 h-80 relative flex items-center justify-center'>
                    <Image src={'/contact/contact.png'} alt='' width={900} height={600} className=' absolute w-full -bottom-32' />
                </div>
            </div>
        </div>
    )
}

export default ContactBoard