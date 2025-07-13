// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';

// function Home() {
//   const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem('user'));

//   const handleProfile = () => {
//     navigate('/dashboard');
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate('/login');
//   };

//   const handleLogin = () => {
//     navigate('/login');
//   };

//   const handleRegister = () => {
//     navigate('/registration');
//   };

//   return (
//     <div className="home-container">
//       <h1 className="home-title">Welcome to Patient Medicine & Appointment Tracker</h1>
//       <p className="home-subtitle">
//         Manage your health better — book appointments, view prescriptions, and more!
//       </p>

//       <div className="button-group">
//         {user ? (
//           <>
//             <button className="home-button" onClick={handleProfile}>Dashboard</button>
//             <button className="logout-button" onClick={handleLogout}>Logout</button>
//           </>
//         ) : (
//           <>
//             <button className="home-button" onClick={handleLogin}>Login</button>
//             <button className="home-button" onClick={handleRegister}>Register</button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Calendar, Pill, FileText, Users, Clock, Shield } from 'lucide-react';
// import './Home.css';

// function Home() {
//   const navigate = useNavigate(); // <-- Required for navigation
//   const [user, setUser] = React.useState(null); // Set to true to simulate logged-in state

//   const handleProfile = () => {
//     console.log('Navigate to dashboard');
//     navigate('/dashboard');
//   };

//   const handleLogout = () => {
//     setUser(null);
//     console.log('Navigate to login');
//     navigate('/login');
//   };

//   const handleLogin = () => {
//     console.log('Navigate to login');
//     navigate('/login');
//   };

//   const handleRegister = () => {
//     console.log('Navigate to registration');
//     navigate('/registration');
//   };

//   return (
//     <div className="home-container">
//       {/* Header */}
//       <header className="header">
//         <div className="header-content">
//           <div className="header-left">
//             <div className="logo">
//               <div className="logo-icon">
//                 <Pill className="pill-icon" />
//               </div>
//               <div className="brand-info">
//                 <h1 className="brand-title">MediTracker</h1>
//                 <p className="brand-subtitle">Your Health Companion</p>
//               </div>
//             </div>

//             <div className="header-buttons">
//               {user ? (
//                 <>
//                   <button onClick={handleProfile} className="btn btn-primary">
//                     Dashboard
//                   </button>
//                   <button onClick={handleLogout} className="btn btn-danger">
//                     Logout
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <button onClick={handleLogin} className="btn btn-success">
//                     Login
//                   </button>
//                   <button onClick={handleRegister} className="btn btn-primary">
//                     Register
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <main className="main-content">
//         <div className="hero-section">
//           <h2 className="hero-title">
//             Take Control of Your 
//             <span className="text-highlight"> Health Journey</span>
//           </h2>
//           <p className="hero-description">
//             Your comprehensive digital health companion that simplifies medical management. 
//             Effortlessly schedule appointments with trusted healthcare providers, track your medications 
//             with smart reminders, access your complete medical history in one secure place, and stay 
//             connected with your care team. Experience peace of mind knowing your health information 
//             is organized, accessible, and always up-to-date.
//           </p>

//           {/* {!user && (
//             <div className="hero-buttons">
//               <button onClick={handleRegister} className="btn btn-large btn-primary-large">
//                 Register
//               </button>
//               <button onClick={handleLogin} className="btn btn-large btn-outline">
//                 Login
//               </button>
//             </div>
//           )} */}
//         </div>

//         {/* Features Grid */}
//         <div className="features-grid">
//           <div className="feature-card feature-card-blue">
//             <div className="feature-icon icon-blue">
//               <Calendar />
//             </div>
//             <h3 className="feature-title">Smart Appointment Scheduling</h3>
//             <p className="feature-description">
//               Book appointments with ease, receive automated reminders, and sync with your calendar. 
//               Never miss an important medical visit again.
//             </p>
//           </div>

//           <div className="feature-card feature-card-green">
//             <div className="feature-icon icon-green">
//               <Pill />
//             </div>
//             <h3 className="feature-title">Medication Management</h3>
//             <p className="feature-description">
//               Track prescriptions, set medication reminders, monitor dosages, and receive refill alerts. 
//               Stay on top of your treatment plan effortlessly.
//             </p>
//           </div>

//           <div className="feature-card feature-card-purple">
//             <div className="feature-icon icon-purple">
//               <FileText />
//             </div>
//             <h3 className="feature-title">Digital Health Records</h3>
//             <p className="feature-description">
//               Securely store and access your complete medical history, test results, and treatment records 
//               from anywhere, anytime.
//             </p>
//           </div>

//           <div className="feature-card feature-card-red">
//             <div className="feature-icon icon-red">
//               <Users />
//             </div>
//             <h3 className="feature-title">Healthcare Provider Network</h3>
//             <p className="feature-description">
//               Connect with trusted doctors, specialists, and healthcare facilities. 
//               Build your personalized care team and communicate seamlessly.
//             </p>
//           </div>

//           <div className="feature-card feature-card-yellow">
//             <div className="feature-icon icon-yellow">
//               <Clock />
//             </div>
//             <h3 className="feature-title">24/7 Health Monitoring</h3>
//             <p className="feature-description">
//               Track vital signs, symptoms, and health metrics continuously. 
//               Get insights and alerts to maintain optimal health.
//             </p>
//           </div>

