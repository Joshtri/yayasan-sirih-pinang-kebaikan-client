import React from 'react';

// Daftar produk
const products = [
  {
    id: 1,
    title: 'Buku Belajar Microsoft Office 2019 (Word, Excel, P...)',
    price: 'Rp 108.000',
    imageUrl: 'https://placehold.co/150x200',
  },
  {
    id: 2,
    title: 'Buku Balanced Scorecard Teori Dan Aplikasi',
    price: 'Rp 99.000',
    imageUrl: 'https://placehold.co/150x200',
  },
  {
    id: 3,
    title: 'Buku Edukasi Gizi Remaja',
    price: 'Rp 94.000',
    imageUrl: 'https://placehold.co/150x200',
  },
  {
    id: 4,
    title: 'Buku Dasar-Dasar Teknik Informatika',
    price: 'Rp 86.000',
    imageUrl: 'https://placehold.co/150x200',
  },
  {
    id: 5,
    title: 'Buku Paket Lengkap Menguasai Animasi 2D',
    price: 'Rp 80.000',
    imageUrl: 'https://placehold.co/150x200',
  },
  {
    id: 6,
    title: 'Buku Gizi Dalam Kesehatan Reproduksi',
    price: 'Rp 80.000',
    imageUrl: 'https://placehold.co/150x200',
  },
];

// Function untuk menampilkan kartu produk
function ProductCard({ title, price, imageUrl }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={imageUrl}
        alt={`Cover of ${title}`}
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
      <span className="bg-purple-200 text-purple-600 text-xs font-semibold py-1 px-2 rounded-full inline-block mb-2">
        Best Seller
      </span>
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="text-purple-600 font-bold mt-2">{price}</p>
    </div>
  );
}

function BookShopProduct() {
  return (
    <div className="container mx-auto p-4">
      {/* Section Atas dengan Card Besar */}
      <div className="bg-purple-700 text-white text-center p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold">YaSiPikan Store</h1>
        <p className="mt-2">Toko buku yang menyediakan referensi buku kuliah di Indonesia.</p>
        <button className="mt-4 bg-white text-purple-700 font-semibold py-2 px-4 rounded-full">Belanja sekarang</button>
      </div>

      {/* Bagian Produk Terlaris */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <h2 className="text-xl font-bold text-purple-700">PALING LARIS</h2>
          <span className="ml-2 bg-purple-600 text-white text-xs font-semibold py-1 px-2 rounded">BEST SELLER</span>
        </div>
        <p className="mb-4">
          Belanja dengan kode <span className="font-bold">"SUKIRMAN"</span> dan
          dapatkan gratis ongkir s/d Rp10.000
        </p>

        {/* Grid Produk */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
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
