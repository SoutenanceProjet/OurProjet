import React from "react";
import aside from '../../assets/aside.png'
import './asideLeft.css'
import { Link } from "react-router-dom";

export default function AsideLeft(props){


    return (
        <>
            <div className="container">
                        <div className="description">
                        <div className="welcome">{props.title}</div>
                        <div className="welcomeDescription">      
                             {props.description}
                             <span> {props.description1}</span>
                        </div>
                        </div>
                        <div className="welcomeImage">
                            <img src={aside} alt='let beginning' />
                        </div>
                        <div className="welcomeFooter">
                            <p>{props.question}</p>
                            <Link to={props.link}><button type="button">{props.button}</button></Link>
                        </div>
            </div>
        </>
    )
}