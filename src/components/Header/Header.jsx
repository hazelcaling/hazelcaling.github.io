import { FaCode } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import './Header.css'

function Header () {
    const skills = [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
    ]
    return (
        <div className='header' id='home'>
            <div className='header-text'>
                Hi, my <br/>
                name is <strong>Hazel</strong>. <br />
                Fullstack developer
            </div>
            <div>
                <h3 className="skills" style={{color: '#2F4F4F'}}>Skills at a Glance</h3>
            </div>
            <div class="logos">
                <div class="logos-slide">
                    {skills.map((skill, index) => (
                        <img key={index} src={skill}/>
                    ))}
                </div>
                <div class="logos-slide">
                    {skills.map((skill, index) => (
                        <img key={index} src={skill}/>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Header
