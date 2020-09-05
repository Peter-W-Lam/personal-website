import React from 'react'
import './Projects.css'
import Card from '../components/Card'
import {mediModal, PhoneHomeModal, DocSongModal, DoomClock} from '../content/modalBody'


function Projects() {
    return (
        <div className="Projects" id="projects">
            <span className="title">
                <h1>Projects</h1>
            </span>
            <div className="cards">
                    <Card 
                        img={require('../assets/medi-mockup-2.jpg')}
                        alt="Pattern"
                        project="Medi"
                        skills="UI/UX Design, React.js, Express, MongoDB"
                        modalBody={mediModal}
                    />
                    <Card 
                        img={require('../assets/hanako-mockup.jpg')}
                        alt="Pattern"
                        project="Hanako"
                        skills="UI/UX Design, Research"
                    />
                    <Card 
                        img={require('../assets/doc-song-mockup.jpg')}
                        alt="Pattern"
                        project="Documentary Songwriters"
                        skills="React.js, Leadership"
                        modalBody={DocSongModal}
                    />
                    <div className="col">
                        <Card 
                            img={require('../assets/phone-home.png')}
                            alt="Pattern"
                            project="Phone Home"
                            skills="C#, Game Design"
                            size="sm"
                            modalBody={PhoneHomeModal}
                        />
                        <Card 
                            img={require('../assets/doom-clock.png')}
                            alt="Pattern"
                            project="Doom Clock"
                            skills="UI Design, React.js"
                            size="sm"
                            modalBody={DoomClock}
                        />
                    </div>
                </div>
        </div>
    )
}

export default Projects
