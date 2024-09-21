import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


import img1 from '../../assets/homeImg/5599ab6ac6bbea99d4469756b7aeabbc.jpg'
import img2 from '../../assets/homeImg/7d4ee2e0218165bb6c6aed083cb42ea8.jpg'
import img3 from '../../assets/homeImg/cda8a82ffc3acd1300086dd7aef4fd74.jpg'
import img4 from '../../assets/homeImg/e00203c0.jpg'
// Array of background images
const backgroundImages = [
  `url(${img1})`,
  `url(${img2})`,
  `url(${img3})`,
  `url(${img4})`,
];

function HomeSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section
      id="home"
      className="relative py-16 text-white animate-gradient-x"
      style={{
        backgroundImage: backgroundImages[currentImageIndex], // Dynamically set background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out", // Smooth fade effect
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto justify-center px-4 sm:px-6 lg:px-8 pb-16 pt-12">
        {/* Introduction */}
        <div className="text-center mb-10 mt-3">
          <h1 className="text-3xl font-bold mb-4">Yayasan Sirih Pinang Kebaikan</h1>
          <p className="text-xl p-3">
            Selamat datang di Yayasan Sirih Pinang Kebaikan. Kami berkomitmen untuk membantu penulis dan penerbit dalam proses penerbitan buku serta pembuatan ISBN yang resmi.
            Bersama kami, karya Anda akan terwujud dan tersebar luas untuk membawa kebaikan dan pengetahuan bagi semua.
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center mt-8">
          <Link
            to='/daftar-penulis-buku'
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Daftar Sekarang
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
