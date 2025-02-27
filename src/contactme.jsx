import React from "react";
import "./Contact_me.css";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";


function ContactUs() {
  const navigate = useNavigate();
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "0aebbda2-ec17-4840-9aa4-c163f5ccc035");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(" Done! ");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
   
    <div className="contact_container" id ="contact">
    <button className="top" onClick={() => 
    
    {
      window.location.href="#home"
      navigate("/")



    }
   
    
    } 
    > 
    <span>top</span>
    
    </button>
    <div className="top_container" >
    
    </div>
    <h1 className="contact" >Contact Me</h1>
    </div>
    <div className="container" >

      <form onSubmit={onSubmit}>
      <label className="email2">Name</label>
        <input className="name" type="text" name="name" required/>
        <label className="email2">Email address</label>
        <input className="email" type="email" name="email" required/>
        <label className="email2">message</label>
        <textarea className="message" name="message" required></textarea>

        <button className="submit" type="submit">SUBMIT</button>

      </form>
    <div  className="result_container" >
      <span className="result" >{result}</span>
      </div>
      
    </div>
    
       
     
    </>
  );
}

export default ContactUs;