import React from 'react';
import Sidebar from './Sidebar';
import './style.css';

const Layout=(props)=> {
    return (
        <div>
            {props.children}
           <Sidebar/>
        </div>
    )
}

export default Layout;
