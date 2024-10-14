// src/components/CommentArticle.jsx
import { useState } from 'react';
import axios from 'axios';
import { Button } from 'flowbite-react';
import { toast } from 'react-toastify';


function CommentArticle({ artikelId, penulisId,onCommentAdded }) {
  const [namaPengguna, setNamaPengguna] = useState('');
  const [isiKomentar, setIsiKomentar] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/comment`, {
        namaPengguna,
        isiKomentar,
        artikelId,
        penulisId
      });

      setNamaPengguna('');
      setIsiKomentar('');
      onCommentAdded(response.data.data); // Berikan komentar baru ke parent komponen

      toast.success('Komentar berhasil ditambahkan!'); // Panggil Toastify di sini
    } catch (error) {
      console.error('Gagal menambahkan komentar:', error);
      setError('Terjadi kesalahan saat menambahkan komentar.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 mx-auto max-w-lg">
      <h3 className="text-xl font-semibold mb-4">Tambahkan Komentar</h3>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium" htmlFor="namaPengguna">
            Nama Pengguna
          </label>
          <input
            type="text"
            id="namaPengguna"
            className="w-full p-2 border rounded-md"
            value={namaPengguna}
            onChange={(e) => setNamaPengguna(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="isiKomentar">
            Isi Komentar
          </label>
          <textarea
            id="isiKomentar"
            className="w-full p-2 border rounded-md"
            rows="4"
            value={isiKomentar}
            onChange={(e) => setIsiKomentar(e.target.value)}
            required
          ></textarea>
        </div>
        <Button type="submit" className="w-full bg-blue-800" disabled={loading}>
          {loading ? 'Mengirim...' : 'Kirim Komentar'}
        </Button>
      </form>
    </div>
  );
}

export default CommentArticle;
