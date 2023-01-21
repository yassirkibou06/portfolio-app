import React from 'react';
import Card from '../Card/Card';
import { DataWork } from '../../DataWork';

const Work = () => {

  return (
    <div className='mx pt-7 pb-36 grid grid-cols-1 md:grid-cols-2 md:gap-16 lg:grid-cols-3 gap-1 justify-items-center'>
      {DataWork.map((item,i) => (
        <Card item={item} key={i}/>
      ))}
    </div>
  )
}

export default Work