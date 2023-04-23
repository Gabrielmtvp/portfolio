import { Link } from 'react-router-dom';
import './index.scss'

const Sidebar = () => {

    function changeCheckbox() {
        document.getElementById('menu-hamburguer').checked = false;
    }

    return (
        <>
            <input id="menu-hamburguer" type="checkbox" />

            <label for="menu-hamburguer">
                <div class="menu">
                    <span class="hamburguer"></span>
                </div>
            </label>
            <div className='nav-bar-hidden' id="nav-bar">
                <Link className='logo' to='/'>
                    Gabriel Gomes Pacheco
                </Link>
                
                <nav className='nav'>
                    <a href="#about" onClick={() => changeCheckbox}>
                        About
                    </a>
                    <a href="#skills" onClick={() => changeCheckbox}>
                        Skills
                    </a>
                    <a href="#projects" >
                        Projects
                    </a>
                    <a href="#timeline" >
                        Timeline
                    </a>
                    <a href="#contact" >
                        Contact
                    </a>
                </nav>
            </div>
        </>
    )
}

export default Sidebar;