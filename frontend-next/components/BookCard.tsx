import React from 'react'

const BookCard = () => {
  return (
    <div>
        <div className='flex flex-col w-full h-auto'>
          <div className='md:px-[5rem] px-[2rem] pt-0 pb-8 flex flex-wrap flex-row items-center justify-center gap-6'>

            {/* First Card */}
            <div className='bg-[#fff] flex flex-col items-start w-[300px] shadow-xl'>
              <div>
                <img src="/book-1.png" alt="Home Image" className='' />
              </div>
              <div className='p-4 flex flex-col items-start justify-start'>
                <div>THE SUBTLE ART OF NOT GIVING A FUCK</div>
                <div>SEMESTER-1</div>
              </div>
            </div>

            {/* Second Card */}
            <div className='bg-[#fff] flex flex-col items-start w-[300px] shadow-xl'>
              <div>
                <img src="/book-2.png" alt="Home Image" className='' />
              </div>
              <div className='p-4 flex flex-col items-start justify-start'>
                <div>THE SUBTLE ART OF NOT GIVING A FUCK</div>
                <div>SEMESTER-1</div>
              </div>
            </div>

            {/* Third Card */}
            <div className='bg-[#fff] flex flex-col items-start w-[300px] shadow-xl'>
              <div>
                <img src="/book-3.png" alt="Home Image" className='' />
              </div>
              <div className='p-4 flex flex-col items-start justify-start'>
                <div>THE SUBTLE ART OF NOT GIVING A FUCK</div>
                <div>SEMESTER-1</div>
              </div>
            </div>

          </div>

        </div>
    </div>
  )
}

export default BookCard