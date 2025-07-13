// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './RegistrationForm.css';

// const RegistrationForm = () => {
//   const [form, setForm] = useState({ name: '', email: '', password: '' });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//     setError('');
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let userList = JSON.parse(localStorage.getItem('users')) || [];
//     let matchedUser = userList.find((user) => user.email === form.email);

//     if (matchedUser) {
//       alert('User is already registered with this email ID');
//       return; // Prevent further execution
//     }

//     let updatedList = [...userList, form];
//     localStorage.setItem('users', JSON.stringify(updatedList));
//     alert('User is registered');
//     navigate('/login'); // optional redirection
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label><br />
//         <input name="name" value={form.name} onChange={handleChange} required />
//       </div>
//       <div>
//         <label>Email:</label><br />
//         <input name="email" type="email" value={form.email} onChange={handleChange} required />
//       </div>
//       <div>
//         <label>Password:</label><br />
//         <input name="password" type="password" value={form.password} onChange={handleChange} required />
//       </div>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default RegistrationForm;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate loading for better UX
    setTimeout(() => {
      let userList = JSON.parse(localStorage.getItem('users')) || [];
      let matchedUser = userList.find((user) => user.email === form.email);

      if (matchedUser) {
        setError('User is already registered with this email ID');
        setIsLoading(false);
        return;
      }

      let updatedList = [...userList, form];
      localStorage.setItem('users', JSON.stringify(updatedList));
      setSuccess('Registration successful! Redirecting to login...');
      
      setTimeout(() => {
        navigate('/login');
      }, 1500);
      
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="registration-container">
      <div className="registration-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
      </div>
      
      <div className="registration-wrapper">
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-header">
            <div className="header-icon">👤</div>
            <h2>Create Account</h2>
            <p className="subtitle">Join our healthcare platform today</p>
          </div>

          <div className="form-content">
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <div className="input-wrapper">
                <span className="input-icon">👨‍💼</span>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-wrapper">
                <span className="input-icon">📧</span>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <span className="input-icon">🔒</span>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="error-message">
                <span className="error-icon">⚠️</span>
                {error}
              </div>
            )}

            {success && (
              <div className="success-message">
                <span className="success-icon">✅</span>
                {success}
              </div>
            )}

            <button type="submit" className="register-button" disabled={isLoading}>
              {isLoading ? (
                <span className="button-loading">
                  <span className="spinner"></span>
                  Creating Account...
                </span>
              ) : (
                'Create Account'
              )}
            </button>
          </div>

          <div className="form-footer">
            <p>Already have an account? <a href="/login">Sign in here</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;