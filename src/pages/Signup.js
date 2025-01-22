import React, { useState } from 'react';
import API from '../api';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('api/auth/local/register', form);
      localStorage.setItem('token', res.data.jwt);
      navigate('/chat');
    } catch (err) {
      console.error(err);
      alert('Signup failed!');
      navigate('/signup')
    }
  };

  return (
    <div>
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-10 rounded-lg shadow-md space-y-4 mt-10 border"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Sign Up
        </h2>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
        >
          Signup
        </button>
        <p className="text-sm text-gray-500 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </form>

    </div>
  );
};

export default Signup;
