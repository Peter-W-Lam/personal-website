import React from 'react'
import Button from '../components/Button'
import Portrait from '../assets/portrait.png'
import './TopSection.css'

function TopSection() {
    return (
        <div className="TopSection">
            <div className="content">
                <h1>Peter Lam</h1>
                <h4>Front-End Developer</h4>
                <p>I'm a recent graduate from Tufts University, specializing in UI/UX design and front-end development. Let's chat!</p>
                <div className="buttons">
                    <a href="#contact">
                        <Button name="Get In Touch!" />
                    </a>
                    <a href="">
                        <Button name="Download Resume" />
                    </a>
                </div>
                
                
            </div>
            <div className="photo">
                <img src={Portrait} alt="Peter Lam" className="portrait" />
            </div>
            
        </div>
    )
}

export default TopSection
