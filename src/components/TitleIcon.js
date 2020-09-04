import React from 'react'
import './TitleIcon.css'

export default function TitleIcon(props) {
    var bg = {}
    

    return (
        <div className="TitleIcon">
            <img 
                src={props.img} 
                alt={props.alt} 
                className={props.imgClass}  />
            <h1>{props.title}</h1>
        </div>
    )
}
