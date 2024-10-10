import React from 'react';

const DetailBookProduct = () => {
  return (
    <div className="container mx-auto p-4">
      <nav className="text-sm text-gray-600 mb-4">
        <a href="#" className="text-red-500">Beranda</a> / 
        <a href="#" className="text-red-500"> Buku Referensi</a> / 
        <a href="#" className="text-red-500"> Buku Belajar Microsoft Office (Word, Excel, Powerpoint) 2019 Dengan Mudah Dan Menyenangkan</a>
      </nav>
      <div className="flex">
        <div className="w-1/2">
          <img 
            src="https://placehold.co/400x600" 
            alt="Cover of the book Belajar Microsoft Office (Word, Excel, Powerpoint) 2019" 
            className="w-full"
          />
        </div>
        <div className="w-1/2 pl-4">
          <h1 className="text-xl font-bold">Buku Belajar Microsoft Office (Word, Excel, Powerpoint) 2019 Dengan Mudah Dan Menyenangkan</h1>
          <p className="text-red-500 text-2xl font-bold mt-2">Rp 108.000</p>
          <p className="text-sm text-gray-600 mt-2">Diskon Rp10K dengan kode <span className="font-bold">SUKIRMAN</span>, Cek di <a href="#" className="text-red-500">Promo</a></p>
          <div className="mt-4">
            <button className="bg-red-500 text-white px-4 py-2 rounded">SPEKIFIKASI BUKU</button>
            <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded ml-2">PENGIRIMAN</button>
            <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded ml-2">PANDUAN BELANJA</button>
          </div>
          <table className="table-auto mt-4 w-full text-sm text-gray-600">
            <tbody>
              <tr>
                <td className="border px-4 py-2">Pengarang</td>
                <td className="border px-4 py-2"><a href="#" className="text-blue-500">Johnie Rogers Swanda Pasaribu, S.Kom., M.Kom.</a></td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Institusi</td>
                <td className="border px-4 py-2"></td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Kategori</td>
                <td className="border px-4 py-2"><a href="#" className="text-blue-500">Buku Referensi</a></td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Bidang Ilmu</td>
                <td className="border px-4 py-2"><a href="#" className="text-blue-500">Sains dan Teknologi</a></td>
              </tr>
              <tr>
                <td className="border px-4 py-2">ISBN</td>
                <td className="border px-4 py-2">978-623-02-0180-6</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Ukuran</td>
                <td className="border px-4 py-2">17.5×25 cm</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Halaman</td>
                <td className="border px-4 py-2">xviii, 182 hlm</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Harga</td>
                <td className="border px-4 py-2">Rp 108.000</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Ketersediaan</td>
                <td className="border px-4 py-2">Pesan Dulu</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Tahun</td>
                <td className="border px-4 py-2">2019</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4">
            <div className="flex items-center mb-2">
              <input type="number" value="1" className="border px-2 py-1 w-16"/>
              <button className="bg-orange-500 text-white px-4 py-2 rounded ml-2 flex items-center">
                <i className="fas fa-shopping-cart mr-2"></i> Masukkan Keranjang
              </button>
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded w-full flex items-center justify-center mb-2">
              <i className="fab fa-whatsapp mr-2"></i> Pesan Via WA
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full flex items-center justify-center">
              <i className="fas fa-book mr-2"></i> Beli di Google Book
            </button>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center">
          <i className="fab fa-whatsapp mr-2"></i> Chat
        </button>
      </div>


       <div className="bg-gray-100 p-4">
        <div className="max-w-4xl mx-auto bg-white p-6 shadow-md">
            {/* Bagian Header untuk Shares dan Icons */}
            <div className="flex justify-between items-center mb-4">
            <div className="text-2xl font-bold">
                8 <span className="text-gray-500">Shares</span>
            </div>
            <div className="flex space-x-2">
                <i className="fab fa-facebook-f text-blue-600"></i>
                <i className="fab fa-twitter text-blue-400"></i>
                <i className="fab fa-xing text-green-600"></i>
                <i className="fab fa-linkedin-in text-blue-700"></i>
                <i className="fab fa-whatsapp text-green-500"></i>
                <i className="fas fa-ellipsis-h text-gray-500"></i>
            </div>
            </div>

            {/* Tab untuk Deskripsi, Informasi Tambahan, Ulasan */}
            <div className="border-b border-gray-300 mb-4">
            <ul className="flex space-x-4">
                <li className="tab-active pb-2">Deskripsi</li>
                <li className="pb-2">Informasi Tambahan</li>
                <li className="pb-2">Ulasan (0)</li>
            </ul>
            </div>

            {/* Konten Deskripsi Buku */}
            <div>
            <h2 className="text-xl font-bold mb-2">Deskripsi</h2>
            <div className="border p-4 bg-gray-50">
                <h3 className="text-lg font-bold mb-2">
                Sinopsis Buku Belajar Microsoft Office 2019 Dengan Mudah Dan Menyenangkan
                </h3>
                <p className="font-bold mb-2">
                Buku Belajar Microsoft Office 2019 Dengan Mudah Dan Menyenangkan
                </p>
                <p className="mb-2">
                Microsoft Office yang antara terdiri dari aplikasi Word, Excel dan Powerpoint merupakan aplikasi pengolah kata, aplikasi pengolah angka dan presentasi yang sangat dibutuhkan manusia dan yang paling banyak digunakan pengguna komputer saat ini, Aplikasi Ms. Office (Word, Excel dan Powerpoint) saat ini dapat mempermudah pekerjaan kantoran ataupun segala pekerjaan yang erat kaitannya dengan kegiatan administrasi lainnya dan aplikasi ini sangat dibutuhkan berbagai kalangan, antara lain siswa SMP, SMA/SMK, mahasiswa, karyawan, pegawai maupun berbagai bidang profesi lainnya.
                </p>
                <p className="mb-2">
                Buku ini terdiri dari 17 Bab. Pada Bab pertama hingga ketiga dipaparkan mengenai pengenalan microsoft word 2019, editing dokumen, pengaturan tabulasi, kolom dan header footer, simbol, watermark, text box dan page number serta tabel. Pada Bab keenam hingga kesepuluh dipaparkan mengenai gambar, diagram dan shape, mail merge dan fasilitas lain; pengenalan microsoft excel 2019; operator aritmatika dan lembar kerja dan validasi data dan pengolahan file.
                </p>
                <p className="mb-2">
                Buku ini dibuat untuk memudahkan pembaca agar lebih cepat menguasai penggunaan aplikasi Microsoft Office dan buku ini bisa digunakan sebagai referensi bagi seluruh pengguna komputer baik pemula, siswa, mahasiswa, karyawan, pegawai di berbagai instansi pemerintah maupun serta swasta dan sampai ke level menengah karena setiap materi disampaikan secara detail disertai dengan contoh.
                </p>
                <p className="italic mb-2">
                Buku Belajar Microsoft Office 2019 Dengan Mudah Dan Menyenangkan ini diterbitkan oleh Penerbit Buku Pendidikan Deepublish.
                </p>
                <p className="mb-2">
                Lihat juga kategori buku-buku yang lain di Toko Buku Online Deepublish:
                </p>
                <div className="flex flex-wrap space-x-2">
                <a href="#" className="text-blue-600 underline">Buku Novel</a>
                <a href="#" className="text-blue-600 underline">Buku Matematika</a>
                <a href="#" className="text-blue-600 underline">Buku Resep</a>
                <a href="#" className="text-blue-600 underline">Buku Psikologi</a>
                <a href="#" className="text-blue-600 underline">Buku Agama Islam</a>
                <a href="#" className="text-blue-600 underline">Buku Kedokteran</a>
                <a href="#" className="text-blue-600 underline">Buku Ekonomi</a>
                <a href="#" className="text-blue-600 underline">Buku Peternakan</a>
                <a href="#" className="text-blue-600 underline">Buku Sosial Politik</a>
                <a href="#" className="text-blue-600 underline">Buku Kebidanan</a>
                </div>
            </div>
            </div>

            {/* Tombol WhatsApp untuk Chat */}
            <div className="fixed bottom-4 right-4">
            <button className="bg-green-500 text-white p-3 rounded-full shadow-lg">
                <i className="fab fa-whatsapp"></i> Chat
            </button>
            </div>
        </div>
        </div>
    </div>
  );
};

export default DetailBookProduct;
