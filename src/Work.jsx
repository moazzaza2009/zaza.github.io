
import SplitText from "./com/text_animation";
import "./Work.css";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { ReactLenis } from 'lenis/react';
import { useEffect } from "react";

function Work() {
    const navigate = useNavigate();
    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top when the component mounts
    }, []);
    return (
        < >
        <ReactLenis root>
        <div className="top_part" >
                <ul 
                onClick={
                    () => {
                      
                    
                        window.location.href="#work"
                        window.location.reload();

                    }  

                
    }
                className="links">
                    <li href="#work" >Work</li>
                    </ul>
                    <div onClick={
                        () => {
                      
                            navigate("/")
                            window.location.reload();
                          
                        }  
                    } href="#home" className="logo">
                <h1 className='logo_type' >ZAZA</h1>
            </div>
                    <ul  onClick={
                        () => {
                          navigate("/contact")
                        } }  
                    
                    className="links">
                    <li href="#contact" >Contact</li>
                </ul>
        </div>
        <div className="home_text_container4" 
           id="work" >
        <div  className="project_text_container" >
            <SplitText
            text="projects by ZAZA"
            className="project_text"
            wrapperClassName="wrapper"
            charsClassName="chars"
            delay={0.25}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,80px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.5}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={(e) => console.log(e)}
            
            
            />
             <div className='project_text_container_2'>
       <SplitText
    
       text="Scroll to explore and enjoy."
       className='project_text_2'
        delay={40}
        animationFrom={{ opacity: 0, transform: 'translate3d(0,160px,0)' }}
        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
        easing="easeOutCubic"
        threshold={0.8}
        rootMargin="-50px"

       
       
       ></SplitText>
      
       </div>





        </div>
        </div>

         <div className="project" 
         onClick={
            () => {
             
              navigate("/stag")
              window.location.reload();
         }}
         >
         
           <img src="/assets/STAG_logo/Stag10.png" />
         
           </div>
           <div className="project" 
            onClick={
                () => {
           
                  navigate("/muse")
                  window.location.reload();
             }}
           >
         
         <img src="/assets/MUSE_logo/muse6.png" />
       
         </div>
           <div className="project" 
            onClick={
                () => {
             
                  navigate("/DBMSS")
                  window.location.reload();
             }}
           >
           <img src="/assets/DBMS_logo/DBMS1.png" />
       
           </div> <div className="project" 
            onClick={
                () => {
                  navigate("/SUPER")
                  window.location.reload();
             }}
           >
           <img src="/assets/Super_logo/Super1.png" />
       
           </div> <div className="project"
            onClick={
                () => {
  
                  navigate("/Prime")
                  window.location.reload();
             }}
           >
           <img src="/assets/PRIME_logo/Prime1.png" />
       
           </div> <div className="project"
            onClick={
                () => {
                  navigate("/DBMS_APP")
                  window.location.reload();
             }}
           >
           <img src="/assets/phone.png" />
       
           </div> <div className="project" 
            onClick={
                () => {
                  navigate("/ZING")
                  window.location.reload();
             }}
           >
           <img src="/assets/ZING_logo/Zing1.png" />
       
           </div>
           <div className="project" 
            onClick={
                () => {

                  navigate("/Mountain")
                  window.location.reload();
             }}
           >
           <img src="/assets/MOUNTAIN_logo/m2.png" />
       
           </div>
           
           

      
        
           </ReactLenis>
        </>
    );
}

export default Work