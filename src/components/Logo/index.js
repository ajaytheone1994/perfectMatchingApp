import React from 'react'
import './style.css';
const Logo=(props)=> {
    return (
        
       <div>
            <div className="Logo">
            <img src={require('../../assets/perfect_mathcing.png')}/>
            {/* <a href="">Ajay Batham</a>
            <sub style={{fontSize:'24px', color:'#565673'}}><blink>Never give up</blink></sub> */}    
        </div>
        <div className="Logo_Mobile">
        <img src={require('../../assets/logo_mobile.png')} /> 
     </div>
       </div>
    )
}
export default Logo;