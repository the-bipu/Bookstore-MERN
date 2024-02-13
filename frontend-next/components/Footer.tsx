'use client';
import Link from 'next/link'
import React from 'react'

import { FaGithub, FaLinkedinIn, FaDribbble, FaTwitter, FaBehance } from "react-icons/fa";

const Footer = () => {
  
  return (
    <div id='footer-main' className="w-full h-auto flex items-center justify-center text-black py-[2.5rem] lufga">
        <div className='flex md:flex-row flex-col items-start justify-between flex-wrap md:p-0 p-6 md:gap-0 gap-6 md:w-8/12 w-full'>
            <div className='md:w-[35%] w-auto flex flex-col gap-3'>
                <div className='flex flex-row items-center gap-1 text-[22px]'>
                    {/* <IoHome className='mb-1' />  */}
                    <a href="/" className='text-[25px] font-bold text-black'>📔 EBooks Mania</a>
                </div>
                {/* <div>Discover, Connect, Rent - Your Perfect Home Awaits!</div> */}
                <div className='text-[14px]'>
                    This is just a normal website that gives the user some facilities to add, update, and delete books.
                </div>
                <div className='flex flex-row items-start justify-start gap-2 mt-2 text-[14px]'>
                    <FaGithub />
                    <FaLinkedinIn />
                    <FaDribbble />
                    <FaTwitter />
                    <FaBehance />
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='text-[#bfbfbf] font-normal'>Information</div>
                <div className='flex flex-col gap-1 text-sm font-normal text-black'>
                    <Link href='' className=' w-40 h-6'>College</Link>
                    <Link href='' className=' w-40 h-6'>Departments</Link>
                    <Link href='' className=' w-40 h-6'>E-Lib</Link>
                    <Link href='/About' className=' w-40 h-6'>Website Team</Link>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='text-[#bfbfbf] font-normal'>Quick Links</div>
                <div className='flex flex-col gap-1 text-sm font-normal text-black'>
                    <Link href='' className=' w-40 h-6'>Home</Link>
                    <Link href='' className=' w-40 h-6'>About</Link>
                    <Link href='' className=' w-40 h-6'>Store</Link>
                    <Link href='' className=' w-40 h-6'>Contact</Link>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='text-[#bfbfbf] font-normal'>Help</div>
                <div className='flex flex-col gap-1 text-sm font-normal text-black'>
                    <Link href='' className=' w-40 h-6'>Sliet</Link>
                    <Link href='' className=' w-40 h-6'>Ask questions</Link>
                    <Link href='' className=' w-40 h-6'>Send Feedback</Link>
                    <Link href='' className=' w-40 h-6'>Terms and conditions</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer