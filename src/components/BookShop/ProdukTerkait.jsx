// import React from 'react';

const ProdukTerkait = () => {
  return (
    <div className="p-8">
      {/* Tombol Pilihan */}
      <div className="flex space-x-4 mb-4">
        <button className="bg-red-500 text-white px-4 py-2 rounded">PRODUK TERKAIT</button>
        <button className="bg-gray-200 text-black px-4 py-2 rounded">BUKU BEST SELLER⚡</button>
      </div>

      {/* Judul */}
      <h2 className="text-2xl font-bold mb-4">Produk Terkait</h2>

      {/* Daftar Produk Terkait */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {/* Produk 1 */}
        <div className="text-center">
          <img
            src="https://placehold.co/150x200"
            alt="Buku Konsep Pendidikan Anak Usia Dini Menurut Psikologi Islam"
            className="mb-2"
          />
          <p className="font-semibold">
            Buku Konsep Pendidikan Anak Usia Dini Menurut Psikologi Islam
          </p>
          <p className="text-red-500">Rp 44.500</p>
        </div>

        {/* Produk 2 */}
        <div className="text-center">
          <img
            src="https://placehold.co/150x200"
            alt="Buku Ngopi (Ngobrol PAUD Indonesia) #1 Edisi Guru"
            className="mb-2"
          />
          <p className="font-semibold">
            Buku Ngopi (Ngobrol PAUD Indonesia) #1 Edisi Guru
          </p>
          <p className="text-red-500">Rp 114.000</p>
        </div>

        {/* Produk 3 */}
        <div className="text-center">
          <img
            src="https://placehold.co/150x200"
            alt="Buku Regulasi dan Keekonomian Energi"
            className="mb-2"
          />
          <p className="font-semibold">Buku Regulasi dan Keekonomian Energi</p>
          <p className="text-red-500">Rp 109.000</p>
        </div>

        {/* Produk 4 */}
        <div className="text-center">
          <img
            src="https://placehold.co/150x200"
            alt="Buku Model Pembelajaran Praktik Berbasis Proyek Kewirausahaan"
            className="mb-2"
          />
          <p className="font-semibold">
            Buku Model Pembelajaran Praktik Berbasis Proyek Kewirausahaan
          </p>
          <p className="text-red-500">Rp 109.000</p>
        </div>

        {/* Produk 5 */}
        <div className="text-center">
          <img
            src="https://placehold.co/150x200"
            alt="Buku Kepercayaan Diri Bidan Dalam Deteksi Dini Bayi Baru Lahir"
            className="mb-2"
          />
          <p className="font-semibold">
            Buku Kepercayaan Diri Bidan Dalam Deteksi Dini Bayi Baru Lahir
          </p>
          <p className="text-red-500">Rp 67.000</p>
        </div>

        {/* Produk 6 */}
        <div className="text-center">
          <img
            src="https://placehold.co/150x200"
            alt="Buku Vertebrata Laut"
            className="mb-2"
          />
          <p className="font-semibold">Buku Vertebrata Laut</p>
          <p className="text-red-500">Rp 81.000</p>
        </div>

        {/* Produk 7 */}
        <div className="text-center">
          <img
            src="https://placehold.co/150x200"
            alt="Buku Fisika Pengelasan"
            className="mb-2"
          />
          <p className="font-semibold">Buku Fisika Pengelasan</p>
          <p className="text-red-500">Rp 189.000</p>
        </div>

        {/* Produk 8 */}
        <div className="text-center">
          <img
            src="https://placehold.co/150x200"
            alt="Hukum dan Psikiatri"
            className="mb-2"
          />
          <p className="font-semibold">Hukum dan Psikiatri</p>
          <p className="text-red-500">Rp 93.500</p>
        </div>

        {/* Produk 9 */}
        <div className="text-center">
          <img
            src="https://placehold.co/150x200"
            alt="Buku Keamanan Pangan"
            className="mb-2"
          />
          <p className="font-semibold">Buku Keamanan Pangan</p>
          <p className="text-red-500">Rp 88.000</p>
        </div>

        {/* Produk 10 */}
        <div className="text-center">
          <img
            src="https://placehold.co/150x200"
            alt="Buku Basis Data Dasar: Untuk Mahasiswa Ilmu Komputer"
            className="mb-2"
          />
          <p className="font-semibold">
            Buku Basis Data Dasar: Untuk Mahasiswa Ilmu Komputer
          </p>
          <p className="text-red-500">Rp 91.000</p>
        </div>

        {/* Produk 11 */}
        <div className="text-center">
          <img
            src="https://placehold.co/150x200"
            alt="Buku Business Passion Kisah Sukses Wirausahawan UKM Kuliner Medan Bertahan Hingga 10"
            className="mb-2"
          />
          <p className="font-semibold">
            Buku Business Passion Kisah Sukses Wirausahawan UKM Kuliner Medan Bertahan Hingga 10
          </p>
          <p className="text-red-500">Rp 91.000</p>
        </div>

        {/* Produk 12 */}
        <div className="text-center">
          <img
            src="https://placehold.co/150x200"
            alt="Buku Kajian Kesalahan Terjemahan Teks Berbahasa Indonesia Ke Dalam Bahasa Arab"
            className="mb-2"
          />
          <p className="font-semibold">
            Buku Kajian Kesalahan Terjemahan Teks Berbahasa Indonesia Ke Dalam Bahasa Arab
          </p>
          <p className="text-red-500">Rp 91.000</p>
        </div>
      </div>
    </div>
  );
};

export default ProdukTerkait;
