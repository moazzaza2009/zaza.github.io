
import { SmoothScrollHero } from './com/my_job'
import SplitText from './com/text_animation'
import ContactUs from './contactme'
import { RevealLinks } from "./com/my_social";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import './home.css'
import { useEffect } from "react";

function Home() {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts
      }, []);
    return (
        <> 
        <div id='home' >
        <section>

        <div className="top_part">
                <ul 
                onClick={
                    () => {
                      
                         navigate("/work")
                         window.location.reload();


                    }  

                
    }
                className="links">
                    <li href="#work" >Work</li>
                    </ul>
                    <div onClick={
                        () => {
                            window.location.href="#home"
                            window.location.reload();
                        }  
                    } href="#home" className="logo">
                <h1 className='logo_type' >ZAZA</h1>
            </div>
                    <ul  onClick={
                        () => {
                          window.location.href="#contact"
                        } }  
                    
                    className="links">
                    <li href="#contact" >Contact</li>
                </ul>
        </div>
        <div className='home_text_container'>
        <SplitText
         text="Hello, I'm ZAZA"
        className='home_text'
         delay={40}
         animationFrom={{ opacity: 0, transform: 'translate3d(0,160px,0)' }}
         animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
         easing="easeOutCubic"
         threshold={0.8}
         rootMargin="-50px"
        textAlign='start'
        >
        
        </SplitText>

        </div>
        <div className='home_text_container_2'>
       <SplitText
    
       text="I'm a Graphic Designer and Fullstack app and web developer , I make my work for you with love "
       className='home_text_2'
        delay={40}
        animationFrom={{ opacity: 0, transform: 'translate3d(0,160px,0)' }}
        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
        easing="easeOutCubic"
        threshold={0.8}
        rootMargin="-50px"

       
       
       ></SplitText>
      
       </div>
       </section>
       <section className='hero' >
      <SmoothScrollHero/>
     
      </section>
      <section>
        <ContactUs/>
      </section>
      <section className='reveal' >
        <RevealLinks/>
      </section>
     
      
        </div>
       
        </>
    )
}

export default Home
       