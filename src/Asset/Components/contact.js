import React, { useEffect , useRef } from 'react';
import '../styles/contact.css';
import AOS from 'aos';

import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Contact() {
    useEffect(()=>{
        AOS.init({duration:2000});
      },[]);
      const form = useRef();
    
      const sendEmail = (e) => {
        e.preventDefault();
    
        // emailjs.sendForm('service_jucevnf', 'template_6fgymwl', form.current, '8hZqsPyVnufpdIXkI')
        //   .then((result) => {
        //       console.log(result.text);
        //   }, (error) => {
        //       console.log(error.text);
        //   });
      };

      const Notify = ()=>{
        toast.success("Mail Sent Successfully" , {
            position : toast.POSITION.TOP_RIGHT
        });
      }
     
    
  return  <>
           
           <ToastContainer />
  <div className="main-contact-container" id='page'> 
  <div className='project-name-main'>
    <span className='project-name'>Contact me</span>
    </div>
 
  <div className="contact-description"><span className='contact-span' data-aos="zoom-out-up">Feel free to Contact me by 
              submitting the form below and I will get back to you as soon as possible</span></div>
    <div className="contact-box-container">
    <form ref={form} onSubmit={sendEmail}>
        <div className="contact-box-div" data-aos="zoom-in">
        <div className="contact-element-container">
        <div className="name-div" data-aos="fade-up">
                <div className="name">Name</div>
                <input type="text" name="name" className='name-input-box'    required/>
            </div>
            <div className="name-div" data-aos="fade-up">
                <div className="name">Email</div>
                <input  name="user_email" className='name-input-box' type="mail"  required/>
            </div>
            <div className="name-div" data-aos="fade-up">
                <div className="name">Message</div>
                <textarea name="message" className='name-input-box' id="" cols="40" rows="10"  required></textarea>
            </div>
        </div>
        <div className="button-div1"><div className="button1"><button className='project-button1' type="submit" value="Send"  onClick={e=> Notify()}>Submit</button></div></div>
        
        </div>
        </form>
    </div>


  </div>
   
  </>
   
    
    
    
    
      
  
}

export default Contact
