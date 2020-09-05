import React from 'react'
import {ReactComponent as LinkedIn} from '../assets/linkedin-square.svg';
import {ReactComponent as Github} from '../assets/github.svg';
import './TopSocials.css'

function TopSocials() {
    return (
        <div className="TopSocials" id="top">
            <div className='icons'>
                <a href="https://www.linkedin.com/in/peterwlam/">
                    <LinkedIn />
                </a>
                <a href="https://github.com/Peter-W-Lam">
                   <Github /> 
                </a>
                
            </div>
            
        </div>
    )
}

export default TopSocials
