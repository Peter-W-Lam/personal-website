import React from 'react'
import './ContactCard.css'
export default function ContactCard(props) {
    return (
        <div className={`ContactCard ${props.className}`}>
            <div className="img-bg">
                <img src={props.img} alt="" />
            </div>
            <h2>{props.title}</h2>
            <a href={props.to}>
                <p className="info-block">{props.tag}</p>
            </a>
        </div>
    )
}
