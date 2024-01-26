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
                    <Link href=''>College</Link>
                    <Link href=''>Departments</Link>
                    <Link href=''>E-Lib</Link>
                    <Link href='/About'>Website Team</Link>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='text-[#bfbfbf] font-normal'>Quick Links</div>
                <div className='flex flex-col gap-1 text-sm font-normal text-black'>
                    <Link href=''>Home</Link>
                    <Link href=''>About</Link>
                    <Link href=''>Store</Link>
                    <Link href=''>Contact</Link>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='text-[#bfbfbf] font-normal'>Help</div>
                <div className='flex flex-col gap-1 text-sm font-normal text-black'>
                    <Link href=''>Sliet</Link>
                    <Link href=''>Ask questions</Link>
                    <Link href=''>Send Feedback</Link>
                    <Link href=''>Terms and conditions</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer