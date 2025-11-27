'use client'

import { useEffect } from 'react';
import Image from 'next/image';
import { useLocalStorage } from '../../utils/useLocalStorage';
import { detectDarkMode } from '../../utils/detectDarkMode';
import sun from './icon_sun.svg';
import moon from './icon_moon.svg';
import './style.css';

const BtnDarkMode: React.FC = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());

  const toggleDarkMode = () => setDarkMode(darkMode ? false : true)

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    window.
      matchMedia("(prefers-color-scheme: dark)").
      addEventListener('change', (event) => {
        const them = event.matches ? true : false;
        setDarkMode(them)
    })
  })
  
  return (
    <button className={`dark-mode-btn ${darkMode ? 'dark-mode-btn--active' : ''}`} onClick={toggleDarkMode} > 
      <Image src={sun} alt="Light mode" className="dark-mode-btn_icon" />
      <Image src={moon} alt="Dark mode" className="dark-mode-btn_icon" />
    </button>
  );
}
 
export default BtnDarkMode;