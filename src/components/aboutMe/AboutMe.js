import React from 'react';
import './aboutMe.scss';


const AboutMe = () => {
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 gap-7 justify-items-center'>
      <div className='infos'>
        <h2>PERSONAL INFOS</h2>
        <div className='infosContent'>
          <div className='left' >
            <h4><span>First Name :</span> Yassir</h4>
            <h4><span>Age :</span> 20 Years</h4>
            <h4 className='text-green-500'><span>Freelancer :</span> Available</h4>
            <h4><span>Phone :</span> +212675467067</h4>
          </div>
          <div className='right' >
            <h4><span>Last Name :</span> Kibou</h4>
            <h4><span>Nationality :</span> Moroccan</h4>
            <h4><span>Email:</span> yassirKibou06@gmail.com</h4>
            <h4><span>Langages :</span> English</h4>
          </div>
        </div>
      </div>
      <div className='mySelf'>
        <h2>A BIT ABOUT MYSELF</h2>
        <p>
          I'm a Frontend Web Developer building
          the Front-end of Websites ,
          Working with HTML/CSS javaScript and Reactjs.
          Check out some of my work in
          the Portfolio section.
        </p>
      </div>
    </div>
  )
}

export default AboutMe;