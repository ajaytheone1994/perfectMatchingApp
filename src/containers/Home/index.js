import React from 'react';
import './style.css'
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Card from '../../components/UI/Card';
import RecentPost from './RecentPost';
import Footer from '../../components/Footer';
import RecentPopularRandomPost from './PostType';
const SideImage=props=>{
    return(
        <div style={{height:`${props.height}px`}}>
        <img src={props.src}/>
        </div>
    );
}

const ImageGallery=props=>{
    return(
        <div className="GalleryPost" style={props.galleryStyle}>
         <section style={{width:'70%'}}>
             <div className="GalleryContainer">
            <img src={require('../../assets/BlogpostImages/coupleImages/bandhan.jpg')}/>
            <div className="centered">LO💖VE</div>
             </div>
         </section>
         <section className="sideImageWrapper" style={{width:'30%'}}>
               <SideImage height={props.sideimageHeight} src={ require('../../assets/BlogpostImages/virushka.jpg') }/>
               <SideImage height={props.sideimageHeight} src={ require('../../assets/BlogpostImages/dipika_simar_1.jpg') }/>
               <SideImage height={props.sideimageHeight} src={ require('../../assets/BlogpostImages/abhi_aish.jpg') }/>
         </section>
         </div>   
    );
}

const Home = props => {
    const RecentPostArr=[ {
                            "coupleId":"6",
                            "slug":"abhi_aish",
                            "coupleName":"Abhishek Bachchan and Aishwarya Rai",
                            "Date_of_Marriage":"20 April 2007",
                            "coupleImage":"abhi_aish.jpg",
                            "Bio1":"",
                            "Bio2":"",
                            "about":"Everyone knows this couple - they may not be the top Bollywood power couple within India, but they are arguably the most globally well known, having walked the Cannes red carpet together, and driven around with Oprah Winfrey when she visited India. Plus, Aishwarya has been known across the globe since she was famously crowned `the world's most beautiful woman` after winning Miss World in 1994. Abhishek's family is true Bollywood royalty, with his father the still-prolific Amitabh Bachchan and his mother his mother the legendary Jaya Bachchan.This isn't the first famous relationship for either of them: Abhishek was engaged to Karisma Kapoor (Kareena's sister) and Aishwarya was in a long-term relationship with Salman Khan."
                        },
                          { "coupleId":"7",
                          "slug":"aamir_kiran",
                          "coupleName":"Aamir Khan and Kiran Rao",
                          "Date_of_Marriage":"28 December 2005",
                          "coupleImage":"aamir_kiran.jpg",
                          "Bio1":"",
                          "Bio2":"",
                          "about":"The thinking person's Bollywood power couple, Aamir and Kiran met on the set of the Oscar-nominated Lagaan in 2001, Aamir divorced his first wife Reena in 2002, and Kiran and Aamir were married in 2005. Theirs is an inter-faith marriage (he is Muslim and she is Hindu), they are both practicing vegans and both are very politically aware and outspoken. They have one son together, Azad Rao Khan who was born in 2011."
                          } ]

    const PopularPost=[{    "coupleId":"8",
                            "slug":"ajay_kajol",
                            "coupleName":"Kajol and Ajay Devgn",
                            "Date_of_Marriage":"24 February 1999",
                            "coupleImage":"kajol_ajay.jpeg"
                        },
                        {"coupleId":"9",
                        "slug":"ranbir_alia",
                        "coupleName":"Ranbir Kapoor and Alia Bhatt",
                        "Date_of_Marriage":"Coming Soon...",
                        "coupleImage":"runbeer_alia.jpeg"
                        } ]     

    const RandomPost= [{"coupleId":"10",
                        "slug":"shahid_mira",
                        "coupleName":"Shahid Kapoor and Mira Kapoor",
                        "Date_of_Marriage":"7 July 2015",
                        "coupleImage":"sahid_meera.jpg"
                        },
                        {"coupleId":1,
                        "slug":"sha_Gauri",
                        "coupleName":"Shah Rukh Khan and Gauri Khan",
                        "Date_of_Marriage":"25 October 1991",
                        "coupleImage":"sha_gauri.jpg",
                        }
                          ]


                                      
    const galleryHeight=450;
    const galleryStyle={
        height:galleryHeight+'px',
        overflow:'hidden    '
    }
    const sideimageHeight=galleryHeight/3;
return(
     <div>
          
         <Card style={{margin:'20px 0'  }} className="Poster_hide" >
            <ImageGallery
            
            largewidth={'70%'}
            smallwidth={'30%'}
            galleryStyle={galleryStyle}
            sideimageHeight={sideimageHeight}   
            />
         </Card>
          
         <section className="HomeContainer">
             <RecentPost/>
             <Sidebar/>
         </section>
         <Card >
          <div style={{display:'flex', justifyContent:'space-around', padding:'10px'}}>
          <RecentPopularRandomPost title="Recent Post" blogType={RecentPostArr} blogImageType="Rashmika_Mandanna.jpg"/>
          <RecentPopularRandomPost title="Popular Post" blogType= {PopularPost} blogImageType="anu.jpg"/>
          <RecentPopularRandomPost title="Random Post" blogType={RandomPost} blogImageType="tara.jpg"/>
          </div>
         </Card>
        
     </div>
)
 
 
}
export default Home;
