import React from 'react';
import './hero.scss';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import protfolioImg from '../../Images/pexels-yasin-gündogdu-2761116.jpg';

const Hero = () => {

    return (
        <div className='hero'>
            <div className='heroContent'>
                <h2>Hi</h2>
                <h2>I'm Yassir Kibou</h2>
                <h2 className='typing'>
                    <Typewriter
                        options={{
                            strings: [`I am a Frond End Devloper`, 'I am a Freelancer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h2>
                <p>
                    Welcom to my portfolio,
                    For more details go to  the about section.
                </p>
            </div>
            <div className='heroImg'>
                <img src={protfolioImg} alt="" />
            </div>
            <div className='allBtn'>
                <Link to="/contact" className='btnFirst'>Contact</Link>
                <Link to="/portfolio" className='btnFirst'>Portfolio</Link>
            </div>
        </div>
    )
}

export default Hero