//           <div className="feature-card feature-card-indigo">
//             <div className="feature-icon icon-indigo">
//               <Shield />
//             </div>
//             <h3 className="feature-title">Privacy & Security</h3>
//             <p className="feature-description">
//               Your health data is protected with enterprise-grade security and HIPAA compliance. 
//               Your privacy is our top priority.
//             </p>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="cta-section">
//           <h3 className="cta-title">Ready to Transform Your Health Management?</h3>
//           <p className="cta-description">
//             Join thousands of users who have already simplified their healthcare journey with MediTracker.
//           </p>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="footer-content">
//           <p className="footer-text">
//             © 2025 MediTracker. Committed to improving healthcare accessibility and management.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Home;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Pill, FileText, Users, Clock, Shield } from 'lucide-react';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  // Initialize user state - you can set this based on your authentication logic
  const [user, setUser] = React.useState(null); // Change to true to simulate logged-in state

  // You might want to check authentication status on component mount
  React.useEffect(() => {
    // Example: Check if user is logged in from localStorage, context, or API
    const checkAuthStatus = () => {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      if (isLoggedIn) {
        setUser({ name: 'User' }); // Set user data
      }
    };
    
    checkAuthStatus();
  }, []);

  const handleProfile = () => {
    console.log('Navigate to dashboard');
    navigate('/dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('isLoggedIn'); // Clear auth status
    console.log('Navigate to login');
    navigate('/login');
  };

  const handleLogin = () => {
    console.log('Navigate to login');
    navigate('/login');
  };

  const handleRegister = () => {
    console.log('Navigate to registration');
    navigate('/registration');
  };

  // Function to simulate login (you can remove this in production)
  const simulateLogin = () => {
    setUser({ name: 'Test User' });
    localStorage.setItem('isLoggedIn', 'true');
  };

  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <div className="logo">
              <div className="logo-icon">
                <Pill className="pill-icon" />
              </div>
              <div className="brand-info">
                <h1 className="brand-title">MediTracker</h1>
                <p className="brand-subtitle">Your Health Companion</p>
              </div>
            </div>

            {/* <div className="header-buttons">
              {user ? (
                <>
                  <button onClick={handleProfile} className="btn btn-primary">
                    Dashboard
                  </button>
                  <button onClick={handleLogout} className="btn btn-danger">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button onClick={handleLogin} className="btn btn-success">
                    Login
                  </button>
                  <button onClick={handleRegister} className="btn btn-primary">
                    Register
                  </button>

                </>
              )}
            </div> */}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="main-content">
        <div className="hero-section">
          <h2 className="hero-title">
            Take Control of Your 
            <span className="text-highlight"> Health Journey</span>
          </h2>
          <p className="hero-description">
            Your comprehensive digital health companion that simplifies medical management. 
            Effortlessly schedule appointments with trusted healthcare providers, track your medications 
            with smart reminders, access your complete medical history in one secure place, and stay 
            connected with your care team. Experience peace of mind knowing your health information 
            is organized, accessible, and always up-to-date.
          </p>

          {/* {!user && (
            <div className="hero-buttons">
              <button onClick={handleRegister} className="btn btn-large btn-primary-large">
                Register
              </button>
              <button onClick={handleLogin} className="btn btn-large btn-outline">
                Login
              </button>
            </div>
          )} */}
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          <div className="feature-card feature-card-blue">
            <div className="feature-icon icon-blue">
              <Calendar />
            </div>
            <h3 className="feature-title">Smart Appointment Scheduling</h3>
            <p className="feature-description">
              Book appointments with ease, receive automated reminders, and sync with your calendar. 
              Never miss an important medical visit again.
            </p>
          </div>

          <div className="feature-card feature-card-green">
            <div className="feature-icon icon-green">
              <Pill />
            </div>
            <h3 className="feature-title">Medication Management</h3>
            <p className="feature-description">
              Track prescriptions, set medication reminders, monitor dosages, and receive refill alerts. 
              Stay on top of your treatment plan effortlessly.
            </p>
          </div>

          <div className="feature-card feature-card-purple">
            <div className="feature-icon icon-purple">
              <FileText />
            </div>
            <h3 className="feature-title">Digital Health Records</h3>
            <p className="feature-description">
              Securely store and access your complete medical history, test results, and treatment records 
              from anywhere, anytime.
            </p>
          </div>

          <div className="feature-card feature-card-red">
            <div className="feature-icon icon-red">
              <Users />
            </div>
            <h3 className="feature-title">Healthcare Provider Network</h3>
            <p className="feature-description">
              Connect with trusted doctors, specialists, and healthcare facilities. 
              Build your personalized care team and communicate seamlessly.
            </p>
          </div>

          <div className="feature-card feature-card-yellow">
            <div className="feature-icon icon-yellow">
              <Clock />
            </div>
            <h3 className="feature-title">24/7 Health Monitoring</h3>
            <p className="feature-description">
              Track vital signs, symptoms, and health metrics continuously. 
              Get insights and alerts to maintain optimal health.
            </p>
          </div>

          <div className="feature-card feature-card-indigo">
            <div className="feature-icon icon-indigo">
              <Shield />
            </div>
            <h3 className="feature-title">Privacy & Security</h3>
            <p className="feature-description">
              Your health data is protected with enterprise-grade security and HIPAA compliance. 
              Your privacy is our top priority.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <h3 className="cta-title">Ready to Transform Your Health Management?</h3>
          <p className="cta-description">
            Join thousands of users who have already simplified their healthcare journey with MediTracker.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            © 2025 MediTracker. Committed to improving healthcare accessibility and management.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;