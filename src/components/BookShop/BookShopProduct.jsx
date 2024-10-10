import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Function untuk menampilkan kartu produk
// Function untuk menampilkan kartu produk
function ProductCard({ id, title, price, imageUrl }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="aspect-w-1 aspect-h-1 mb-4">
        <img
          src={imageUrl}
          alt={`Cover of ${title}`}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="text-purple-600 font-bold mt-2">{price}</p>
      <Link to={`/produk-buku/${id}`} className="text-blue-500 underline mt-2 block">
        Lihat Detail
      </Link>
    </div>
  );
}



// Function untuk menampilkan skeleton loading
function SkeletonCard() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md animate-pulse">
      <div className="w-full h-48 bg-gray-300 rounded mb-4"></div>
      <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
    </div>
  );
}

function BookShopProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = `${import.meta.env.VITE_BASE_URL}/api/v1/books`;
        const response = await axios.get(url);
        setProducts(response.data.data); // Assuming the API returns data in 'data' key
      } catch (err) {
        setError('Terjadi kesalahan saat mengambil data produk.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4 pb-20 pt-20">
      {/* Section Atas dengan Card Besar */}
      <div className="bg-purple-700 text-white text-center p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold">YaSiPikan Store</h1>
        <p className="mt-2">Toko buku yang menyediakan referensi buku kuliah di Indonesia.</p>
        <button className="mt-4 bg-white text-purple-700 font-semibold py-2 px-4 rounded-full">
          Belanja sekarang
        </button>
      </div>

      {/* Bagian Produk Terlaris */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <h2 className="text-xl font-bold text-purple-700">BUKU TERBARU</h2>

        </div>

        {/* Grid Produk atau Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {loading
            ? // Tampilkan skeleton card saat loading
              Array.from({ length: 6 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            : // Tampilkan data produk setelah selesai loading
              products.map((product) => (
                <ProductCard
                  key={product._id}
                  title={product.judul} // Assuming the book has a 'judul' field
                  price={`Rp ${product.harga}`} // Assuming the book has a 'harga' field
                  id={product._id}
                  imageUrl={product.coverUrl || 'https://placehold.co/150x200'} // Default image if no coverUrl is provided
                />
              ))}
        </div>
      </div>

      {/* Tombol Chat WhatsApp */}
      <div className="fixed bottom-4 right-4">
        <button className="bg-purple-600 text-white p-4 rounded-full shadow-lg">
          <i className="fab fa-whatsapp text-2xl"></i>
        </button>
      </div>
    </div>
  );
}

export default BookShopProduct;
