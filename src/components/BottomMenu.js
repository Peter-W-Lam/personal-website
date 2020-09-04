import React from 'react'
import './BottomMenu.css'

export default function BottomMenu() {
    return (
        <div className="BottomMenu">
            <ul>
                <li>
                    <a href="#top">Home</a>
                </li>
                <li>
                    <a href="#aboutme">About Me</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className="btm-border"></div>
        </div>
    )
}
