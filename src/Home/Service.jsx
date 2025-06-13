import React from 'react';
import './Service.css';  // External CSS for styling

function Service() {
  return (
    <div className="services-page">
      <h1 className="services-title">Our Services</h1>
      <p className="services-subtitle">
        At HefShine Private Limited, we offer comprehensive, hands-on training programs tailored to help you become industry-ready.
      </p>

      <div className="services-grid">
        <div className="service-card">
          <h3>Full Stack Development Training</h3>
          <p>Master technologies like Java, Spring Boot, React, and MySQL with real-world project exposure.</p>
        </div>
        <div className="service-card">
          <h3>Live Project Experience</h3>
          <p>Gain confidence by working on actual software projects guided by experienced mentors.</p>
        </div>
        <div className="service-card">
          <h3>Campus Training</h3>
          <p>Custom training programs for colleges to improve student placement rates and industry readiness.</p>
        </div>
        <div className="service-card">
          <h3>Job Placement Support</h3>
          <p>Resume building, mock interviews, and job referrals to help trainees land their first job.</p>
        </div>
        <div className="service-card">
          <h3>Corporate Training</h3>
          <p>Upskill your employees with custom, technology-focused training from our expert team.</p>
        </div>
        <div className="service-card">
          <h3>Internship Opportunities</h3>
          <p>Get hands-on experience through internships designed to simulate actual software development environments.</p>
        </div>
      </div>
    </div>
  );
}

export default Service;
