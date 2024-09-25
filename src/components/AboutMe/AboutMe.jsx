import './AboutMe.css'

function AboutMe () {
    return (
        <div id='aboutme'>
            <strong className='section-title'>
                🌟 About Me
            </strong>
            <p>
                Hello! I’m Hazel Caling, a passionate software engineer with a strong background in logistics. I completed an immersive Software Development course at <a href="https://www.appacademy.io/" className='aboutme-link' target='_blank'>App Academy</a>, focusing on full-stack web development.
            </p>
            <p>
                With over 12 years of experience in the logistics industry, I developed a fascination with technology and its potential to transform operations. This curiosity drove me to explore software development, where I discovered my passion for problem-solving and creating efficient solutions. Transitioning from logistics to software engineering has equipped me with a unique perspective, allowing me to leverage my analytical skills and experience in optimizing processes to build impactful applications.
            </p>
            <h3>In my personal time, you can find me:</h3>
            <ul>
                <li>🐕 <span style={{ fontWeight: '600'}}>Enjoying Nature with Princess & Sofia:</span> I love spending quality time outdoors with my two dogs, soaking in the beauty of nature.</li>
                <li>🍽️ <span style={{ fontWeight: '600'}}>Culinary Explorations:</span> I am always on the lookout for new restaurants to try and diverse cuisines to discover.</li>
                <li>🎬 <span style={{ fontWeight: '600'}}>Movie Nights</span> Unwinding with captivating films that transport me to different worlds, sparking imagination and inspiration.</li>
            </ul>
            <p>I am excited about the opportunity to connect and collaborate with others in the tech community!</p>
        </div>
    )
}

export default AboutMe
