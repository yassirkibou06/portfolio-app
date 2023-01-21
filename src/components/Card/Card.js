/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './card.scss';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { DiCss3,DiReact,DiSass } from 'react-icons/di';
import { TbBrandJavascript } from 'react-icons/tb';
import { SiTailwindcss } from 'react-icons/si';

const Card = ({item}) => {
    return (
        <div key={item.id} className='box'>
            <div className='boxImg'>
                <img src={item.image} alt='' />
            </div>
            <ul className='boxShocail'>
                {item.language.map(e => (
                    <li key={e.id}>
                    <a href=''>
                        {e.one === "html" ? <AiOutlineHtml5 className='bx bx-html' /> 
                        : e.two === "css" ? <DiCss3 className='bx bx-css' /> 
                        : e.three === "js" ? <TbBrandJavascript className='bx bx-js' /> 
                        : e.one === "react" ? <DiReact className='bx bx-react' /> 
                        : e.two === "sass" ? <DiSass className='bx bx-sass' /> 
                        : e.three === "tailwind" ? <SiTailwindcss className='bx bx-tailwind' /> : ""
                        }
                    </a>
                </li>
                ))}
            </ul>
            <div className='boxBtn'>
                <a href={item.link}>Demo</a>
            </div>
        </div>
    )
}

export default Card;

/**
 * <li>
                    <a href=''>
                        <DiCss3 className='bx bx-css' />
                    </a>
                </li>
                <li>
                    <a href=''>
                        <TbBrandJavascript className='bx bx-js' />
                    </a>
                </li>
 */