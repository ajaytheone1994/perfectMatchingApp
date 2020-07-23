import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import { Lines } from 'react-preloaders';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './containers/Home';
import ContactUs from './containers/ContactUs';
import AboutUs from './containers/AboutUs';
import Posts from './containers/Posts';
import Footer from './components/Footer';
import PostList from './containers/postlist/PostList'

function App() {
  return (
 
    <Router>
    <div className="App">
        <Header/>
        <Hero/>
        <Lines color="#FF0096" />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/contact-us" component={ContactUs}/>
        <Route path="/about-us" component={AboutUs}/> 
     
        <Route path="/posts/:slug" component={Posts}/>
        <Route exact path="/posts" component={PostList} />
        </Switch>
    </div>
    <Footer/>

    </Router>
  );
}

export default App;
