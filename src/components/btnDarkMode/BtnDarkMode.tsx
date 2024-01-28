import { useEffect } from 'react';
import { useLocalStorage } from '../../utils/useLocalStorage';
import { detectDarkMode } from '../../utils/detectDarkMode';
import sun from './icon_sun.svg';
import moon from './icon_moon.svg';
import './style.css';

const BtnDarkMode: React.FC = () => {

  const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode())

  const toggleDarkMode = () => {
    setDarkMode(darkMode ? false : true)
  }

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
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
    <button className={darkMode ? 'dark-mode-btn dark-mode-btn--active' : 'dark-mode-btn'} onClick={toggleDarkMode} > 
      <img src={sun} alt="Light mode" className="dark-mode-btn_icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn_icon" />
    </button>
  );
}
 
export default BtnDarkMode;