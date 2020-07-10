import React from 'react'
import { Link } from "react-router-dom";

export default function Banner(props) {
    return (
        <div className={props.name} >
            <div className="banner">
                <h1>{props.heading}</h1>
                <p>{props.par}</p>
                <Link to= {props.link} className="btn-primary">{props.linkName}</Link>
            </div>
            
        </div>
    )
}
