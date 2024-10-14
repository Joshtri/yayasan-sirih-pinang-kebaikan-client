// src/components/Signup.js
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logoYayasan from '../../assets/logoYayasan.jpg';

function Signup() {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Navigate untuk mengarahkan setelah signup

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${import.meta.env.VITE_BASE_URL}/api/v1/signup`; // API Signup
      const response = await axios.post(url, data);
  
      // Berhasil signup
      console.log('Signup response:', response);
      toast.success('Registrasi berhasil! Silakan login.');
      setTimeout(() => {
        navigate('/auth/login'); // Redirect ke halaman login
      }, 2000);
    } catch (error) {
      console.error('Error during signup:', error);
      if (error.response && error.response.status >= 400 &&error.response.status <= 500) {
        setError(error.response.data.message); // Tampilkan pesan error
      } else {
        setError('Terjadi kesalahan. Coba lagi nanti.');
      }
    }
  };
  

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 mt-20 pt-20 pb-20 mb-20">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="flex shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
        <div className="hidden md:flex flex-col justify-center items-center bg-blue-600 text-white w-1/2 p-10">
          <img
            src={logoYayasan}
            alt="Logo Yayasan"
            className="mb-5 w-40 h-40 object-contain"
          />
          <h2 className="text-2xl font-bold mb-2">Bergabung Sekarang</h2>
          <p className="text-center">
            Daftarkan akun Anda dan mulai berbagi artikel menarik.
          </p>
        </div>

        <div className="bg-white w-full md:w-1/2 p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">Buat Akun Baru</h2>
            <p className="text-gray-600">Isi form di bawah untuk mendaftar.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="firstName" value="First Name" />
              <TextInput
                id="firstName"
                type="text"
                placeholder="Masukkan nama depan"
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="lastName" value="Last Name" />
              <TextInput
                id="lastName"
                type="text"
                placeholder="Masukkan nama belakang"
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="email" value="Email address" />
              <TextInput
                id="email"
                type="email"
                placeholder="Masukkan email"
                name="email"
                value={data.email}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="password" value="Password" />
              <TextInput
                id="password"
                type="password"
                placeholder="Masukkan password"
                name="password"
                value={data.password}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>

            {error && <div className="text-red-500">{error}</div>}

            <div className="flex items-center mt-4">
              <Checkbox id="terms" required />
              <Label htmlFor="terms" className="ml-2">
                I agree to the{' '}
                <Link to="/terms" className="text-blue-600 hover:underline">
                  terms and conditions
                </Link>
              </Label>
            </div>

            <Button type="submit" className="w-full mt-4">
              Daftar
            </Button>
          </form>

          <div className="text-center mt-4">
            <span className="text-sm text-gray-600">
              Sudah punya akun?{' '}
            </span>
            <Link to="/auth/login" className="text-sm text-blue-600 hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
