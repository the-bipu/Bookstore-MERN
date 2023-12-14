import React from 'react'

import { FaCalendarAlt, FaMoneyBill } from 'react-icons/fa';
import { FaLocationDot, FaSuitcase } from "react-icons/fa6";
import { MdArrowForwardIos } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { IoIosMailOpen, IoMdCube } from "react-icons/io";

const AboutSite = () => {
    return (
        <div className='relative bg-[#1b1b1b] py-[40px] transforM overflow-hidden'>
            {/* About Section with Services */}
            <div className='w-full flex flex-row flex-wrap items-start lg:gap-0 gap-4 px-[10%] pt-[20px] pb-[50px] text-white transforN'>

                {/* First Section */}
                <div className='lg:w-[40%] w-auto pr-2'>
                    <div className='lg:text-[25px] text-[20px] font-semibold mt-8 mb-4'>
                        EBookMania <span className='text-[#22CFB8] font-semibold'>Program 🔥</span>
                    </div>
                    <div className='mb-8 text-white'>
                        Introducing the groundbreaking platform tailored for seamless management of university textbooks—our custom-designed website.
                    </div>
                    <button className='text-white flex flex-row items-center justify-center gap-2 bg-[#22CFB8] py-2 px-4 rounded-lg border-2 border-[#22CFB8] hover:bg-transparent hover:text-[#22CFB8]'>
                        About Us <MdArrowForwardIos />
                    </button>
                </div>
                {/* Second Section */}
                <div className='lg:w-[30%] w-auto flex flex-col gap-6'>
                    <div className='flex flex-col items-start justify-start gap-3'>
                        <div className='text-[#22CFB8]'>
                            <GrCertificate className='w-10 h-auto' />
                        </div>
                        <div className='text-white text-[22px] font-semibold'>
                            Get Certified
                        </div>
                        <div className='text-gray-300 text-[16px]'>
                            Get certified in your intrested domain with CodeClause Internship Program
                        </div>
                    </div>
                    <div className='flex flex-col items-start justify-start gap-3'>
                        <div className='text-[#22CFB8]'>
                            <IoIosMailOpen className='w-10 h-auto' />
                        </div>
                        <div className='text-white text-[22px] font-semibold'>
                            Explore Opportunities
                        </div>
                        <div className='text-gray-300 text-[16px]'>
                            Explore Opportunities by CodeClause and get rewarded with Swags.
                        </div>
                    </div>
                </div>
                {/* Third Section */}
                <div className='lg:w-[30%] w-auto flex flex-col gap-6'>
                    <div className='flex flex-col items-start justify-start gap-3'>
                        <div className='text-[#22CFB8]'>
                            <IoMdCube className='w-10 h-auto' />
                        </div>
                        <div className='text-white text-[22px] font-semibold'>
                            Trained by Experts
                        </div>
                        <div className='text-gray-300 text-[16px]'>
                            Get training by experts during internship period and consultancy.
                        </div>
                    </div>
                    <div className='flex flex-col items-start justify-start gap-3'>
                        <div className='text-[#22CFB8]'>
                            <FaSuitcase className='w-10 h-auto' />
                        </div>
                        <div className='text-white text-[22px] font-semibold'>
                            Gain Experience
                        </div>
                        <div className='text-gray-300 text-[16px]'>
                            Gain experience in your intrested technology and add it in your resume or CV.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutSite