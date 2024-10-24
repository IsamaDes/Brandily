import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

interface RegisterFormData{
  email: string;
  password: string;
}

const RegisterPage: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<RegisterFormData>({
      email: "",
      password: "",
     
    });

    const [error, setError] = useState<string | null >(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log('Submitting:', formData);
      setIsLoading(true);
      setError(null);


      try {
        const response = await axios.post('http://localhost:3000/api/auth/register', formData, { headers: { 'Content-Type': 'application/json' } });
        if (response.status === 201) {
          alert('Registration successful! Redirecting to login...');
          navigate('/login');
        }
      } catch (err: any) {
        console.error('Error:', err);
        setError(err.response?.data?.message || 'Registration failed. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <form
      className="bg-white p-8 shadow-lg rounded-lg max-w-sm w-full"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>

      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      <InputField
        id="email"
        name="email"
        type="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <InputField
        id="password"
        name="password"
        type="password"
        label="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <SubmitButton isLoading={isLoading} text="Register" />
    </form>
  </div>
  )
}

export default RegisterPage;