import React from 'react';
import { Link } from 'react-router-dom';
import LightMode from '../lightMode/LightMode';

const Header = () => {
  return (
    <div className='mx mt-5 flex justify-between items-center'>
      <Link className='logo text-[23px] md:text-[28px] font-bold' to="/" >YASSIR</Link>
      <LightMode />
    </div>
  )
}

export default Header