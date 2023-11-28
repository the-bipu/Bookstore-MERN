import React from 'react'

const AboutCard = () => {
  return (
    <div className='text-justify'>
        <div className='flex lg:flex-row flex-col justify-center w-full h-auto gap-8 pb-8 pt-0'>
            <div className='md:w-50% w-[90%] h-auto'>
              <img src="/store-1.png" alt="" className='' />
            </div>
            <div className='md:w-50% w-[90%] h-auto'>
              Welcome to our book store website, where you can easily find the books that you need. Introducing the groundbreaking platform tailored for seamless management of university textbooks—our custom-designed website. This digital haven provides an organized repository for storing names, associated PDFs, and the respective semesters wherein each book is required. Created with the student community in mind, this platform aims to revolutionize the way we access, share, and manage academic resources.

            <br /><br />
              The necessity for such a platform stems from the perpetual struggle students face in accessing prescribed textbooks. Often, university bookstores run out of stock, leaving students scrambling to find alternative sources. By centralizing this repository online, we mitigate the hassle of physical searches, offering an accessible database that students can tap into at any time, from any location.
            </div>
          </div>

          <div className='flex lg:flex-row flex-col-reverse justify-center w-full h-auto gap-8 pb-8 pt-0'>
            <div className='md:w-50% w-[90%] h-auto'>
                This digital library not only promotes convenience but also facilitates a more eco-friendly approach by reducing the need for printed materials, aligning with the growing trend towards sustainability in education.

            <br /><br />
                Moreover, the website bridges the gap between different academic semesters, providing a holistic view of the required textbooks across varied courses and study programs. With a dedicated section for each semester, students can easily navigate and locate the materials relevant to their ongoing courses. This functionality streamlines the process of obtaining course materials, ensuring that students have timely access to the resources they need for their studies. Additionally, it fosters collaboration and knowledge-sharing among peers by encouraging the exchange of supplementary study materials and resources, enhancing the overall academic experience within the university community.
            </div>
            <div className='md:w-50% w-[90%] h-auto'>
              <img src="/store-2.png" alt="" className='' />
            </div>
        </div>
    </div>
  )
}

export default AboutCard