import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json'
import blogPosts from '../../data/couple.json'

const Sidebar=(props)=> {
    const[Posts, setPost]= useState([]);
    useEffect(()=>{
        const Posts=blogPosts.data;
        setPost(Posts);

    }, [Posts]);    

    return (
        <div className="SidebarContainer" style={{widh:props.width}}>
            <Card style={{marginBottom:'20px'}}>
            <NavLink to="/about-us" style={{textDecoration:'none'}}>
                <div className= "Cardheader">
                    <span>ABOUT-US</span>
                    <div className="ProfileImageContiner">
                        <img src={require('../../assets/profile.jpg')}/>
                    </div>
                </div>
                </NavLink>
                <div className="Cardbody">
                <p className="PersonalBlog">My Name is <strong><a href="https://www.linkedin.com/in/ajay-batham-922041162">Ajay Batham</a></strong> I am a fontend Developer in <a href="http://www.tracknovate.com/"  >Tracknovate Mobile Resource Management private Limited.</a>
                </p>
                </div>
            </Card>
            
            <Card style={{marginBottom:'20px'}}>
                <div className= "Cardheader">
                    <span>Networks</span>
                </div>
                <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
                <div style={{backgroundColor:'#E882FF', borderRadius:'5px', marginBottom:'10px'}}><a href="https://www.facebook.com/profile.php?id=100008978260382"><img src={require('../../assets/icon/Ffacebook.png')} className="zoom"/></a></div>
                <div  style={{backgroundColor:'#E882FF', borderRadius:'5px', marginBottom:'10px'}}><a href="https://twitter.com/ajaybat16894008"><img src={require('../../assets/icon/ftwitter.png')}className="zoom"/></a></div>
                <div style={{backgroundColor:'#E882FF', borderRadius:'5px', marginBottom:'10px'}}><a href="https://www.linkedin.com/in/ajay-batham-922041162"><img src={require('../../assets/icon/footerlinkedin.png')}className="zoom"/></a></div>
                <div style={{backgroundColor:'#E882FF', borderRadius:'5px', marginBottom:'10px'}}><a href="https://github.com/ajaytheone1994"><img src={require('../../assets/icon/fgithub.png')}className="zoom"/></a></div>
                </div>
            </Card>
            <Card style={{marginBottom:'10px'}}>
                <div className= "Cardheader">
                    <span>Recent Post</span>
                </div>
                <div className="RecentPosts">
                 {
                     Posts.map(post=>{
                      if(post.coupleId <= 6){
                        return(
                            <div className="hov-effects" key={post.slug} >
                            <NavLink  to={`/Posts/${post.slug}`}  style={{ textDecoration: 'none' }} >
                               <div className="RecentPost">
                               <h3>{post.coupleName}</h3>
                              <img src={require('../../assets/icon/money.png')} style={{verticalAlign:'middle'}}/> <span>Posted On {post.Date_of_Marriage} </span>
                               </div> 
                            </NavLink>
                            </div>
                           
                        )
                      }

                     })
                 }
                 </div>
                 
            </Card>
            <Card >
                <div className= "Cardheader">
                    <span>SUBSCRIBE US</span>
                </div>
                <div style={{display:'flex', justifyContent:'center', marginBottom:'10px', maxWidth:'100%'}}>
                <iframe width="100%" height="110" src="https://www.youtube.com/embed/OF2WmquDVO4"   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"   style={{marginBottom:'10px'}}></iframe>
                 </div>
                
            </Card>
        </div>
         
    )
}

export default Sidebar;
