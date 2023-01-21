import React, { useState } from 'react';
import { HiOutlineSun,HiOutlineMoon } from 'react-icons/hi';
import './lightMode.scss';

const LightMode = () => {
    const [mode,setMode] = useState(true);

    let clickedClass = "clicked";
    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme;

    if(localStorage) {
        theme = localStorage.getItem("theme");
    }

    if( theme === lightTheme || theme === darkTheme ) {
        body.classList.add(theme);
    }else {
        body.classList.add("dark");
    }

    const switchTheme = (e) => {
        if(theme === lightTheme) {
            body.classList.replace(lightTheme,darkTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "dark");
            theme = darkTheme;
        } else {
            body.classList.replace(darkTheme,lightTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "light");
            theme = lightTheme;
        }
    }
    
  return (
    <div className={theme === "light" ? clickedClass :  "btnMode"} //onClick={() => setMode(!mode)} 
    id="lightMode"
    onClick={(e) => {switchTheme(e);setMode(!mode)}}
    >
        {mode ? <HiOutlineSun />  : <HiOutlineMoon /> }
    </div>
  )
}

export default LightMode;