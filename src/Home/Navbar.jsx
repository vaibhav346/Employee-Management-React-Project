// import React from 'react'
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useEffect } from 'react';
import './Navbar.css'
// import EmployeeProfile from './EmployeeProfile';
// import GetEmployee from './GetEmployee';
import { Link } from 'react-router-dom';
// import AdminDashBoard from './AdminDashBoard';
// import EmployeeDashboard from './EmployeeDashboard';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
     const [currentIndex, setCurrentIndex] = useState(0);

const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

     const images = [
      "/img/img1.jpg",
      "/img/img2.jpg",
      "/img/img3.jpg",
      "/img/img4.jpg",
      "/img/img5.jpg",
      "/img/img6.jpg",
    
  
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
      return () => clearInterval(interval);
    }, [images.length]);



     const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
        'service_1qsx7oh',      // Replace with your actual service ID
        'template_sm8z8ce',     // Replace with your actual template ID
        e.target,
        'vs13WgBj4tCGC3aGV'       // Replace with your actual public key
      )
      .then((result) => {
        alert("Email sent successfully!");
      }, (error) => {
        alert("Failed to send email. Please try again.");
        console.error(error.text);
      });
  
      e.target.reset(); // clear form after submission
    };
  

  return (
    <div>
       {/* Header with Logo */}
        <div className="header">
          <img
            src="/img/Logo.jpg"
            alt="Employee Logo"
          />
          <h1  style={{
  textAlign: 'center',
  color: '#2c3e50',
  fontFamily: 'Arial, sans-serif',
  fontWeight: '900', // very bold
  fontSize: '60px'
}}> Digital Employee Management System .Pvt .Limited</h1>
        </div>
  
        <nav className="navbar">
          <button className="toggle-btn" onClick={toggleMenu}>☰</button>
          <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
           <li><Link to="/">Home</Link></li>
            <li><Link to="/getemployee">Employees</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/RegisterForm">Register</Link></li>
          

          </ul>
        </nav>

    
  
        {/* Marquee */}
        <div className="marquee">
          <p>📚 Welcome to the Employee Management System! Browse Employee, manage members, and more. 📖</p>
        </div>

         {/* Image Slider */}
        <div className="slider">
          <img src={images[currentIndex]} alt="Slider" className="slide-image" />
        </div>
        {/* Information Table */}
        
{/* <GetEmployee></GetEmployee> */}
{/* <AdminDashBoard></AdminDashBoard> */}
{/* <EmployeeDashboard></EmployeeDashboard> */}

        <div className="info-table">
    <h2> Employee Information</h2>
    <table>
      <thead>
        <tr>
          <th>Section</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Total Employees</td>
          <td>5,000+</td>
        </tr>
        <tr>
          <td>Members</td>
          <td>1,200+</td>
        </tr>
        <tr>
          <td>Daily Employees</td>
          <td>300+</td>
        </tr>
        <tr>
          <td>Working Hours</td>
          <td>9:00 AM – 6:00 PM</td>
        </tr>
        <tr>
          <td>Contact</td>
          <td>library@domain.com</td>
        </tr>
      </tbody>
    </table>
  </div>
 

  {/* Google Map Embed */}
  <div className="map-container">
    <h2>📍 Company Location</h2>
    <iframe
      title="Library Location"
      src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3589.8448722140497!2d75.4830918!3d18.8109167!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2sin!4v1746155335385!5m2!1sen!2sin"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  
  
        {/* Contact Section */}
        <div className="contact-section">
          {/* Quick Links */}
          <div className="contact-column">
            <h3>📌 Quick Links</h3>
            <ul>
              <li><a href="/getemployee">Employee</a></li>
              <li><a href="/members">Members</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div className="contact-column">
            <h3>📞 Contact Info</h3>
            <p><strong>Address:</strong>Hefshine Software Pvt.Ltd</p>
            <p><strong>Email:</strong> vaibhavdhere6@gmail.com</p>
            <p><strong>Phone:</strong> +91 7499506039</p>
          </div>
  
          {/* Get In Touch Form */}
          <div className="contact-column">
            <h3>✉️ Get in Touch</h3>
            <form onSubmit={sendEmail}>
              <input type="text" name="user_name" placeholder="Your Name" required />
              <input type="email" name="user_email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
  
   {/* Copyright Section */}
   <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Vaibhav vikas dhere. Employee Management System. All Rights Reserved.</p>
        </footer>
 
    </div>
  )
}
