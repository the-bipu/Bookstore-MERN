'use client';
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useSnackbar } from 'notistack';
import { UserContext } from '@/common/context/userContext';
import { FaEye } from "react-icons/fa";
import { IoArrowBackCircle } from 'react-icons/io5';
import Image from 'next/image';

const RegisterDiv = () => {
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();
  const { isLoggedIn, setLoggedIn, loggedInEmail, setLoggedInEmail } = useContext(UserContext);
  const [registerData, setRegisterData] = useState({ email: '', password: '', phone: '', fname: '' });

  useEffect(() => {
    const storedLoggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    const storedEmail = localStorage.getItem('loggedInEmail') || '';
    setLoggedIn(storedLoggedInStatus);
    setLoggedInEmail(storedEmail);
  }, []);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const url = 'https://bookstorm-rsmvx03awqentulqskokde6yg.vercel.app/users/register';

    try {
      const formData = registerData;
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
        enqueueSnackbar("Successfully Registered!", { variant: 'success' });
        setLoggedIn(true);
        setLoggedInEmail(registerData.email);
        router.push(`/`);

        setRegisterData({ email: '', password: '', phone: '', fname: '' });
        console.log(registerData);
      } else {
        setLoading(false);
        enqueueSnackbar("Error", { variant: 'error' });
        setRegisterData({ email: '', password: '', phone: '', fname: '' });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
    localStorage.setItem('loggedInEmail', loggedInEmail);
  }, [isLoggedIn, loggedInEmail]);

  const LoginBtnClick = () => {
    router.push(`/auth/login`);
  }

  return (
    <>
      <Head>
        <link rel="icon" href="/icon-main.svg" type="image/svg" sizes="70x70" />
        <title>Register | BookStorm | 2024</title>
        <meta name="description" content="" />
      </Head>

      <div className='flex flex-col items-center justify-center min-h-screen bg-[#f7f7f7]'>
        <div className=' w-full h-screen md:flex hidden md:flex-row flex-col md:gap-0 gap-20'>
          <div className='w-6/12 h-full flex flex-col items-center justify-center gap-6'>
            <Image src={`/login/register.svg`} alt='peaceful place' width={800} height={800} className=' w-10/12 h-auto' />
          </div>
          <div className=' w-6/12 h-auto flex items-center justify-center bg-[#5956E9]'>
            <div className=' min-w-96 w-8/12 px-8 py-6 flex flex-col gap-2 items-center justify-center m-auto rounded-2xl shadow-md bg-white'>
              <div className='flex flex-row items-center justify-center w-full relative mb-6'>
                <button onClick={() => router.push('/')}>
                  <IoArrowBackCircle className=' absolute left-0 top-0 text-[#5956E9] text-3xl' />
                </button>
                <span className='text-2xl font-bold text-black'>BookStorm</span>
              </div>
              <form action='/' onSubmit={handleSubmit} className='flex flex-col items-start min-w-[320px] w-full h-auto'>
                <div className='flex flex-col items-center w-full mb-6'>
                  <h3 className=' text-2xl font-semibold'>Create an account</h3>
                  <p className=' text-[#525252] text-base font-light'>Register and start your journey today!</p>
                </div>
                <div className='flex flex-row justify-between w-full'>
                  <div className='flex flex-row items-center rounded-lg w-full min-h-12 justify-start px-4 border border-[#0000004d] mb-3 customBorder py-2'>
                    <Image src='/login/id-card.png' alt='flaticon user' width={22} height={22} />
                    <input type="text" name="fname" onChange={handleInputChange} placeholder='First Name' className=' w-full h-full outline-none indent-2 rounded-xl placeholder:text-base placeholder:text-[#00000075] placeholder:font-medium' required />
                  </div>
                </div>
                <div className='flex flex-row items-center rounded-lg w-full min-h-12 justify-start px-4 border border-[#0000004d] mb-3 customBorder py-2'>
                  <Image src='/login/gmail-logo.png' alt='flaticon gmail' width={20} height={20} />
                  <input type="email" name="email" onChange={handleInputChange} pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" title="Must be a valid Email" placeholder='Enter Your Email' className=' indent-2 w-full h-full outline-none rounded-xl placeholder:text-base placeholder:text-[#00000075] placeholder:font-medium' required />
                </div>
                <div className='flex flex-row items-center rounded-lg w-full min-h-12 justify-start px-4 border border-[#0000004d] mb-3 customBorder py-2'>
                  <Image src='/login/telephone.png' alt='flaticon mortarboard' width={20} height={20} />
                  <input type="text" name="phone" onChange={handleInputChange} pattern="[0-9]{10}" title="Must be a valid Number" placeholder='Enter Your Phone Number' className=' indent-2 w-full h-full outline-none rounded-xl placeholder:text-base placeholder:text-[#00000075] placeholder:font-medium' required />
                </div>
                <div className='flex flex-row items-center rounded-lg w-full min-h-12 justify-start px-4 border border-[#0000004d] mb-4 customBorder py-2'>
                  <Image src='/login/key.png' alt='flaticon facebook' width={20} height={20} />
                  <input type={`${showPass ? 'text' : 'password'}`} name="password" onChange={handleInputChange} placeholder='Enter Your Password' className=' indent-2 w-full h-full outline-none rounded-xl placeholder:text-base placeholder:text-[#00000075] placeholder:font-medium' required />
                  <FaEye className='text-2xl text-[#525252] md:opacity-0 opacity-100 hover:opacity-100' onClick={() => { setShowPass(!showPass) }} />
                </div>
                <button type='submit' className=' text-base w-full min-h-12 rounded-lg text-white font-light bg-[#5956E9] cursor-pointer mb-6 py-2'>Register</button>
              </form>
              <div className=' text-[#525252] font-light'>Already have an account!? <button className='font-semibold' onClick={LoginBtnClick}>Login</button></div>
            </div>
          </div>
        </div>

        {/* Mobile Design */}

        <div className='md:w-10/12 w-full h-screen bg-white md:hidden flex md:flex-row flex-col md:gap-0 gap-20 md:rounded-3xl rounded-lg'>
          <div className=' w-10/12 h-auto md:p-0 py-6 md:px-10 px-2 flex flex-col gap-2 items-center justify-center m-auto md:rounded-l-3xl rounded-lg'>
            <div className='flex flex-row items-center justify-center w-full relative mb-6'>
              <button onClick={() => router.push('/')}>
                <IoArrowBackCircle className=' absolute left-0 top-0 text-[#5956E9] text-3xl' />
              </button>
              <span className='text-2xl font-bold text-black'>BookStorm</span>
            </div>
            <form action='/' onSubmit={handleSubmit} className='flex flex-col items-center w-full h-auto'>
              <div className='flex flex-col items-center mb-6'>
                <h3 className=' text-2xl font-semibold'>Create an account</h3>
                <p className=' text-[#525252] text-base font-light'>Register and start your journey today!</p>
              </div>
              <div className='w-full flex flex-row justify-between'>
                <div className='flex flex-row items-center rounded-lg w-full min-h-12 justify-start px-4 py-2 mb-3 customBorder'>
                  <Image src='/login/id-card.png' alt='flaticon user' width={22} height={22} />
                  <input type="text" name="fname" onChange={handleInputChange} placeholder='First Name' className=' w-full h-full outline-none indent-2 rounded-xl placeholder:text-base placeholder:text-[#00000075] placeholder:font-medium' required />
                </div>
              </div>
              <div className='flex flex-row items-center rounded-lg w-full min-h-12 justify-start px-4 py-2 mb-3 customBorder'>
                <Image src='/login/gmail-logo.png' alt='flaticon gmail' width={20} height={20} />
                <input type="email" name="email" onChange={handleInputChange} pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" title="Must be a valid Email" placeholder='Enter Your Email' className=' indent-2 w-full h-full outline-none rounded-xl placeholder:text-base placeholder:text-[#00000075] placeholder:font-medium' required />
              </div>
              <div className='flex flex-row items-center rounded-lg w-full min-h-12 justify-start px-4 py-2 mb-3 customBorder'>
                <Image src='/login/mortarboard.png' alt='flaticon mortarboard' width={22} height={22} />
                <input type="text" name="college" onChange={handleInputChange} placeholder='Enter Your College' className=' indent-2 w-full h-full outline-none rounded-xl placeholder:text-base placeholder:text-[#00000075] placeholder:font-medium' required />
              </div>
              <div className='flex flex-row items-center rounded-lg w-full min-h-12 justify-start px-4 py-2 mb-3 customBorder'>
                <Image src='/login/telephone.png' alt='flaticon mortarboard' width={20} height={20} />
                <input type="text" name="phone" onChange={handleInputChange} pattern="[0-9]{10}" title="Must be a valid Number" placeholder='Enter Your Phone Number' className=' indent-2 w-full h-full outline-none rounded-xl placeholder:text-base placeholder:text-[#00000075] placeholder:font-medium' required />
              </div>
              <div className='flex flex-row items-center rounded-lg w-full min-h-12 justify-start px-4 py-2 mb-4 customBorder'>
                <Image src='/login/key.png' alt='flaticon facebook' width={20} height={20} />
                <input type={`${showPass ? 'text' : 'password'}`} name="password" onChange={handleInputChange} placeholder='Enter Your Password' className=' indent-2 w-full h-full outline-none rounded-xl placeholder:text-base placeholder:text-[#00000075] placeholder:font-medium' required />
                <FaEye className='text-2xl text-[#525252] md:opacity-0 opacity-100 hover:opacity-100' onClick={() => { setShowPass(!showPass) }} />
              </div>
              <button type='submit' className=' text-base w-full min-h-12 rounded-lg text-white font-light bg-[#5956E9] cursor-pointer mb-6 py-2'>Register</button>
            </form>
            <div className=' text-[#525252] font-light'>Already have an account!? <button className='font-bold' onClick={LoginBtnClick}>Login</button></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterDiv