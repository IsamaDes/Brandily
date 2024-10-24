import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import {useNavigate} from 'react-router-dom';
import bookworld from "../../assets/bookworld.png";

const Login: React.FC = () => {
    const authContext = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    if (!authContext) {
        throw new Error("Login must be used within AuthProvider");
    }

    const { login } = authContext;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim() && password.trim()) {

        try{
           const isLoggedIn = await login(email, password);
           if(isLoggedIn){
            navigate('/home')
           }else{
            setError('Invalid Email or Password')
           }

        }catch(error){
            setError('Login failed. please try again')
        }
            setPassword('');
        
        } else {
            setError('Both fields are required.');
        }
    };

    return (
        <div className="flex items-center justify-center h-screen relative">
            <img src={bookworld} alt="Background" className="absolute inset-0 object-cover w-full h-full" />
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md z-10">
                <h2 className="text-2xl mb-4">Login</h2>
                {error && <p className="text-red-500 mb-2">{error}</p>}
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="border border-gray-300 p-2 mb-4 w-full"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="border border-gray-300 p-2 mb-4 w-full"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
