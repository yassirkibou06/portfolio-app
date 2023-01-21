import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './aboutSkills.scss'

const AboutSkills = () => {
    const [percentageHtml, setpercentageHtml] = useState(0);
    const [percentageCss, setpercentageCss] = useState(0);
    const [percentageJs, setpercentageJs] = useState(0);
    const [percentageReact, setpercentageReact] = useState(0);
    const [percentageTailwind, setpercentageTailwind] = useState(0);
    const [percentageSass, setpercentageSass] = useState(0);

    useEffect( () => {

            setTimeout(() => {
                if (percentageHtml < 90) {
                    setpercentageHtml(percentageHtml + 1);
                }
            }, 50);
            //css
            setTimeout(() => {
                if (percentageCss < 95) {
                    setpercentageCss(percentageCss + 1);
                }
            }, 50);
            //css
            setTimeout(() => {
                if (percentageCss < 95) {
                    setpercentageCss(percentageCss + 1);
                }
            }, 50);
            //js
            setTimeout(() => {
                if (percentageJs < 75) {
                    setpercentageJs(percentageJs + 1);
                }
            }, 50);
            //React
            setTimeout(() => {
                if (percentageReact < 100) {
                    setpercentageReact(percentageReact + 1);
                }
            }, 50);
            //Tailwind
            setTimeout(() => {
                if (percentageTailwind < 80) {
                    setpercentageTailwind(percentageTailwind + 1);
                }
            }, 50);
            //sass
            setTimeout(() => {
                if (percentageSass < 70) {
                    setpercentageSass(percentageSass + 1);
                }
            }, 50);
    }, [percentageHtml,percentageCss,percentageJs,percentageReact,percentageTailwind,percentageSass]);


    return (
        <div className='skills'>
            <h2>MY SKILLS</h2>
            <div className='skill'>
                {/**HTML //////// */}
                <div className='contentSkill'>
                    <CircularProgressbar
                        value={percentageHtml}
                        text={`${percentageHtml}%`}
                    />
                    <h3>HTML</h3>
                </div>
                {/**CSS //////// */}
                <div className='contentSkill'>
                    <CircularProgressbar
                        value={percentageCss}
                        text={`${percentageCss}%`}
                    />
                    <h3>CSS</h3>
                </div>
                {/**JS //////// */}
                <div className='contentSkill'>
                    <CircularProgressbar
                        value={percentageJs}
                        text={`${percentageJs}%`}
                    />
                    <h3>JavaScript</h3>
                </div>
                {/**REACT JS //////// */}
                <div className='contentSkill'>
                    <CircularProgressbar
                        value={percentageReact}
                        text={`${percentageReact}%`}
                    />
                    <h3>ReactJs</h3>
                </div>
                {/**TailwindCss //////// */}
                <div className='contentSkill'>
                    <CircularProgressbar
                        value={percentageTailwind}
                        text={`${percentageTailwind}%`}
                    />
                    <h3>TailwindCss</h3>
                </div>
                {/**Sass //////// */}
                <div className='contentSkill'>
                    <CircularProgressbar
                        value={percentageSass}
                        text={`${percentageSass}%`}
                    />
                    <h3>SASS</h3>
                </div>
            </div>
        </div>
    )
}

export default AboutSkills;