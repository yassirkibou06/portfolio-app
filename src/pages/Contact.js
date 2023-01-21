import React from 'react'
import ContactMe from '../components/contactMe/ContactMe';

const Contact = () => {
  return (
    <>
    <h1 className='text-center font-semibold text-[38px] md:text-[48px] mb-14 mt-10'>Contact <span className='text-hover-brown'>Me</span></h1>
    <ContactMe />
    </>
  )
}

export default Contact;