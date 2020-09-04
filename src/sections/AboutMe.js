import React from 'react'
import './AboutMe.css'
import Button from '../components/Button'
import {ReactComponent as Briefcase} from '../assets/briefcase.svg'
import {ReactComponent as GraduationCap} from '../assets/graduation-cap.svg'
import {ReactComponent as Line} from '../assets/timeline.svg'
import {ReactComponent as Award} from '../assets/award.svg'

function AboutMe() {
    return (
        <div className="AboutMe" id="aboutme">
            <div className="top">
                <span className="title">
                    <h1>About Me</h1>
                </span>
                <Button name="Download Resume" />
            </div>
            <div className="timeline">
                <div className="education">
                    <div className="timeline-title">
                        <GraduationCap className="grad-cap" />
                        <h3>Education</h3>
                    </div>
                    <div className="timeline-block">
                        <Line />
                        <div className="text">
                            <h4>Tufts University</h4>
                            <span className="subheading"><p>B.S. Computer Science and English</p></span>
                            <p>GPA: 3.74</p>
                            <p>2016 - 2020</p>
                        </div>
                    </div>
                    <div className="timeline-title" id="award-title">
                        <Award className="award" />
                        <h3>Achievements</h3>
                    </div>
                    <div className="award-list">
                        <ul>
                            <li>Mabel Daniels Prize</li>
                            <li>Senior Honors Thesis: Highest Honors</li>
                            <li>Latin Honors: Magna Cum Laude</li>
                            <li>Laidlaw Scholar</li>
                        </ul>
                    </div>
                </div>
                <div className="experience">
                    <div className="timeline-title">
                        <Briefcase className="briefcase" />
                        <h3>Experience</h3>
                    </div>
                    <div className="timeline-block">
                        <Line />
                        <div className="text">
                            <h4>Medi</h4>
                            <span className="subheading"><p>Front-End Engineering Intern</p></span>
                            <p>June 2020 - Aug. 2020</p>
                        </div>
                    </div>
                    <div className="timeline-block">
                        <Line />
                        <div className="text">
                            <h4>Documentary Songwriters</h4>
                            <span className="subheading"><p>Front-End Lead</p></span>
                            <p>Sept. 2019 - June 2020</p>
                        </div>
                    </div>
                    <div className="timeline-block">
                        <Line />
                        <div className="text">
                            <h4>Laidlaw Foundation</h4>
                            <span className="subheading"><p>UI/UX Designer + Scholar</p></span>
                            <p>June 2018 - Aug. 2019</p>
                        </div>
                    </div>
                    <div className="timeline-block">
                        <Line />
                        <div className="text">
                            <h4>AccuAssembly</h4>
                            <span className="subheading"><p>C# Intern</p></span>
                            <p>June 2017 - Aug. 2017</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
