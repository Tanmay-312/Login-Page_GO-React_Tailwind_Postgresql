import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/login', { username, password });
            console.log('Login successful');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };
    
    return (
        <div className="form-container">
            <div className="form-box">
                <h2 className="form-heading">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="username-label">Username</label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="username-input"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="password-label">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="password-input"
                        />
                    </div>
                    <div className="center-button">
                        <button
                            type="submit"
                            className="button"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <div className="link">
                    <span>Want to register?</span>{' '}
                        <Link to="/register" className="signin-link">Sign In</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
