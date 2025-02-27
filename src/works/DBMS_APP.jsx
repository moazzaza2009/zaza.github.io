import { useNavigate } from "react-router-dom"
import APP_page from "./DBMS_app_page";

function DBMS_APP() {
    const navigate = useNavigate();
    return (
    <>
    <div className="top_part">
                <ul 
                onClick={
                    () => {
                        window.scrollTo(0, 0);
                         navigate("/work")


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
        <APP_page/>
    
    
    </>
    )
            
    }
    export default DBMS_APP
                