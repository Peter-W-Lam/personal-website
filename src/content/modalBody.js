import React from 'react'
import Medi1 from '../assets/medi-1.jpg'
import Medi2 from '../assets/medi-2.png'
import './modalBody.css'
import Button from '../components/Button'

export default function mediModal() {
    return (
        <div className="modal-body-content">
            <p>During the summer of 2020, I worked with an early-stage startup to build their MVP. On this project, I was a UI/UX designer, working with the client to wireframe and mockup potential designs; once the designs were completed, I worked as a full-stack developer as well, implementing the mockups that we had created using the MERN stack, as well as Auth0 for authentication and Heroku for deployment. The project was deployed in September of 2020. </p>
            <p>The platform aims to be a website where healthcare professionals are connected with brand discounts, similarly to how Unidays currently does so for college students. Registering with the platform is a two-step process, wherein a user first registers with their personal email and password combination for logging in and out of the platform, and then provides their healthcare network email for verifying that they are a healthcare professional.</p>
            <div className="row imgs">
                <img src={Medi1} alt="" />
                <img src={Medi2} alt="" />
            </div>
            <p>A working demo of the site can be found deployed on Heroku; any Gmail account may be used to verify one's "healthcare" email by selecting the "Gmail (Testing Route)" under the healthcare system option. Please note that registration is required to view this demo. </p>
            <div className="buttons">
                <Button name="Demo" />
                <Button name="Github"/>
            </div>
        </div>
    )
}
