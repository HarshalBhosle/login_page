import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signin() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signin Data:', formData);
  };

  return (
    <div className="card shadow p-5 bg-dark text-light">
      <h2 className="mb-4">Signin</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control bg-secondary text-light border-0"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control bg-secondary text-light border-0"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-secondary btn-lg w-100 mb-3">Signin</button>
        <div className="text-center">
          <Link to="/signup" className="text-light">Don't have an account? Signup</Link>
        </div>
      </form>
    </div>
  );
}

export default Signin;
