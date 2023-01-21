import React,{ useState } from 'react';
import './nav.scss'
import { Link } from "react-router-dom";
import { HiArrowLeft,HiArrowRight } from 'react-icons/hi';

const Nav = () => {
    const [show,setShow] = useState(false);
    return (
        <div className='heroNav'>
            <div className='Arrow ' onClick={() => setShow(!show)}>
                {show ? <HiArrowRight /> : <HiArrowLeft />}
            </div>
                <ul className={`NavSlide ${show ? "show" : "hide"}`}>
                    <li>
                        <Link to={`/`}>Home</Link>
                    </li>
                    <li>
                        <Link to={`/about`}>About</Link>
                    </li>
                    <li>
                        <Link to={`/portfolio`}>Portfolio</Link>
                    </li>
                    <li>
                        <Link to={`/contact`}>Contact</Link>
                    </li>
                </ul>
        </div>
    )
}

export default Nav;