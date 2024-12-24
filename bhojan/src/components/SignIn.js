import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!username || !password) {
      setError('Both email and password are required!');
      return;
    }

    // Simulating a login API request
    console.log('Logging in with:', { username, password });
    // Resetting form and error
    setUsername('');
    setPassword('');
    setError('');
    alert('Login successful!');
  };

  return (
    <div className="form-container">
         <h2 className='signin-title'><center>SignIn</center></h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className='signin-form'>
        <div className='input-box'>
          {/* <label>Username:</label> */}
          <input type="Username" onChange={(e) => setUsername(e.target.value)} placeholder="Enter your Username" required/><br/><br/>
        </div>
        <div className='input-box'>
          {/* <label>Password:</label> */}
          <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required
          /><br/>
        </div>
        <br></br>
        <button type="submit" className='login-btn'>Login</button>
      </form>
      <p className='signup'>
        <br></br>
        <center>Don't have an account?<Link to='/signup'>SignUp</Link></center>
      </p>
    </div>
  );
};

export default SignIn