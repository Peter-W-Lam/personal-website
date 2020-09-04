import React from 'react'
// import './Contact.css '

import ContactCard from '../components/ContactCard'
import Email from '../assets/email.svg'
import LinkedIn from '../assets/linkedin-light.svg'
import Github from '../assets/github-purple.svg'
import './Contact.css'

export default function Contact() {
    return (
        <div className="Contact" id="contact">
            <span className="title"><h1>Contact Me</h1></span>
            <div className="cards">
                <ContactCard 
                    img={Email}
                    className="email"
                    title="Email"
                    to="#email"
                    tag="PeterWL76@gmail.com"
            /> 
            <ContactCard 
                    img={LinkedIn}
                    className="linkedin"
                    title="LinkedIn"
                    to="#linkedin"
                    tag="peterwlam"
            /> 
            <ContactCard 
                    img={Github}
                    className="github"
                    title="Github"
                    to="#github"
                    tag="Peter-Lam-22"
            /> 
            </div>
           
        </div>
    )
}
