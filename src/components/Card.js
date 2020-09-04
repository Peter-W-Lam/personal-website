import React, {useState} from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import '../sections/Projects.css'

function Card(props) {
    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(!open)
    
    return (
        <div className={props.size === "sm" ? "ProjectCard sm" : "ProjectCard"}>
            <img src={props.img} alt={props.alt} />
            <div className="card-overlay">
                <div>
                    <h2>{props.project}</h2>
                    <p className="skills">{props.skills}</p>
                </div>
                <p className="link" onClick={toggle}>See Project</p>
            </div>
            <Modal isOpen={open} toggle={toggle} className="projects-modal">
                <ModalHeader toggle={toggle}>{props.project}</ModalHeader>
                <ModalBody>
                    {props.modalBody && props.modalBody()}
                </ModalBody>
            </Modal>
        </div>
    )
}

export default Card
