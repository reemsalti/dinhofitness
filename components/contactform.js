import React, { useRef } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './contactform.module.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SiInstagram } from 'react-icons/si';

const ContactPage = () => {
  const form = useRef();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_313sye7', 'template_ac4saxo', form.current, 'gOeTRUxDQzwxt_eCf')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    console.log(firstName, lastName, email, number, message);

    setTimeout(function handleSubmit() {
      setFirstName("");
      setLastName("");
      setEmail("");
      setNumber("");
      setMessage("");
    }, 1000);

    toast.success('Message Sent! ', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });

  };

  return (
  <div className={styles.formwrapper}>
      
      <div className={styles.form}>
        {/* <p className={styles.formmsg}>Leave Me a message</p> */}
        
        <form id="contactForm" ref={form} onSubmit={sendEmail}>
          <div className={styles.names}>
            <div className={styles.wrapper}>
              <label className={styles.label} htmlFor="name">*First Name</label>
              <input className={styles.input}
                type="text"
                name="first_name" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className={styles.wrapper}>
              <label className={styles.label} htmlFor="name">*Last Name</label>
              <input className={styles.input}
                type="text" 
                name="last_name" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className={styles.wrapper}>
            <label className={styles.label} htmlFor="tel">*Phone</label>
            <input className={styles.input}
              id="tel"
              type="tel" 
              name="user_tel" 
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required 
            /> 
          </div>
          <div className={styles.wrapper}>
            <label className={styles.label} htmlFor="email">*E-mail Address</label>
            <input className={styles.input}
              id="email"
              type="email" 
              name="user_email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            /> 
          </div>
          <div className={styles.wrapper}>
            <label className={styles.label} htmlFor="message">*Message</label>
            <textarea
              id="message"
              name="message"
              className={styles.message}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className={styles.submitwrapper}>
            <button 
              className={styles.submit} 
              type="submit" 
              value="Send" 
              onClick={() => {(sendEmail());}}
            >
              Submit
            </button>
          </div>
          <ToastContainer
            position="bottom-center"
            autoClose={7000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </form>
      </div>
      <div className={styles.contactinfo}>
        <div className={styles.clinks}>
          <a href='tel:6476670878' className={styles.clink}>
            647-667-0878
          </a>
          <br></br>
          <a href='mailto:mamdinho777@gmail.com' className={styles.clink}>
            mamdinho777@gmail.com
          </a>
          <br></br>
          <a href='https://www.instagram.com/_mamdinho/' className={styles.clink}>
            <SiInstagram className={styles.cicon}/> @_mamdinho
          </a>
        </div>
      </div>
    </div>
  
 );
};
export default ContactPage;



