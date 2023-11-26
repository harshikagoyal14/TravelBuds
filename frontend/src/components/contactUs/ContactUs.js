import {React,useRef} from 'react'
import emailjs from '@emailjs/browser';
import './ContactUs.css'
import ContactIcon  from '../../icons/contactIcon.png'
const ContactUs = () => {

  const form = useRef()
  const serviceKey = process.env.REACT_APP_YOUR_SERVICE_ID;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
      <>
        <div className='contact-us-content'>
            <div className='heading-container'>
                <div className='envelope-img'>
                    <img src = {ContactIcon}/>
                </div>
                <div className='writing'>
                    <span id='title1'>Contact Us</span>
                    <span id='breif'>Feel free to reach out !</span>
                </div>
            </div>
            <div className='contact-container'>
                <form ref = {form} onSubmit = {sendEmail} className='form-control'>
                    <input
                        type = "text"
                        className='typing-field'
                        placeholder='Full Name...'
                        name = 'user_name' required/>

                    <input
                        type = "email"
                        className='typing-field'
                        placeholder='Email...'
                        name = 'user_email' required/>
                    
                    <textarea
                        id='Message...'
                        className='typing-message'
                        placeholder='Enter your message...'
                        cols = "30" rows = "10"
                        name = 'user_message' required></textarea>

                    <button type = 'submit' 
                    className='send-btn'>Send Message</button>
                </form>
            </div>
        </div>
      </>
  )
}

export default ContactUs;