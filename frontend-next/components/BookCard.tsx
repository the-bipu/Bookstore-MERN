import React from 'react'

const BookCard = () => {
  return (
    <div>
        <div className='flex flex-col w-full h-auto'>
          <div className='md:px-[5rem] px-[2rem] pt-0 pb-8 flex flex-wrap flex-row items-center justify-center gap-6'>

            {/* First Card */}
            <div className='bg-[#fff] flex flex-col items-start md:w-[350px] w-[90%] shadow-xl'>
              <div>
                <img src="/store-1.jpg" alt="Home Image" className='' />
              </div>
              <div className='p-4 flex flex-col items-start justify-start'>
                <div>THE SUBTLE ART OF NOT GIVING A FUCK</div>
                <div>SEMESTER-1</div>
              </div>
            </div>

            {/* Second Card */}
            <div className='bg-[#fff] flex flex-col items-start md:w-[350px] w-[90%] shadow-xl'>
              <div>
                <img src="/store-2.jpg" alt="Home Image" className='' />
              </div>
              <div className='p-4 flex flex-col items-start justify-start'>
                <div>THE SUBTLE ART OF NOT GIVING A FUCK</div>
                <div>SEMESTER-1</div>
              </div>
            </div>

            {/* Third Card */}
            <div className='bg-[#fff] flex flex-col items-start md:w-[350px] w-[90%] shadow-xl'>
              <div>
                <img src="/store-3.jpg" alt="Home Image" className='' />
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