import React, {useState, useEffect} from 'react'
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/couple.json';
 
const BlogPost=(props)=> {

   const [post, setPost]=useState({
    coupleId: "",
    slug:"",
    coupleName: "",
    Date_of_Marriage : "",
    slug: "",
    coupleImage: "",
    Bio1: "",
    Bio2: "",
    about:""
   });
   const [Postid, setPostid]=useState('');
   
    
   useEffect(()=>{
    const postid=props.match.params.slug;
    
    const Post=blogPost.data.find(post=> post.slug==postid);
    setPost(Post);
    setPostid(Postid);
   }, [post, props.match.params]);
   if(post.coupleImage=="") return null;

    return (
        
        <div className="blogPostContainer">
        <Card>
        <div className="postHeader">
            <span className="BlogCategory"><a href="https://en.wikipedia.org/wiki/Shah_Rukh_Khan">{post.coupleName}</a></span>
            <h1 className="postTitle">{post.Bio1}</h1> 
            <span className="postedBy">Posted on {post.Date_of_Marriage} by Batham Study Blogging Tips</span>
        </div>
        <div className="postImageContainer">
        <img src={require("../../assets/BlogpostImages/coupleImages/" +post.coupleImage)}/>
        
        </div>
        <div className="PostTitle">
        <h1 style={{marginLeft:'10px'}}>{post.title}</h1>
        <div style={{textAlign:'justify', padding:'10px', fontSize:'16px', fontWeight:'normal', letterSpacing:'2px'}}>
        {post.blogText}
        </div>
        <div>Comments</div>
        </div> 
        </Card>
       
        </div>
    )
}

export default BlogPost
