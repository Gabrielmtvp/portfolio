import Home from '../Home';
import Sidebar from '../Navbar';
import './index.scss';
import useLocalStorage from 'use-local-storage'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const Layout = () => {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
    const [icon, setIcon] = useState(faMoon);

    const switchTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        theme === "light" ? setIcon(faSun) : setIcon(faMoon);
        setTheme(newTheme);
    }

    return (
        <div className='App' data-theme={theme} >
            <button onClick={switchTheme} className="buttonTheme">
                <FontAwesomeIcon icon={icon} style={{color:"white"}} />
            </button>
            { <Sidebar /> }
            { <Home /> }
        </div>
    )
}

export default Layout;