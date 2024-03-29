'use client';
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image';

import { UserContext } from '@/common/context/userContext';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useSnackbar } from 'notistack';

import { FaEye } from "react-icons/fa";
import { IoArrowBackCircle } from 'react-icons/io5';

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { isLoggedIn, setLoggedIn, loggedInEmail, setLoggedInEmail } = useContext(UserContext);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const { enqueueSnackbar } = useSnackbar();


  useEffect(() => {
    const storedLoggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    const storedEmail = localStorage.getItem('loggedInEmail') || '';
    setLoggedIn(storedLoggedInStatus);
    setLoggedInEmail(storedEmail);
  }, []);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const url = 'https://bookstorm-rsmvx03awqentulqskokde6yg.vercel.app/users/login';

    try {
      const formData = loginData;
      setLoading(true);

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setLoading(false);
        enqueueSnackbar("Logged In Successfully!", { variant: 'success' });
        setLoggedIn(true);
        setLoggedInEmail(loginData.email);
        router.push(`/`);

        setLoginData({ email: '', password: '' })
      } else {
        setLoading(false);
        enqueueSnackbar("Error", { variant: 'error' });
        console.error('Failed');
        setLoginData({ email: '', password: '' });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
    localStorage.setItem('loggedInEmail', loggedInEmail);
  }, [isLoggedIn, loggedInEmail]);

  const RegisterBtnClick = () => {
    router.push(`/auth/register`);
  }

  return (
    <>
      <Head>
        <link rel="icon" href="/icon-main.svg" type="image/svg" sizes="70x70" />
        <title>Login | BookStorm | 2024</title>
        <meta name="description" content="" />
      </Head>

      <div className='flex flex-col items-center justify-center min-h-screen bg-[#f7f7f7]'>
        <div className=' w-full h-screen md:flex hidden md:flex-row flex-col md:gap-0 gap-20'>
          <div className=' w-6/12 h-auto flex items-center justify-center bg-[#5956E9]'>
            <div className=' min-w-96 w-8/12 px-8 py-6 flex flex-col gap-2 items-center justify-center m-auto rounded-2xl shadow-md bg-white'>
              <div className='flex flex-row items-center justify-center w-full relative mb-6'>
                <button onClick={() => router.push('/')}>
                  <IoArrowBackCircle className=' absolute left-0 top-0 text-[#5956E9] text-3xl' />
                </button>
                <span className='text-2xl font-bold text-black'>BookStorm</span>
              </div>
              <form action='/' onSubmit={handleSubmit} className='flex flex-col items-start min-w-[320px] w-full h-auto'>
                <div className=' w-full flex flex-col items-center justify-center pb-6'>
                  <h3 className=' text-2xl capitalize font-bold font-sans'>Hi, Welcome Back! 👋</h3>
                </div>
                <label htmlFor="email" className='mb-1 text-lg'>Email</label>
                <div className='flex flex-row items-center rounded-lg w-full min-h-12 justify-start pl-4 mb-4 customBorder py-2'>
                  <Image src='/login/gmail-logo.png' alt='flaticon gmail' width={20} height={20} />
                  <input type="email" name="email" onChange={handleInputChange} pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" title="Must be a valid Email" placeholder='example@gmail.com' className=' w-full h-full indent-4 outline-none rounded-xl placeholder:text-base placeholder:text-[#00000075] placeholder:font-medium' required />
                </div>
                <label htmlFor="password" className='mb-1 text-lg'>Password</label>
                <div className='flex flex-row items-center rounded-lg w-full min-h-12 justify-start px-4 py-2 border customBorder mb-1'>
                  <Image src='/login/key.png' alt='flaticon key' width={20} height={20} />
                  <input type={`${showPass ? 'text' : 'password'}`} name='password' onChange={handleInputChange} title='Must be at least 6 characters' placeholder='Enter Your Password' className=' w-full h-full indent-4 outline-none rounded-xl placeholder:text-base placeholder:text-[#00000075] placeholder:font-medium' required />
                  <FaEye className='text-2xl text-[#525252] md:opacity-0 opacity-100 hover:opacity-100' onClick={() => { setShowPass(!showPass) }} />
                </div>
                <div className='mb-4 flex flex-row justify-between w-full'>
                  <div className='flex items-center justify-center'>
                    <input type="checkbox" className=' mr-2' />
                    Remember Me
                  </div>
                  <button className=' text-[#de4444] text-base font-light hover:underline'>Forget Password?</button>
                </div>
                <button className=' text-base w-full min-h-12 rounded-lg text-white font-light bg-[#5956E9] cursor-pointer mb-6 py-2'>Login</button>
                <div className='relative w-full h-auto flex flex-row justify-center items-center capitalize gap-2'>
                  <hr className='w-full bg-[#0000004d] h-[0.5px]' />
                  <span className=' w-7/12 px-2 text-center'> or just</span>
                  <hr className='w-full bg-[#0000004d] h-[0.5px]' />
                </div>
                <div className='flex flex-row items-center justify-center mt-4 rounded-lg gap-2 py-2 w-full min-h-12 text-base font-light cursor-pointer customBorder'>
                  <Image src='/login/google.png' alt='flaticon google' width={18} height={18} />
                  Login with
                  <span className='text-base font-medium'>Google</span>
                </div>

                <div className='flex flex-row items-center justify-center mt-4 rounded-lg gap-2 py-2 w-full min-h-12 text-base font-light text-white cursor-pointer border bg-[#1877F2]'>
                  <Image src='/login/facebook.png' alt='flaticon facebook' width={18} height={18} />
                  Login with
                  <span className='text-base font-medium'>Facebook</span>
                </div>
              </form>
              <div className=' text-[#525252] font-light mt-4'>Don't have an account? <button className='font-semibold hover:underline' onClick={RegisterBtnClick}>Create Account!</button></div>
            </div>
          </div>
          <div className='w-6/12 h-full flex flex-col items-center justify-center gap-6'>
            <Image src={`/login/login.svg`} alt='peaceful place' width={500} height={800} className=' w-10/12 h-auto' />
          </div>
        </div>

        {/* Mobile Design */}

        <div className='md:w-10/12 w-full h-screen bg-white md:hidden flex md:flex-row flex-col md:gap-0 gap-20 md:rounded-3xl rounded-lg'>
          <div className=' w-10/12 h-auto md:p-0 py-6 md:px-10 px-2 flex flex-col gap-2 items-center justify-center m-auto md:rounded-l-3xl rounded-lg'>
            <div className='flex flex-row items-center justify-center w-full relative mb-6'>
              <button onClick={() => router.push('/')}>
                <IoArrowBackCircle className=' absolute left-0 top-0 text-[#1ab69d] text-3xl' />
              </button>
              <span className='text-2xl font-bold text-black'>BookStorm</span>
            </div>
            <form action='/' onSubmit={handleSubmit} className='flex flex-col items-start md:min-w-80 w-full h-auto'>
              <div className=' w-full flex flex-col items-center justify-center pb-6'>
                <h3 className=' text-2xl capitalize font-bold font-sans'>Hi, Welcome Back! 👋</h3>
              </div>
              <label htmlFor="email" className='mb-1 text-lg'>Email</label>
              <div className='flex flex-row items-center rounded-lg w-full min-h-12 justify-start pl-4 border border-[#0000004d] mb-4 py-2 customBorder'>
                <Image src='/login/gmail-logo.png' alt='flaticon gmail' width={20} height={20} />
                <input type="email" name="email" onChange={handleInputChange} pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" title="Must be a valid Email" placeholder='example@gmail.com' className=' w-full h-full indent-4 outline-none rounded-xl placeholder:text-base placeholder:text-[#00000075] placeholder:font-medium' required />
              </div>
              <label htmlFor="password" className='mb-1 text-lg'>Password</label>
              <div className='flex flex-row items-center rounded-lg w-full min-h-12 justify-start px-4 border border-[#0000004d] mb-1 py-2 customBorder'>
                <Image src='/login/key.png' alt='flaticon key' width={20} height={20} />
                <input type={`${showPass ? 'text' : 'password'}`} name='password' onChange={handleInputChange} title='Must be at least 6 characters' placeholder='Enter Your Password' className=' w-full h-full indent-4 outline-none rounded-xl placeholder:text-base placeholder:text-[#00000075] placeholder:font-medium' required />
                <FaEye className='text-2xl text-[#525252] md:opacity-0 opacity-100 hover:opacity-100' onClick={() => { setShowPass(!showPass) }} />
              </div>
              <div className='mb-4 flex flex-row justify-between w-full'>
                <div className='flex items-center justify-center'>
                  <input type="checkbox" className=' mr-2' />
                  Remember Me
                </div>
                <button className=' text-[#de4444] text-base font-light hover:underline'>Forget Password?</button>
              </div>
              <button className=' text-base w-full min-h-12 rounded-lg text-white font-light bg-[#1ab69d] cursor-pointer mb-6 py-2'>Login</button>
              <div className='relative w-full h-auto flex flex-row justify-center items-center capitalize gap-2'>
                <hr className='w-full bg-[#0000004d] h-[0.5px]' />
                <span className=' w-7/12 px-2 text-center'> or just</span>
                <hr className='w-full bg-[#0000004d] h-[0.5px]' />
              </div>
              <div className='flex flex-row items-center justify-center mt-4 rounded-lg gap-2 py-2 w-full min-h-12 text-base font-light cursor-pointer customBorder'>
                <Image src='/login/google.png' alt='flaticon google' width={18} height={18} />
                Login with
                <span className='text-base font-medium'>Google</span>
              </div>

              <div className='flex flex-row items-center justify-center mt-4 rounded-lg gap-2 py-2 w-full min-h-12 text-base font-light text-white cursor-pointer border bg-[#1877F2]'>
                <Image src='/login/facebook.png' alt='flaticon facebook' width={18} height={18} />
                Login with
                <span className='text-base font-medium'>Facebook</span>
              </div>
            </form>
            <div className=' text-[#525252] font-light mt-4'>Don't have an account? <button className='font-bold hover:underline' onClick={RegisterBtnClick}>Create Account!</button></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login