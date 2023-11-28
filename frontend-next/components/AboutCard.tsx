import React from 'react'

const AboutCard = () => {
  return (
    <div>
        <div className='flex flex-row w-full h-auto gap-8 p-20 pb-8 pt-0'>
            <div className='md:w-50% w-[90%] h-auto'>
              <img src="/store-1.jpg" alt="" className='' />
            </div>
            <div className='md:w-50% w-[90%] h-auto'>
              Welcome to our house rental platform, where your perfect tenant is just a click away. List your property with detailed information and captivating visuals, allowing potential renters to explore, engage, and connect directly with you. From liking and exploring properties to initiating real-time conversations, finding the ideal home or tenant has never been easier!
            </div>
          </div>
          
          <div className='flex flex-row w-full h-auto gap-8 p-20 pb-8 pt-0'>
            <div className='md:w-50% w-[90%] h-auto'>
              In a fast-paced world where convenience matters, this website streamlines the daunting process of finding or renting a house. For landlords, it offers a centralized platform to showcase their properties comprehensively, reaching a wider audience while facilitating direct interaction with potential tenants. This efficiency saves time, simplifies negotiations, and ensures a more tailored rental experience.
            </div>
            <div className='md:w-50% w-[90%] h-auto'>
              <img src="/store-2.jpg" alt="" className='' />
            </div>
          </div>

          <div className='flex flex-row w-full h-auto gap-8 p-20 pb-8 pt-0'>
            <div className='md:w-50% w-[90%] h-auto'>
              <img src="/store-3.jpg" alt="" className='' />
            </div>
            <div className='md:w-50% w-[90%] h-auto'>
              On the other hand, for tenants seeking their next home, this platform provides a diverse array of rental options with detailed information, high-quality images, and direct communication channels with landlords. It simplifies the search process, empowering renters to make informed decisions and fostering a more transparent and efficient renting experience.
            </div>
        </div>
    </div>
  )
}

export default AboutCard