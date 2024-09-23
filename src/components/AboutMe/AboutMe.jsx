import './AboutMe.css'

function AboutMe () {
    return (
        <div id='aboutme'>
            <strong className='section-title'>
                🌟 About Me
            </strong>
            <p>
                Hi! I’m Hazel, a passionate Fullstack Developer with a solid foundation in software engineering. I have honed my skills in Python, JavaScript, and React, thriving on tackling complex challenges to create impactful web applications that enhance user experiences.
            </p>
            <p>
                🎓 I hold a BSBA in Human Resource Management from the <a href="https://www.pup.edu.ph/" className='aboutme-link'>Polytechnic University of the Philippines 🇵🇭</a>, and I graduated from <a href="https://www.appacademy.io/" className='aboutme-link'>App Academy</a> in July 2024, completing an Immersive Software Development course focused on full-stack web development.
            </p>
            <h3>☕ Outside the Code</h3>
            <ul>
                <li>🐕 Walking my two dogs (Princess & Sofia) and enjoying the outdoors</li>
                <li>☕ Sipping artisanal coffee at cozy cafés</li>
                <li>🍽️ Exploring culinary adventures at new restaurants</li>
                <li>🎬 Unwinding with a captivating movie</li>
                <li>🎮 Diving into games like Othello, Animal Crossing, and Super Mario, where creativity and fun come to life.</li>
            </ul>
        </div>
    )
}

export default AboutMe
