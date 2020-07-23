import React from 'react'
import Sidebar from '../../components/Sidebar';
import './style.css';
import PostListCard from './PostListCard';
import { NavLink } from 'react-router-dom';
import postList from '../../data/couple.json';
console.log(postList);

function PostList() {

  return (
    <React.Fragment>
      <div style={{ marginLeft: '50px', marginRight: '50px' }}>
        {postList.data.map(postlist =>
          <NavLink  key={postlist.slug} to={`Posts/${postlist.slug}`} style={{textDecoration:'none'}}>
          <div style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", width: "100%", backgroundColor: "#fff", marginTop: "7px" }}>
            <div style={{ display: 'flex' }}>
              <div style={{marginRight:'10px'}} className="img-hover-zoom--quick-zoom img"><img src={require(`../../assets/BlogpostImages/coupleImages/${postlist.coupleImage}`)} height="200" width="300" style={{paddingTop:'5px', paddingLeft:'5px'}} /></div>
              <div className="img-hover-zoom--brightness">
                <h1 style={{margin:'auto', padding:'5px',textAlign:'center', color:'#FF0096'}}>{postlist.coupleName}</h1>
                <p style={{textAlign:'center', margin:'auto', color:'#797990'}}>❤️Married On {postlist.Date_of_Marriage}️️️️️❤️</p>
                <p style={{textDecoration:'justify', marginRight:'5px', color:'#000'}}>{postlist.about}</p>
                
              </div>
            </div>
          </div>
          </NavLink>
          )}
      </div>

    </React.Fragment>
  )
}

export default PostList
