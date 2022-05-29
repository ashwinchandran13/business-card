import React from "react";

const Card = () => {
    return <main>
        <img alt='portrait' src={require("../images/portrait.png")} className='portrait' />
        <div className="main-block">
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
                <h2>Interests</h2>
                <p>
                    Traveling. Movies. Star Watching. Books.
                </p>
            </div>
        </div>
        <div className="social-panel">
            <div className="icons">
                <a href="https://github.com/ashwinchandran13">
                    <img src={require("../images/github.png")} alt="github icon" height={30} width={30} />
                </a>
                <a href="https://github.com/ashwinchandran13">
                    <img src={require("../images/stack.png")} alt="stack overflow icon" height={30} width={30} />
                </a>
            </div>
        </div>
    </main>
}

export default Card;