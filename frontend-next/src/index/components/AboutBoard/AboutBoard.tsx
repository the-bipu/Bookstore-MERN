import Image from 'next/image'
import React from 'react'

const AboutBoard = (props: any) => {
    const { totalBooksCount } = props;
    
    return (
        <div className='bg-[#FFEFE0] w-full h-auto flex flex-col items-center justify-center gap-10 py-24'>
            <div className='w-8/12 h-auto flex flex-row justify-between'>
                <div className='w-5/12 h-auto text-4xl font-semibold flex flex-col'>
                    <span>About</span>
                    <span>The eBookStore Center</span>
                </div>
                <div className='w-5/12 h-auto font-normal text-base text-[#121212]'>Unlock the world of knowledge with our university-level book platform, offering an extensive collection tailored to students' academic needs.</div>
            </div>
            <div className='w-8/12 h-auto bg-[#FAB8C4] flex flex-row items-center justify-between rounded-2xl'>
                <div className='w-4/12 h-full flex items-end justify-end relative'>
                    <Image src={`/home/books-hands.svg`} alt='' width={350} height={240} className='w-full h-auto' />
                </div>
                <div className='w-8/12 h-56 bg-white flex flex-row items-start justify-center m-5 rounded-2xl p-8 gap-4'>
                    <div className='flex flex-col items-start justify-center text-4xl font-semibold w-7/12 h-full'>
                        <span>The</span>
                        <span>eBookstore Center</span>
                    </div>
                    <div className='w-4/12 h-full flex flex-col items-start justify-center gap-4 pl-8'>
                        <div className='flex flex-col items-start justify-center'>
                            <span className='font-bold'>Author</span>
                            <span>eBookStore Library</span>
                        </div>
                        <div className='flex flex-col items-start justify-center'>
                            <span className='font-bold'>Books</span>
                            <span>Currently {totalBooksCount}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBoard