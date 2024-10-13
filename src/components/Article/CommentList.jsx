// src/components/CommentList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner, Button } from 'flowbite-react';

function CommentList({ artikelId, newComment }) {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // State untuk halaman saat ini
  const [totalPages, setTotalPages] = useState(0); // Inisialisasi total halaman ke 0
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const commentsPerPage = 7; // Jumlah komentar per halaman

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/v1/comment/${artikelId}?page=${currentPage}&limit=${commentsPerPage}`
        );

        const data = response.data.data;
        const total = response.data.total;

        if (data) {
          setComments(data);
          setTotalPages(Math.ceil(total / commentsPerPage)); // Perbaiki perhitungan total halaman
        } else {
          setComments([]);
          setTotalPages(0);
        }
      } catch (error) {
        console.error('Gagal mengambil komentar:', error);
        setError('Gagal mengambil komentar.');
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [artikelId, newComment, currentPage]); // Render ulang saat komentar atau halaman berubah

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  if (loading) return <Spinner size="lg" className="mx-auto mt-5" />;
  if (error) return <div className="text-red-500 text-center mt-5">{error}</div>;

  return (
    <div className="mt-8 mx-auto max-w-lg">
      <h3 className="text-xl font-semibold mb-4">Komentar</h3>
      {comments.length === 0 ? (
        <p className="text-gray-500 text-center">Belum ada komentar untuk artikel ini.</p>
      ) : (
        <ul className="space-y-4">
          {comments.map((comment) => (
            <li key={comment._id} className="p-4 border rounded-md shadow-md">
              <p className="font-semibold">{comment.namaPengguna}</p>
              <p className="text-gray-600">{comment.isiKomentar}</p>
            </li>
          ))}
        </ul>
      )}

      {/* Paginasi */}
      <div className="flex justify-between items-center mt-6">
        <Button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 text-sm  bg-blue-700"
        >
          Previous
        </Button>
        <span>
          Halaman {currentPage} dari {totalPages || 1} {/* Tampilkan 1 jika totalPages NaN */}
        </span>
        <Button
          onClick={handleNextPage}
          disabled={currentPage === totalPages || totalPages === 0}
          className="px-4 py-2 text-sm bg-blue-700"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default CommentList;
