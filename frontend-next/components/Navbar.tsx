'use client';
import Link from 'next/link'
import React, { useState } from 'react';

import { FaBars, FaRegWindowClose } from "react-icons/fa";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  
  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (

    <div className={`sticky top-0 z-40 w-full backdrop-blur h-[73px] flex items-center transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 ${isActive ? 'active' : ''}`}>

        <div className='w-[100vw] h-full flex items-center justify-between text-center lg:px-[80px] px-[20px]'>
          <a href="/" className='text-[25px] font-bold text-black'>EBooks📔</a>

            <div id="menu-btn" onClick={toggleNavbar} className="text-[25px] cursor-pointer text-white lg:hidden block">
              <FaBars className='w-[1.5rem] h-[1.5rem] text-black' />
            </div>

            <nav className={`lg:flex hidden flex-row gap-8 ${isActive ? 'flex-col items-center' : ''}`}>
              <div className={`absolute top-6 right-8 cursor-pointer text-[#444] hidden ${isActive ? 'block' : ''}`} onClick={toggleNavbar}><FaRegWindowClose /></div>
                <Link href='/' className='text-[20px] text-black font-medium no-underline'>Home</Link>
                <Link href="/Books" className='text-[20px] text-black font-medium no-underline'>Books</Link>
                <Link href="/Departments" className='text-[20px] text-black font-medium no-underline'>Departments</Link>
                <Link href="/About" className='text-[20px] text-black font-medium no-underline'>About</Link>
                <Link href="/Contact" className='text-[20px] text-black font-medium no-underline'>Contact</Link>
                <Link href="/AddBook" className='text-[20px] text-black font-medium no-underline'>Add Book</Link>
            </nav>

      </div>

      <div id="sidebar" className={`fixed top-0 left-[-250px] w-[250px] h-[100vh] bg-white text-black transition-all pt-[60px] flex flex-col items-center gap-4 ${isActive ? 'left-[0px]' : ''}`}>
        <div id="close-navbar" className={`w-[2rem] h-[2rem] text-[2rem] cursor-pointer text-[#000] ${isActive ? 'block' : ''}`} onClick={toggleNavbar}>
          <FaRegWindowClose className='w-[2rem] h-[2rem] text-black' />
        </div>

        <Link href="/" className='text-[18px] text-black font-semibold no-underline hover:text-[#007bff]'>Home</Link>
        <Link href="/Books" className='text-[18px] text-black font-semibold no-underline hover:text-[#007bff]'>Books</Link>
        <Link href="/Departments" className='text-[18px] text-black font-semibold no-underline hover:text-[#007bff]'>Departments</Link>
        <Link href="/AboutPage" className='text-[18px] text-black font-semibold no-underline hover:text-[#007bff]'>About</Link>
        <Link href="/Contact" className='text-[18px] text-black font-semibold no-underline hover:text-[#007bff]'>Contact</Link>
        <Link href="/Login" className='text-[18px] text-black font-semibold no-underline hover:text-[#007bff]'>Login</Link>
      </div>

    </div>
  )
}

export default Navbar
