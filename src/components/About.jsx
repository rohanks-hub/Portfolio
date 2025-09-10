import React from 'react'
import './About.css'; 

function About() {
  return (
    <div>
        <div id="about" className="d"> 
            <h2 style={{color: "orange"}}>About Me</h2>
              <p>Hi! I'm Rohan Kallidukil Sojo, a passionate and curious Computer Science student with a growing interest in Artificial Intelligence, Machine Learning, and Web Development. I love building practical projects that solve real-world problems, like AquaChain, a blockchain-based data tracking system, and AquaPredict, an ML-powered water quality forecasting tool.

            I enjoy exploring new technologies, understanding how things work under the hood, and constantly challenging myself to learn and grow. Whether it’s experimenting with ML models, creating responsive web apps, or diving into data, I’m always excited about the next big idea.</p>
            <h3 style={{color: "#76e3ea"}}>Educational Details</h3>
        </div>
        <br />
        <div className="e">
                <h4>Christ College of Engineering</h4>
                <p>B.Tech in Computer Science</p>
        </div>
        <br />
        <div className="f">
            <h4>Devamatha CMI Public School</h4>
            <p>Higher Secondary Education</p>
        </div>
        <br />
        <div className="g">
            <h4>Devamatha CMI Public School</h4>
            <p>Secondary Education</p>
        </div>
        <br />
        <div className="h">
         <h2 style={{color: "#76e3ea"}}>Skills</h2>
            <ul>
                <li>Python</li>
                <li>JavaScript</li>
                 <li>HTML & CSS</li>
                <li>React.js</li>
                <li>Flask</li>
                <li>Machine Learning</li>
            </ul>
        </div>
    </div>
  );
}

export default About;