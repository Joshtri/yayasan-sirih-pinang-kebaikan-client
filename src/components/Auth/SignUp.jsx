// src/components/Signup.js
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import ikon mata
import logoYayasan from '../../assets/logoYayasan.jpg';

function Signup() {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState([]); // Ubah menjadi array untuk menampung multiple errors
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Fungsi validasi password
  const validatePassword = (password) => {
    const errors = [];

    const minLength = 8;
    if (password.length < minLength) {
      errors.push('Password harus minimal 8 karakter.');
    }

    const hasUpperCase = /[A-Z]/.test(password);
    if (!hasUpperCase) {
      errors.push('Password belum memiliki huruf kapital.');
    }

    const hasLowerCase = /[a-z]/.test(password);
    if (!hasLowerCase) {
      errors.push('Password belum memiliki huruf kecil.');
    }

    const hasDigit = /\d/.test(password);
    if (!hasDigit) {
      errors.push('Password belum mengandung angka.');
    }

    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    if (!hasSymbol) {
      errors.push('Password belum memiliki simbol.');
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset pesan error
    setError([]);

    // Validasi kekuatan password
    const passwordErrors = validatePassword(data.password);
    if (passwordErrors.length > 0) {
      setError(passwordErrors);
      return;
    }

    try {
      const url = `${import.meta.env.VITE_BASE_URL}/api/v1/user`; // API Signup
      const response = await axios.post(url, data);

      // Berhasil signup
      toast.success('Registrasi berhasil! Silakan login.');
      setTimeout(() => {
        navigate('/auth/login'); // Redirect ke halaman login
      }, 2000);
    } catch (error) {
      console.error('Error during signup:', error);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError([error.response.data.message]); // Tampilkan pesan error dari server
      } else {
        setError(['Terjadi kesalahan. Coba lagi nanti.']);
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
              <Label htmlFor="firstName" value="Nama Depan" />
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
              <Label htmlFor="lastName" value="Nama Belakang" />
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
              <Label htmlFor="email" value="Alamat Email" />
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

            <div className="relative">
              <Label htmlFor="password" value="Password" />
              <TextInput
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Masukkan password"
                name="password"
                value={data.password}
                onChange={handleChange}
                required
                className="mt-1 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              >
                {showPassword ? (
                  <FaEyeSlash className="h-5 w-5 text-gray-500" />
                ) : (
                  <FaEye className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>

            {error.length > 0 && (
              <ul className="text-red-500 text-sm mt-1">
                {error.map((errMsg, index) => (
                  <li key={index}>{errMsg}</li>
                ))}
              </ul>
            )}

            <div className="flex items-center mt-4">
              <Checkbox id="terms" required />
              <Label htmlFor="terms" className="ml-2">
                Saya setuju dengan{' '}
                <Link to="/terms" className="text-blue-600 hover:underline">
                  syarat dan ketentuan
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
            <Link
              to="/auth/login"
              className="text-sm text-blue-600 hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
