import React, {useContext, createContext, useState, ReactNode} from 'react';
import axios from 'axios';

import {User} from "../types/User";


interface AuthContextType {
    currentUser: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    logout: ()=> void;
    createUser: (user: User) => Promise<boolean>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

     const [currentUser, setCurrentUser] = useState<User | null>(null);

     const createUser = async (user: User): Promise<boolean> => {
        try{
            const response = await axios.post('/api/register', user);
            return response.status === 201;
        } catch(error){
            console.error('Error creating User:', error)
            return false;
        }
    };
        

     const login = async (email: string, password: string): Promise<boolean> => {
        try{
            const response = await axios.post('http://localhost:3000/api/auth/login', {email, password});
            if(response.status === 200){
                setCurrentUser(response.data.user);
                const currentTimeElement = document.getElementById('currentTime');
                const temperatureElement = document.getElementById('temperature');
                if(currentTimeElement && temperatureElement){
                    currentTimeElement.innerText = `currentTime: ${response.data.currentTime}`;
                    temperatureElement.innerText = `currentTime: ${response.data.temperature}°C`;
                }
                return true;
            }
            return false;
        } catch (error){
            if (axios.isAxiosError(error)) {
                console.error('Axios error:', error.response?.data.message);
              } else {
                console.error('Unknown error:', error);
              }
              return false;
        }
    }
        const logout = () => {
        setCurrentUser(null);
      };


     return (
        <AuthContext.Provider value={{ currentUser, login, logout, createUser }}>
            {children} 
        </AuthContext.Provider>
    );
    
};










