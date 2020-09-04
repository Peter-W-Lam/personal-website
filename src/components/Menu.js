import React from 'react'
import './Menu.css'
import {ReactComponent as MenuIcon} from '../assets/menu.svg';


function Menu(props) {

    return (
        <div>
            <MenuIcon className={props.open ? 'menu-icon open' : 'menu-icon'}
            onClick={() => props.setOpen(!props.open)}/>
            <div className={props.open ? 'Menu open' : 'Menu'}>
            
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
            </div>
        </div>
        
    )
}

export default Menu
