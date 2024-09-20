import React from 'react';
import { Card } from 'flowbite-react'; // Assuming you're using Flowbite for card components
import aboutImg from '../../assets/ImgCover.jpg'; // Example image import
import whatWeDoImg from '../../assets/ImgCover.jpg';
import achievementsImg from '../../assets/ImgCover.jpg';
import joinUsImg from '../../assets/ImgCover.jpg';

function About() {
  return (
    <div className="bg-gradient-to-r from-blue-800 via-blue-500 to-purple-500 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-8">
          Tentang Yayasan Sirih Pinang Kebaikan (YaSiPiKan)
        </h1>

        {/* Apa itu Yayasan Sirih Pinang Kebaikan? */}
        <Card className="mb-8 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={aboutImg}
              alt="About Yayasan Sirih Pinang Kebaikan"
              className="md:w-1/2 w-full h-64 object-cover rounded-l-lg"
            />
            <div className="p-6">
              <h2 className="text-3xl font-semibold mb-4">Apa itu Yayasan Sirih Pinang Kebaikan?</h2>
              <p className="leading-relaxed text-lg text-gray-800">
                Yayasan Sirih Pinang Kebaikan, disingkat YaSiPiKan, adalah sebuah yayasan yang bergerak di bidang kemanusiaan, percetakan, pendidikan, dan religi. Yayasan ini bertujuan untuk membangun gereja dan negara dengan menebarkan kebaikan Allah melalui berbagai program yang ditawarkan.
              </p>
            </div>
          </div>
        </Card>

        {/* Apa yang Kami Buat? */}
        <Card className="mb-8 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={whatWeDoImg}
              alt="Apa Yang Kami Buat"
              className="md:w-1/2 w-full h-64 object-cover rounded-l-lg"
            />
            <div className="p-6">
              <h2 className="text-3xl font-semibold mb-4">Apa Yang Kami Buat?</h2>
              <ul className="list-disc list-inside text-lg space-y-2 text-gray-800">
                <li>Pembuatan ISBN dan Percetakan Buku</li>
                <li>Pemberdayaan Jemaat dan Ekonomi Jemaat</li>
                <li>Kuliah Umum dan Summer Course</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Apa yang Sudah Kami Buat? */}
        <Card className="mb-8 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={achievementsImg}
              alt="Apa Yang Sudah Kami Buat"
              className="md:w-1/2 w-full h-64 object-cover rounded-l-lg"
            />
            <div className="p-6">
              <h2 className="text-3xl font-semibold mb-4">Apa Yang Sudah Kami Buat?</h2>
              <ul className="list-disc list-inside text-lg space-y-2 text-gray-800">
                <li>Bekerja sama dengan Pendeta dan Penulis untuk menuangkan karya dan pemikiran dalam bentuk tulisan</li>
                <li>Bekerja sama dan membantu gereja-gereja di daerah 3T untuk meningkatkan SDM dan ekonomi jemaat</li>
                <li>Memberikan pemberdayaan berkelanjutan baik dalam bentuk materi maupun bantuan sosial</li>
                <li>Menyediakan Wi-Fi Orbit bagi jemaat di daerah sulit akses jaringan</li>
                <li>Pemberian materi dari para ahli di bidangnya masing-masing</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <Card className="mb-8 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={joinUsImg}
              alt="Mari Bergabung Bersama Kami"
              className="md:w-1/2 w-full h-64 object-cover rounded-l-lg"
            />
            <div className="p-6 text-center md:text-left">
              <h2 className="text-3xl font-semibold mb-4 text-white">Mari Bergabung Bersama Kami!</h2>
              <p className="text-lg mb-6">
                Bergabunglah dengan Yayasan Sirih Pinang Kebaikan untuk menebarkan kebaikan Allah dan membangun masa depan yang lebih baik.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg">
                Hubungi Kami
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default About;
