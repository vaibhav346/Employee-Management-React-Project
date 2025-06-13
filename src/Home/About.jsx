import React from 'react';
import './About.css';  // External CSS for styling

function About() {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About HefShine Private Limited</h1>
      </header>

      <section className="about-section">
        <p>
          HefShine Private Limited is a leading software training and development company focused on
          empowering fresh graduates and IT enthusiasts with real-world skills.
        </p>

        <p>
          We believe in combining <strong>practical training</strong> with <strong>real project work</strong>.
          Our Employee Management System is an in-house project built by trainees to simulate real industry development.
        </p>

        <p>
          Our team consists of talented students and mentors who collaborate to build enterprise-ready
          applications using modern technologies such as:
        </p>

        <ul className="tech-list">
          <li>✅ Spring Boot (Java Backend)</li>
          <li>✅ ReactJS Frontend</li>
          <li>✅ MySQL Database</li>
          <li>✅ REST APIs</li>
        </ul>

        <p>
          We are committed to creating <strong>learning opportunities</strong> through hands-on experience,
          mentoring, and job-oriented training programs.
        </p>
      </section>

      <footer className="about-footer">
        <p>&copy; 2025 HefShine Private Limited. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
