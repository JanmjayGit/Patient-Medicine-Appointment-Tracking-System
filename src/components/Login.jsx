// import './Login.css';

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login({ setIsLoggedIn }) {
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//     setError('');
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();

//     const users = JSON.parse(localStorage.getItem('users')) || [];
//     const matchedUser = users.find(
//       (user) => user.email === form.email && user.password === form.password
//     );

//     if (matchedUser) {
//       setIsLoggedIn(true);
//       localStorage.setItem('user',JSON.stringify(matchedUser));
//       alert('Login successful!');
//       navigate('/home'); // redirect to home page
//     } else {
//       setError('Invalid email or password.');
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <h2>Login</h2>
//       <div>
//         <label>Email:</label><br />
//         <input
//           type="email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Password:</label><br />
//         <input
//           type="password"
//           name="password"
//           value={form.password}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default Login;


import './Login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setIsLoggedIn }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate loading for better UX
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const matchedUser = users.find(
        (user) => user.email === form.email && user.password === form.password
      );

      if (matchedUser) {
        setIsLoggedIn(true);
        localStorage.setItem('user', JSON.stringify(matchedUser));
        alert('Login successful!');
        navigate('/home');
      } else {
        setError('Invalid email or password.');
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="login-container">
      <div className="login-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      <div className="login-wrapper">
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-header">
            <div className="header-icon">🔐</div>
            <h2>Welcome Back</h2>
            <p className="subtitle">Please sign in to your account</p>
          </div>

          <div className="form-content">
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
                  placeholder="Enter your email"
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
                  placeholder="Enter your password"
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

            <button type="submit" className="login-button" disabled={isLoading}>
              {isLoading ? (
                <span className="button-loading">
                  <span className="spinner"></span>
                  Signing in...
                </span>
              ) : (
                'Sign In'
              )}
            </button>
          </div>

          <div className="form-footer">
            <p>Don't have an account? <a href="/registration">Sign up here</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;