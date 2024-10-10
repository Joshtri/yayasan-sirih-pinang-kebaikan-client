import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs';

const DetailBookProduct = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const url = `${import.meta.env.VITE_BASE_URL}/api/v1/books/${id}`;
        const response = await axios.get(url);
        setBook(response.data.data);
      } catch (err) {
        console.log(err);
        setError('Terjadi kesalahan saat mengambil data buku.');
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  // Format harga ke dalam bentuk rupiah
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 2,
    }).format(price);
  };

  const breadcrumbItems = [
    { label: 'Toko Buku YaSiPiKan', link: '/toko-buku' },
    { label: book?.judul || 'Detail Buku' },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-pulse w-full max-w-sm bg-gradient-to-r from-gray-600 to-gray-900 text-white shadow-lg rounded-lg p-4">
          <div className="h-48 bg-gray-300 rounded mb-3"></div>
          <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
          <div className="flex space-x-2">
            <div className="h-4 w-4 bg-gray-300 rounded"></div>
            <div className="h-4 w-4 bg-gray-300 rounded"></div>
            <div className="h-4 w-4 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4 pb-20">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          {imageLoading && (
            <div className="animate-pulse w-full max-w-sm bg-gray-300 h-64 rounded-lg"></div>
          )}
          <img
            src={book.coverUrl || 'https://placehold.co/300x400'}
            alt={`Cover of ${book.judul}`}
            className={`w-full max-w-sm rounded-lg shadow-md transition-opacity duration-500 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setImageLoading(false)}
          />
        </div>
        <div className="w-full md:w-1/2 pl-4 mt-4 md:mt-0">
          <h1 className="text-xl font-bold">{book.judul}</h1>
          <p className="text-red-500 text-2xl font-bold mt-2">{formatPrice(book.harga)}</p>
          <p className="text-sm text-gray-600 mt-2">
            Diskon Rp10K dengan kode <span className="font-bold">{book.kodeDiskon || 'Tidak ada'}</span>
          </p>
          <table className="table-auto mt-4 w-full text-sm text-gray-600">
            <tbody>
              <tr>
                <td className="border px-4 py-2">Pengarang</td>
                <td className="border px-4 py-2">{book.pengarang}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Institusi</td>
                <td className="border px-4 py-2">{book.institusi}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Kategori</td>
                <td className="border px-4 py-2">{book.kategori}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Bidang Ilmu</td>
                <td className="border px-4 py-2">{book.bidangIlmu}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">ISBN</td>
                <td className="border px-4 py-2">{book.isbn}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Ukuran</td>
                <td className="border px-4 py-2">{book.ukuran}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Halaman</td>
                <td className="border px-4 py-2">{book.halaman}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Ketersediaan</td>
                <td className="border px-4 py-2">{book.ketersediaan}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Tahun</td>
                <td className="border px-4 py-2">{book.tahun}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Card Deskripsi Buku */}
      <div className="bg-white mt-8 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-2">Deskripsi Buku</h2>
        <p className="text-gray-700 text-xl tracking-wide text-justify">
          {book.deskripsi_singkat || 'Deskripsi belum tersedia untuk buku ini.'}
        </p>
      </div>

      {/* Card Deskripsi Buku */}
      <div className="bg-white mt-8 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-2">Sinopsis Buku</h2>
        <p className="text-gray-700 text-xl tracking-wide text-justify">
          {book.sinopsis_singkat || 'Deskripsi belum tersedia untuk buku ini.'}
        </p>
      </div>
    </div>
  );
};

export default DetailBookProduct;
