import Image from 'next/image'
import React from 'react'

function Contact() {
  return (
    <div>
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

      <div className='bg-white w-full h-auto flex items-center justify-center'>
        <div className='bg-white w-8/12 h-auto pt-40 pb-28'>
          <form className='flex items-center justify-center flex-col gap-10'>
            <div className='flex w-1/2 h-auto flex-col items-start justify-center'>
              <label htmlFor="fname" className='text-base font-light text-[#565656]'>First Name</label>
              <input type="text" className=' w-full h-10 rounded-sm borderButtomLight text-base font-light text-[#565656]' />
            </div>
            <div className='flex w-1/2 h-auto flex-col items-start justify-center'>
              <label htmlFor="lname" className='text-base font-light text-[#565656]'>Last Name</label>
              <input type="text" className=' w-full h-10 rounded-sm borderButtomLight text-base font-light text-[#565656]' />
            </div>
            <div className='flex w-1/2 h-auto flex-col items-start justify-center'>
              <label htmlFor="email" className='text-base font-light text-[#565656]'>Email</label>
              <input type="email" className=' w-full h-10 rounded-sm borderButtomLight text-base font-light text-[#565656]' />
            </div>
            <div className='flex w-1/2 h-auto flex-col items-start justify-center'>
              <label htmlFor="message" className='text-base font-light text-[#565656]'>Message</label>
              <textarea name="message" id="" cols={30} rows={10} className=' w-full rounded-sm borderButtomLight text-base font-light text-[#565656]' />
            </div>
            <button className='px-6 py-3 text-base font-semibold rounded-md customWhite customShadow'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact