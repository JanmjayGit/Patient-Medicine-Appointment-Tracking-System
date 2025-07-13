// import React from 'react';
// import './About.css';

// function About() {
//   return (
//     <div className="about-container">
//       <h2>About This Project 🩺</h2>
//       <p className="about-text">
//         <strong>Patient Medicine & Appointment Tracking System</strong> is a user-friendly platform
//         designed to help patients easily schedule appointments, view prescriptions, and manage
//         healthcare records.
//         <br /><br />
//         <strong>Key Features:</strong>
//         <ul>
//           <li>Secure registration and login</li>
//           <li>Book appointments by choosing doctor, date, and time</li>
//           <li>Track upcoming appointments on your dashboard</li>
//           <li>View doctor-issued prescriptions anytime</li>
//         </ul>
//         <br />
//         <strong>Doctor Availability:</strong>
//         <ul>
//           <li>
//             <strong>Dr. Smith</strong>: Monday & Wednesday<br />
//             Time: 10:00 AM – 12:00 PM
//           </li>
//           <li>
//             <strong>Dr. Johnson</strong>: Tuesday & Thursday<br />
//             Time: 11:00 AM – 1:00 PM
//           </li>
//           <li>
//             <strong>Dr. Gupta</strong>: Monday & Friday<br />
//             Time: 9:00 AM – 11:00 AM
//           </li>
//           <li>
//             <strong>Dr. Patel</strong>: Wednesday & Saturday<br />
//             Time: 2:00 PM – 4:00 PM
//           </li>
//         </ul>
//         <br />
//         This platform streamlines communication between doctors and patients by keeping
//         medical records organized and appointments on track.
//       </p>
//     </div>
//   );
// }

// export default About;



import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <div className="header-content">
          <h1 className="main-title">
            <span className="title-icon">🩺</span>
            About This Project
          </h1>
          <div className="header-decoration"></div>
        </div>
      </div>

      <div className="about-content">
        <div className="intro-section">
          <div className="intro-card">
            <h2 className="project-name">Patient Medicine & Appointment Tracking System</h2>
            <p className="project-description">
              A comprehensive, user-friendly platform designed to revolutionize healthcare management 
              by helping patients seamlessly schedule appointments, access prescriptions, and organize 
              their medical records with ease.
            </p>
          </div>
        </div>

        <div className="features-section">
          <h3 className="section-title">
            <span className="section-icon">⭐</span>
            Key Features
          </h3>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔐</div>
              <h4>Secure Access</h4>
              <p>Safe registration and login system with encrypted data protection</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h4>Easy Booking</h4>
              <p>Book appointments by choosing your preferred doctor, date, and time</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h4>Dashboard Tracking</h4>
              <p>Monitor all your upcoming appointments in one convenient location</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💊</div>
              <h4>Prescription Access</h4>
              <p>View and manage all doctor-issued prescriptions anytime, anywhere</p>
            </div>
          </div>
        </div>

        <div className="doctors-section">
          <h3 className="section-title">
            <span className="section-icon">👨‍⚕️</span>
            Doctor Availability
          </h3>
          <div className="doctors-grid">
            <div className="doctor-card">
              <div className="doctor-avatar">DS</div>
              <div className="doctor-info">
                <h4>Dr. Smith</h4>
                <div className="schedule">
                  <span className="days">Monday & Wednesday</span>
                  <span className="time">10:00 AM – 12:00 PM</span>
                </div>
              </div>
            </div>
            <div className="doctor-card">
              <div className="doctor-avatar">DJ</div>
              <div className="doctor-info">
                <h4>Dr. Johnson</h4>
                <div className="schedule">
                  <span className="days">Tuesday & Thursday</span>
                  <span className="time">11:00 AM – 1:00 PM</span>
                </div>
              </div>
            </div>
            <div className="doctor-card">
              <div className="doctor-avatar">DG</div>
              <div className="doctor-info">
                <h4>Dr. Gupta</h4>
                <div className="schedule">
                  <span className="days">Monday & Friday</span>
                  <span className="time">9:00 AM – 11:00 AM</span>
                </div>
              </div>
            </div>
            <div className="doctor-card">
              <div className="doctor-avatar">DP</div>
              <div className="doctor-info">
                <h4>Dr. Patel</h4>
                <div className="schedule">
                  <span className="days">Wednesday & Saturday</span>
                  <span className="time">2:00 PM – 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="closing-section">
          <div className="closing-card">
            <div className="closing-icon">🤝</div>
            <p>
              This platform streamlines communication between doctors and patients by keeping 
              medical records organized and appointments on track, ensuring better healthcare 
              outcomes for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;