import React from 'react'
import Footer from '../../components/Footer';
import ProfileCard from './profileCard';
import Card from '../../components/UI/Card'
import './style.css';
const AboutUs = (props) => {
    return (
        <div>
            <section>
                <div className="aboutUsContainer">
                    <img src={require('../../assets/aboutus.jpg')} style={{ maxWidth: '100%', marginTop: '10px' }} />
                </div>
                <div className="ProfileContainer">
                <div>
                <a href="https://www.linkedin.com/in/ajay-batham-922041162"  style={{textDecoration:'none'}}> <Card style={{width:'280px', cursor:'pointer'}}> 
                   <ProfileCard name="Ajay Batham" designation="Software Engineer" profilePicName="profileAjay.jpg" />
                   </Card></a> 
                </div>
                <div>
                <a href="https://www.linkedin.com/in/atul-tiwari-16884314b" style={{textDecoration:'none'}}><Card style={{width:'280px', cursor:'pointer'}}><ProfileCard name="Atul Tiwari" designation="Software Engineer" profilePicName="atul1.jpg" /></Card></a>
                </div>
                <div>
                <Card style={{width:'280px', cursor:'pointer'}}><ProfileCard name="Vivek Sharma" designation="Software Engineer" profilePicName="vivek.jpg" /></Card>
                </div>
                </div>
            </section>
      
        </div>
    )
}

export default AboutUs;
