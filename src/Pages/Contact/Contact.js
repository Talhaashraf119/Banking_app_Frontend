import React from 'react'
import './contact.css'
import { Link, useNavigate } from 'react-router-dom'
import '../Frontpage/FrontPage.css'
const Contact = () => {
  const navigate=useNavigate()
  const logoutfunctionality=()=>{
    localStorage.clear()
    navigate('/')
  }
  return (
    <>
    <nav className="navbar">
    <div className="logo"></div>
    
    
    {/* Search Bar */}
    <div className="search-container">
      {/* <input 
        type="text" 
        className="search-bar" 
        placeholder="Search transactions..." 
      /> */}
      <h2>Banking System</h2>
    </div>

    <ul className="nav-links">
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/service">Services</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li ><button onClick={logoutfunctionality} className="logout-btn"> Logout</button></li>
      </ul>
  </nav>
    <div className="contact-page">

  
    <div className="contact-container">
      <div className="contact-header">
        <div className="contact-logo"></div>
        <h1 className="contact-title">Contact Us</h1>
      </div>

      <div className="contact-content">
        {/* Contact Information */}
        <div className="contact-info-section">
          <div className="contact-info-card">
            <div className="contact-info-item">
              <div className="contact-icon-wrapper">
                <img src="/images/phone.png" alt="Phone" className="contact-icon" />
              </div>
              <span className="contact-info-text">+1 (555) 123-4567</span>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon-wrapper">
                <img src="/images/email.png" alt="Email" className="contact-icon" />
              </div>
              <span className="contact-info-text">support@bank.com</span>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon-wrapper">
                <img src="/images/address.png" alt="Address" className="contact-icon" />
              </div>
              <span className="contact-info-text">
                123 Financial Street<br/>New York, NY 10001
              </span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form-section">
          <div className="contact-form-group">
            <div className="contact-input-wrapper">
              <div className="contact-icon-wrapper">
                <img src="/images/profile.png" alt="Name" className="contact-icon" />
              </div>
              <input 
                type="text" 
                className="contact-input" 
                placeholder="Your Name" 
              />
            </div>

            <div className="contact-input-wrapper">
              <div className="contact-icon-wrapper">
                <img src="/images/email.png" alt="Email" className="contact-icon" />
              </div>
              <input 
                type="email" 
                className="contact-input" 
                placeholder="Your Email" 
              />
            </div>

            <div className="contact-input-wrapper">
              <div className="contact-icon-wrapper">
                <img src="/images/purpose.png" alt="Subject" className="contact-icon" />
              </div>
              <input 
                type="text" 
                className="contact-input" 
                placeholder="Subject" 
              />
            </div>

            <div className="contact-input-wrapper">
              <div className="contact-icon-wrapper">
                <img src="/images/question.png" alt="Message" className="contact-icon" />
              </div>
              <textarea 
                className="contact-input contact-textarea" 
                placeholder="Your Message" 
                rows="5"
              ></textarea>
            </div>
          </div>

          <button className="contact-submit-btn" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
  </>
  )
}

export default Contact