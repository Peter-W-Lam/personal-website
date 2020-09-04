import React from 'react'
import TitleIcon from '../components/TitleIcon'
import GradCap from '../assets/graduation-cap.svg'
import Briefcase from '../assets/briefcase.svg'
import Award from '../assets/award.svg'
import './TempAboutMe.css'
import TimelineBlock from '../components/TimelineBlock'
import Button from '../components/Button'
export default function TempAboutMe() {
    return (
        <div className="TempAboutMe" id="aboutme">
            <div className="top">
                <span className="title">
                    <h1>About Me</h1>
                </span>
                <Button name="Download Resume" />
            </div>
            <div className="timeline">
                <div className="col">
                    <div className="block">
                        <TitleIcon 
                            img={GradCap}
                            alt="Graduation cap"
                            imgClass="grad-cap"
                            title="Education"
                            color="blue" />
                            <TimelineBlock 
                                title="Tufts University"
                                subheading="B.S. Computer Science &amp; English"
                                info={`GPA: 3.76`}
                                addedInfo="2016 - 2020"
                            />
                    </div>
                    <div>
                        <TitleIcon 
                                img={Award}
                                alt="Award"
                                imgClass="award"
                                title="Achievements"
                                color="purple" />
                        <ul className="list">
                            <li>Mabel Daniels Prize</li>
                            <li>Senior Honors Thesis: Highest Honors</li>
                            <li>Latin Honors: Magna Cum Laude</li>
                            <li>Laidlaw Scholarship Recipient</li>
                        </ul>
                    </div>
                </div>
                
                <div>
                    <TitleIcon 
                            img={Briefcase}
                            alt="Briefcase"
                            imgClass="briefcase"
                            title="Experience"
                            color="green" />
                    <TimelineBlock 
                            title="Medi"
                            subheading="Front-end Engineering Intern"
                            info="June 2020 - August 2020"
                        />
                    <TimelineBlock 
                            title="Documentary Songwriters"
                            subheading="Front-End Lead"
                            info="Sept. 2019 - June 2020"
                        />
                    <TimelineBlock 
                            title="Laidlaw Foundation"
                            subheading="UI/UX Designer + Scholar"
                            info="June 2018 - August 2019"
                        />
                    <TimelineBlock 
                            title="AccuAssembly Inc."
                            subheading="C# Intern"
                            info="June 2017 - August 2017"
                        />
                </div>
            </div>
            
            
        </div>
    )
}
