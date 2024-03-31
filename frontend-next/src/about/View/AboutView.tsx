import React from 'react'
import AboutContainer from '../components/AboutContainer/AboutContainer'
import AboutBoard from '../components/AboutBoard/AboutBoard'

const AboutView = () => {
    return (
        <div className='gradientLinear'>

            {/* About Container contains the main page for about. */}
            <AboutContainer />

            {/* About Board contains message why we need BookStorm. */}
            <AboutBoard />

        </div>
    )
}

export default AboutView