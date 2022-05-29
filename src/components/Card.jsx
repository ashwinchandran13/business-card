import React from "react";

const Card = () => {
    return <main>
        <img alt='portrait' src={require("../images/portrait.png")} className='portrait' />
        <div className="titles">
            <h1>Ashwin Chandran</h1>
            <h3>Full Stack Developer</h3>
            <a href="https://ashwin-chandran-portfolio.vercel.app/" className="portfolio">portfolio website</a>
        </div>
        <div className="contact-links">
            <a href="" className="email-btn" alt='email icon'>
            <img alt='portrait' src={require("../images/Mail.png")} />    
                Email
            </a>
            <a href="" className="linkedin-btn" alt='linkedin icon'>
            <img alt='portrait' src={require("../images/linkedin.png")} />
                LinkedIn
            </a>
        </div>
        <div className="content-section">
            <h2>About</h2>
            <p>
                I am a full stack developer with expertise particularly in React and AWS(serverless). I'm always keen and willing to learn new technologies and to try out ways to implement the technologies in best way possible.
            </p>
        </div>
    </main>
}

export default Card;