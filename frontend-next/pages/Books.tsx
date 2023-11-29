import TotalDepartment from '@/components/TotalDepartment'
import React from 'react'

function Books() {
  return (
    <div>
      <div className='heading-link'>
        <div className='py-6'>
          <h3>Our Books</h3>
          <p> <a href="/">home</a> / books </p>
        </div>
      </div>
      <div className='py-8'>
        <div className='lg:text-[25px] text-[20px] font-semibold mt-4 mb-4 text-black text-center'>
              Our <span className='text-[#22CFB8]'>Departments 🍃</span>
          </div>
          <div className='mb-8 text-black text-center'>
              Presented herein are some of the most prevalent and sought-after sets in contemporary times.
          </div>

        <TotalDepartment />
      </div>
    </div>
  )
}

export default Books