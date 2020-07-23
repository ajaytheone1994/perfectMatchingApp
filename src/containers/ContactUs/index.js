import React from 'react';
import './style.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
const ContactUs = props => {
    return (
        <div>
            <section>
                {/* <div className="contactBanner">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FF7FFD" fill-opacity="2" d="M0,320L40,266.7C80,213,160,107,240,74.7C320,43,400,85,480,122.7C560,160,640,192,720,218.7C800,245,880,267,960,272C1040,277,1120,267,1200,229.3C1280,192,1360,128,1400,96L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
            <strong style={{position:'absolute', marginTop:'10%', marginLeft:'-85%',fontSize:'30px', fontWeight:'600', letterSpacing:'5px'}}>Contact Us</strong>
             </div> */}
                <div style={{ width: '100%', marginTop: '10px' }}>
                    <img src={require('../../assets/BlogpostImages/contactus2.png')} style={{ maxWidth: '100%' }} />
                </div>
                <div style={{textAlign:'center', fontSize:'20px', fontWeight:'600', letterSpacing:'5px', color:'#F5B97D'}}>
                    <h1>Contact-Us</h1>
                </div>
                <div className="Contact-Us">
                    <div style={{background:'#fff', padding:'10px'}}>
                    <iframe src="https://maps.google.com/maps?q=26.2395, 78.1693&z=15&output=embed" width="100%" height="100%" frameborder="0"></iframe>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', border:'1px solid #7E8DA0', padding:'10px', background:'#fff' }}>
                        <label for="fname">Name:</label>
                        <input type="text" placeholder="Name" />
                        <label for="fname">Email:</label>
                        <input type="email" placeholder="Email" />
                        <label for="fname">MESSAGE:</label>
                        <textarea  id="subject" name="subject" placeholder="Write something.."  style={{ height: '150px', marginBottom: '10px' }} />
                        <button className="button">Submit</button>
                    </div>
                </div>
            </section>
        
        </div>
    )


}
export default ContactUs;
