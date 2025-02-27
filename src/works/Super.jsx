import { useNavigate } from "react-router-dom"
import Super_page from "./Super_page";

function Super() {
    const navigate = useNavigate();
    return (
    <>
    <div className="top_part">
                <ul 
                onClick={
                    () => {
                        
                         navigate("/work")
                         window.scrollTo(0, 0);


                    }  

                
    }
                className="links">
                    <li href="#work" >Work</li>
                    </ul>
                    <div onClick={
                        () => {
                            navigate("/")
                            window.scrollTo(0, 0);
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
       <Super_page/>
    
    </>
    )
            
    }
    export default Super
                