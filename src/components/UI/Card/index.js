import React from 'react'
import './style.css';
const  Card=(props)=> {
    return (
        <div className="Card" {...props}>
           {props.children}
        </div>

        // <div className="Card" style={{width:props.widht ? props.widht:'100%'}}>
        // {props.children}
        // </div>
    )
}

export default Card;
