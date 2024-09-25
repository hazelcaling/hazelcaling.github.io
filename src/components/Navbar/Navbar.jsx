
import { TbHome } from "react-icons/tb";
import './Navbar.css'

function Navbar () {

    return (
        <div className='navbar'>
            <div className="logo"><a href="#home"><TbHome /></a></div>
            <div className='navbar-list-items'>
                <ul>
                    <li>
                        <a href="#aboutme">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                    <a href="#contact">Contact</a>
                    </li>
                    <li>
                        <a href="/resume.pdf" target="_blank">Resume</a>
                    </li>
                    {/* <li className="navbar-icon">
                        <CiLinkedin />
                    </li>
                    <li className="navbar-icon">
                        <FiGithub />
                    </li> */}
                </ul>
            </div>
        </div>
    )
}

export default Navbar
