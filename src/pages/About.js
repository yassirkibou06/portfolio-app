import React from 'react'
import AboutMe from '../components/aboutMe/AboutMe';
import AboutSkills from '../components/aboutSkills/AboutSkills';

const About = () => {
  return (
    <>
    <h1 className='text-center font-semibold text-[38px] md:text-[48px] mb-14 mt-10'>About <span className='text-hover-brown'>Me</span></h1>
    <AboutMe />
    <AboutSkills />
    </>
  )
}

export default About;