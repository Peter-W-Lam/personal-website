import React from 'react'
import Timeline from '../assets/timeline.svg'
import './TimelineBlock.css'

export default function TimelineBlock(props) {
    return (
        <div className="TimelineBlock">
            <img src={Timeline} alt="" />
            <div>
                <h3>{props.title}</h3>
                <p className="subheading">{props.subheading}</p>
                
                <p className="info">{props.info}</p>
                <p className="info">{props.addedInfo}</p>
            </div>
        </div>
    )
}
