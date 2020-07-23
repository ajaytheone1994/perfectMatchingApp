import React from 'react'
import { NavLink } from 'react-router-dom';
import './style.css';

function RecentPopularRandomPost(props) {
    const Recent = props.blogType;
    return (
        <div>
            
            <h3 style={{ color: '#B3C3D3' }}>{props.title}</h3>
            {
                Recent.map(post => {
                    return (

                       
                         
                         <NavLink key={post.slug}  to={`/Posts/${post.slug}`} style={{ display: 'flex', flexWrap:'wrap', textDecoration:'none' }}> 
                            <div style={{ marginRight: '10px' }} className="img-hover-zoom--brightness"><img src={require(`../../../assets/BlogpostImages/coupleImages/${post.coupleImage}`)} height="55" />
                            </div>
                            <div className="img-hover-zoom--brightness">
                                <p style={{ margin: 'auto', color: '#F5B97D' }}>{post.coupleName} </p>
                                <p style={{ margin: 'auto', color: '#6C6C6C' }}>{post.Date_of_Marriage} </p>
                            </div>
                            </NavLink>
                         

                    )

                })
            }


        </div>
    )
}

export default RecentPopularRandomPost;
