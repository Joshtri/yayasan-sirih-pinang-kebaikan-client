import React, { useEffect, useState } from 'react';
import { Card, Button, Alert } from 'flowbite-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function MainDashboard() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('');
  const [totalArticles, setTotalArticles] = useState(0); // Total artikel
  const [totalComments, setTotalComments] = useState(0); // Total komentar
  const [totalDrafts, setTotalDrafts] = useState(0); // Total draft artikel

  const [error, setError] = useState('');
  const navigate = useNavigate(); // Untuk navigasi

  useEffect(() => {
    const storedFirstName = localStorage.getItem('firstName');
    const storedLastName = localStorage.getItem('lastName');
    const storedRole = localStorage.getItem('role');
    const penulisId = localStorage.getItem('id'); // Ambil ID penulis

    if (storedFirstName && storedLastName && storedRole) {
      setFirstName(storedFirstName);
      setLastName(storedLastName);
      setRole(storedRole);
    }

    if (penulisId) {
      fetchTotalArticles(penulisId); // Ambil total artikel
      fetchTotalComments(penulisId); // Ambil total komentar
    }
  }, []);

  // Fungsi untuk mengambil total artikel
  const fetchTotalArticles = async (penulisId) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/v1/article/count/${penulisId}`
      );
      setTotalArticles(response.data.count);
    } catch (error) {
      console.error('Error fetching total articles:', error);
      setError('Gagal mengambil total artikel.');
    }
  };

  // Fungsi untuk mengambil total komentar
  const fetchTotalComments = async (penulisId) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/v1/comment/count/${penulisId}`
      );
      setTotalComments(response.data.count);
    } catch (error) {
      console.error('Error fetching total comments:', error);
      setError('Gagal mengambil total komentar.');
    }
  };
  

  const handleWriteArticle = () => {
    navigate('/my/author/posted-article');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center border-b pb-3 mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>

      <Card className="bg-blue-100 p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-2 text-blue-900">
          {firstName && lastName
            ? `Selamat Datang, ${firstName} ${lastName}!`
            : 'Welcome to the dashboard!'}
        </h2>
        <p className="text-gray-700 mt-2">
          Kami senang melihat Anda! Ingin membagikan ide atau tulisan Anda dengan dunia?
        </p>
        <div className="mt-4 flex justify-start items-center gap-4">
          <Button onClick={handleWriteArticle} gradientDuoTone="greenToBlue">
            Mulai Menulis Artikel
          </Button>
        </div>
      </Card>

      {error && <Alert color="failure" className="mt-4">{error}</Alert>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <Card>
          <h5 className="text-lg font-medium">Total Artikel</h5>
          <p className="text-gray-600">{totalArticles}</p>
        </Card>
        <Card>
          <h5 className="text-lg font-medium">Total Komentar</h5>
          <p className="text-gray-600">{totalComments}</p>
        </Card>
        <Card>
          <h5 className="text-lg font-medium">Draft Artikel</h5>
          <p className="text-gray-600">12</p>
        </Card>
      </div>

      {/* <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Author Panel</h2>
        <p className="text-gray-600">
          Sebagai penulis, Anda dapat mengelola artikel Anda dan melihat statistik terkait.
        </p>
      </section> */}
    </div>
  );
}

export default MainDashboard;
