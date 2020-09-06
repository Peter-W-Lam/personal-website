import React from 'react'
import Medi1 from '../assets/medi-1.jpg'
import Medi2 from '../assets/medi-2.png'
import Doc1 from '../assets/doc-song-mockup.jpg'
import Doc2 from '../assets/doc-song-2.png'
import Doom from '../assets/doom-clock.png'
import './modalBody.css'
import Button from '../components/Button'

export const mediModal = () => {
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
                <a href="https://medi-example.herokuapp.com/">
                    <Button name="Demo" />
                </a>
                <a href="https://github.com/Peter-W-Lam/medi-example">
                    <Button name="Github"/>
                </a>
            </div>
        </div>
    )
}

export const PhoneHomeModal = () => {
    return(
        <div className="modal-body-content">
            <p>This was a group project, in which five of us designed and built a 2D puzzle platformer in Unity. My role in this game specifically was to program the movement of the character, and the inventory system; I also contributed some of the art to the game. </p>
            <div className="buttons">
                <a href="https://phonehomegame.wixsite.com/phonehome">
                    <Button name="Website" />
                </a>
            </div>
        </div>
    )
}


export const HanakoModal = () => {
    return(
    <div className="modal-body-content hanako">
        <p><b>Background:</b> On the market, phone apps designed to treat eating disorders usually fall into one of two camps. One camp is that made up of apps created by clinicians and use research-based methods in them to treat patients and their symptoms. Often these apps are functional and do what they set out to do, but their design is frustrating and outdated: they’re most often used within treatment centers, and so user motivation and engagement aren’t issues that are taken into account. On the other hand, other apps on the market are beautifully designed and engaging for users—but ultimately lack any kind of scientific background to them, and thus fail to deliver on the promises they make.</p>
        <p>The goal of Hanako was to design an application that could live in both these camps. We hoped to research binge-eating disorder in particular, and learn specific mechanisms that a user could administer on their own to reduce their symptoms, without needing a clinician or treatment plan. We would then take our results from this research and design an iPhone application intended for independent use, aiming for both engaging design and research-based evidence to back it up.</p>
        <p><b>Concept:</b> Hanako is designed for users with binge-eating disorder. At the core of the application is a food and mood logging interface, where users log what they ate, the contextual details of when they ate it, and how they felt while they ate (options are provided as well for marking the period as a skipped meal/snack, or a binge). Logging was the mechanism we identified that could have the largest impact on an individual’s life and habits: people with BED who keep a daily food and mood diary become more mindful of their eating habits, and can additionally use this log to get insight into what scenarios cause them to binge eat.</p>
        <div className="image-box">

        </div>
    
    </div>
    )
}

export const DocSongModal = () => {
    return (
        <div className="modal-body-content">
            <p>This was a student project on which I served as the front-end lead. Over the course of the academic year, I mentored two underclassmen who were learning front-end development, and I helped them through learning React.js, CSS, and best coding practices for collaborative development. This involved me breaking down the mockups that our designers created into manageable weekly tasks, and assigning the work.</p>
            <p>The web app itself was for the non-profit Documentary Songwriters. They were looking to build a Fitbit-like application, in which their users could track their practice sessions online. A user can log into the app and start a practice session, and the web application will count the number of pitches that they play during this session. Users can set weekly pitch goals for themselves, and additionally can join groups of other users to compete with, to see who can play the most pitches.</p>
            <div className="row imgs">
                <img src={Doc1} alt="The recording interface for the website Documentary Songwriters" />
                <img src={Doc2} alt="The dashboardfor the website Documentary Songwriters" />
            </div>
            <div className="buttons">
                <a href="https://github.com/JumboCode/Documentary-Songwriters">
                    <Button name="Github"/>
                </a>
            </div>
        </div>)
}

export const DoomClock = () => {
    return (
        <div className="modal-body-content">
            <p>This was a quick web-app which I designed and built for the artistic timed challenge NaNoWriMo, as a way for me to practice data-passing in React. The application allows you to pick a start date and an end date, setting the number of words which you want to have by a deadline. The clock then updates in real-time with the number of words you should have written at that very second. </p>
            <div className="row imgs">
                <img id="doom-img" src={Doom} alt="Screenshot of NaNoWriMo Doom Clock" />
            </div>
            <div className="buttons">
                    <a href="http://peter-w-lam.github.io/doom-clock">
                        <Button name="Demo"/>
                    </a>
                    <a href="https://github.com/Peter-W-Lam/doom-clock">
                        <Button name="Github"/>
                    </a>
                </div>
        </div>
    )
}
