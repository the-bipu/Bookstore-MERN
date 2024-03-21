'use client';
import Link from 'next/link'
import React, { useState } from 'react';

import { FaBars, FaRegWindowClose } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";
import { GiBookStorm } from "react-icons/gi";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (

    <div className={`absolute top-0 z-40 w-full h-[73px] flex items-center justify-center transition-colors duration-500 lg:z-50 lg:border-b bg-transparent ${isActive ? 'active' : ''}`}>

      <div className='w-9/12 h-full flex items-center justify-between text-center lg:px-[80px] px-[20px]'>
        <a href="/" className='text-2xl flex flex-row items-center justify-center gap-2 font-bold text-white righteous'>
          <GiBookStorm /> 
          <span>BookStorm</span>
        </a>

        <div id="menu-btn" onClick={toggleNavbar} className="text-[25px] cursor-pointer text-white lg:hidden block">
          <FaBars className='w-[1.5rem] h-[1.5rem] text-white' />
        </div>

        <nav className={`lg:flex hidden flex-row items-center justify-center gap-8 ${isActive ? 'flex-col items-center' : ''}`}>
          <div className={`absolute top-6 right-8 cursor-pointer text-[#444] hidden ${isActive ? 'block' : ''}`} onClick={toggleNavbar}><FaRegWindowClose /></div>
          <Link href='/' className='text-md text-white font-normal no-underline'>Home</Link>
          <Link href="/about" className='text-md text-white font-normal no-underline'>About</Link>
          <Link href="/books" className='text-md text-white font-normal no-underline'>Store</Link>
          <Link href="/contact" className='text-md text-white font-normal no-underline'>Contact Us</Link>
          <div className=' ml-20 px-4 py-2 rounded-md flex flex-row items-center justify-center gap-2 font-bold customShadow customWhite'><FaPenNib className='text-xl' /> Login</div>
        </nav>
      </div>

      <div id="sidebar" className={`fixed top-0 left-[-250px] w-[250px] h-[100vh] bg-white text-black transition-all pt-[60px] flex flex-col items-center gap-4 ${isActive ? 'left-[0px]' : ''}`}>
        <div id="close-navbar" className={`w-[2rem] h-[2rem] text-[2rem] cursor-pointer text-[#000] ${isActive ? 'block' : ''}`} onClick={toggleNavbar}>
          <FaRegWindowClose className='w-[2rem] h-[2rem] text-black' />
        </div>

        <Link href="/" className='text-[18px] text-black font-semibold no-underline hover:text-[#007bff]'>Home</Link>
        <Link href="/Books" className='text-[18px] text-black font-semibold no-underline hover:text-[#007bff]'>Books</Link>
        <Link href="/About" className='text-[18px] text-black font-semibold no-underline hover:text-[#007bff]'>About</Link>
        <Link href="/Contact" className='text-[18px] text-black font-semibold no-underline hover:text-[#007bff]'>Contact Us</Link>
        <Link href="/Login" className='text-[18px] text-black font-semibold no-underline hover:text-[#007bff]'>Login</Link>
      </div>

    </div>
  )
}

export default Navbar
