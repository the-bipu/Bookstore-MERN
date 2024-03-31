import Image from 'next/image'
import React from 'react'
import ContactBoard from '../components/ContactBoard/ContactBoard'
import ContactForm from '../components/ContactForm/ContactForm'

const ContactView = () => {
    return (
        <div>

            {/* Contact Board contains the main page design. */}
            <ContactBoard />

            {/* Contact Form contains the Form for enquiry. */}
            <ContactForm />

        </div>
    )
}

export default ContactView