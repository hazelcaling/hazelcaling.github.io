import { CiLinkedin } from 'react-icons/ci';
import { FiGithub } from 'react-icons/fi';
import './Footer.css';

function Footer() {
    return (
        <div className="bottom-images">
            <img src="avatar.png" alt="Avatar" className='left-image' />
            <div className='center-text'>
                <p>
                    <a href="https://www.linkedin.com/in/hazel-c-37255a59/" target="_blank" rel="noopener noreferrer">
                        <CiLinkedin className='icon' />
                    </a>
                    <a href="https://github.com/hazelcaling" target="_blank" rel="noopener noreferrer">
                        <FiGithub className='icon' />
                    </a>
                </p>
                <p>&copy; 2024 Hazel Caling. All rights reserved.</p>
            </div>
            <div className='right-image'>
                <img src="princess.png" alt="Princess" />
                <img src="sofia.png" alt="Sofia" />
            </div>
        </div>
    );
}

export default Footer;
