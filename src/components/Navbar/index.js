import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import './style.css';
const Navbar=(props)=> {

    const [search, setSearch] = useState(false);
     

    const SubmitSearch =(e)=>{
        e.preventDefault();
        alert('hello_search');
    }

    const OpenSearch=()=>{
        setSearch(true);  
        console.log('setSearch', search);
        alert(search);
    }
    // const slug=props.match.params;
     
    const SearchClass= search ? 'searchInput active' : 'searchInput';
    return (
        <div className="Navbar">
        <ul className="Navbar-Menu">
        <li><NavLink to="/"><img src={require('../../assets/icon/home.png')} height="20" style={{verticalAlign:'middle'}}/> Home</NavLink></li>
        <li><NavLink to="/posts"><img src={require('../../assets/icon/Post.png')} height="20" style={{verticalAlign:'middle'}}/> Posts </NavLink></li>
        <li><NavLink to="/about-us"><img src={require('../../assets/icon/about_Us.png')} height="20" style={{verticalAlign:'middle'}}/> About Us</NavLink></li>
        <li><NavLink to="/contact-us"><img src={require('../../assets/icon/Contact_Us.png')} height="20" style={{verticalAlign:'middle'}}/> Contact Us</NavLink></li>
        
        </ul>
        <div className="search">
            {/* <form onSubmit={SubmitSearch}>
            <input className={ SearchClass } type="text" placeholder="search"/>
            <img onClick={() => setSearch(true)} src={require('../../assets/icon/search.png')}  style={{verticalAlign:'middle', cursor:'pointer'}} />
            </form> */}
        </div>
            
        </div>
    )
}

export default Navbar
