import { Link, a } from 'react-router-dom';
import './index.scss'

const Sidebar = () => {

    function changeCheckbox() {
        console.log("testeee");
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
                
                {/* <ul>
                    <li>
                        <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/gabrielpgomes/'>
                            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel='noreferrer' href='https://github.com/Gabrielmtvp'>
                            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel='noreferrer' href='https://github.com/Gabrielmtvp'>
                            <FontAwesomeIcon icon={faPhone} color='#4d4d4e' />
                        </a>
                    </li>
                </ul> */}
            </div>
        </>
    )
}

export default Sidebar;