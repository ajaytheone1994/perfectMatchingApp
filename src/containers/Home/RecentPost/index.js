import React from 'react'
import './style.css';
import Card from '../../../components/UI/Card';
import { NavLink } from 'react-router-dom';
import coupledata from '../../../data/couple.json'
const RecentPost=()=> {
    return (
        <div style={{width:'70%'}}>
                 <Card style={{marginBottom:'20px'}}>
                     <div className="PostImageWrapper">
                        <img src={require('../../../assets/BlogpostImages/coupleImages/sha_gauri.jpg')}/>
                     </div>
                     <div className="postHeader">
                        <span className="BlogCategory"></span>
                        <h1 className="postTitle">Shah Rukh Khan and Gauri Khan</h1> 
                        <span className="postedBy">Made for Each others</span>
                        <p style={{padding:'10px'}}>
                        Many relationships don't stand the test of time in Bollywood, but that is not the case with our number one couple: Shah Rukh and Gauri have been married since 1991 (they met in 1984),
                         and despite the odd rumour that they lead separate lives, by all official appearances, they are still going strong.She is the key interior designer in Mumbai high society, and he is arguably the most famous Bollywood star of all time. They are an interfaith marriage too (he is Muslim and she is Hindu) and they got together before either of them was famous, so their match appears to one truly founded on love. The pair have three kids together, and by all accounts their children are expected to be the next big thing in Bollywood, so the family's power will likely continue."
                        </p>
                       <NavLink to="/Posts/sha_Gauri/"><button className="button" style={{cursor:'pointer'}}>Read More</button></NavLink>
                    </div>
                 </Card>
                 <Card>
                     <div className="PostSecondImage">
                     <img src={require('../../../assets/BlogpostImages/coupleImages/saif_kareena.jpg')}/>
                     </div>
                     <div className="postHeader" style={{marginBottom:'10px'}}>
                        <span className="BlogCategory"></span>
                        <h1 className="postTitle">Saif Ali Khan and Kareena Kapoor</h1> 
                        <span className="postedBy">Made for Each others"</span>
                        <p style={{padding:'10px'}}>
                        This pair is powerful together, but they are both Bollywood royalty in and of themselves. Kareena's family is 'the first family of Bollywood', with her great-grandfather Prithvi Raj Kapoor a very famous actor from the 1930s to the 1970s. Meanwhile, Saif boasts royal lineage (his famous cricketer father Mansoor Ali Khan was the Nawab of Pataudi) and his mother is, of course, Sharmila Tagore of Aradhana fame.
                        </p>
                        <NavLink to="/Posts/saif_kareena/"><button className="button" style={{cursor:'pointer'}}>Read More</button></NavLink>
                    </div>
                    
                 </Card>
             </div>
    )
}

export default RecentPost;
