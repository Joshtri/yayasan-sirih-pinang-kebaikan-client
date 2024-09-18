import React from 'react';
import Layout from '../Layout';

function Home() {
  return (
    <Layout>
      {/* Home Section with animated gradient */}
      <section id="home" className="relative py-16 bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 text-white animate-gradient-x">
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto justify-center px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Yayasan Sirih Pinang Kebaikan</h1>
            <p className="text-xl p-3">
              Selamat datang di Yayasan Sirih Pinang Kebaikan. Kami berkomitmen untuk membantu penulis dan penerbit dalam proses penerbitan buku serta pembuatan ISBN yang resmi.
              Bersama kami, karya Anda akan terwujud dan tersebar luas untuk membawa kebaikan dan pengetahuan bagi semua.
            </p>
          </div>

          {/* Call to Action */}
          <div className="flex justify-center mt-8">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100 text-black">
        <div className="max-w-6xl mx-auto justify-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Tentang Yayasan Sirih Pinang Kebaikan</h2>
          <p className="text-lg mb-4">
            Yayasan Sirih Pinang Kebaikan berdiri dengan tujuan untuk mendukung literasi dan penyebaran pengetahuan di Indonesia. Kami percaya bahwa setiap penulis memiliki suara unik yang layak disebarkan ke seluruh penjuru negeri.
            Dengan layanan penerbitan dan percetakan buku kami, penulis tidak hanya mendapatkan ISBN resmi, tetapi juga pendampingan hingga bukunya siap disebarkan.
          </p>
          <p className="text-lg">
            Kami telah bekerja sama dengan berbagai penulis dan penerbit untuk menghasilkan karya-karya yang bermutu tinggi dan berpengaruh. Melalui kerja sama dengan kami, Anda akan mendapatkan akses ke jaringan distribusi yang luas dan layanan percetakan berkualitas.
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
