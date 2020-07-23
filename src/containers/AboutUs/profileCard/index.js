import React from 'react'
import './style.css'
const ProfileCard=(props)=> {
    return (
        <div>
            <div className="ProfileImageContiner">
            <img src={require(`../../../assets/${props.profilePicName}`)}/>
            </div>
            <div style={{textAlign:'center'}}>
            <h2 style={{margin:'auto', color:'#70899D'}}>{props.name}</h2>
            <p style={{margin:'auto', marginBottom:'10px', color:'#6c6c6c'}}>{props.designation}</p>
            </div>
             
            
        </div>
    )
}

export default ProfileCard;
