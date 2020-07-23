import React from 'react'
import './style.css';
import BlogPost from '../../components/BlogPost';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import DynamicScrollToTop from '../../routes/DynamicScrollToTop';
const Posts=(props)=> {
  console.log(props);
    return (
      <React.Fragment>
        <section className="container">
        <DynamicScrollToTop/>
          <BlogPost {...props}/>
          <Sidebar/>
          
        </section>
          
        </React.Fragment>
    )
}

export default Posts;
