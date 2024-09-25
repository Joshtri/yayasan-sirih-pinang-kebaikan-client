import React from 'react';
import { Card } from 'flowbite-react'; // Assuming you're using Flowbite for card components
import aboutImg from '../../assets/ImgCover.jpg'; // Example image import
import joinUsImg from '../../assets/ImgCover.jpg';
import WhatWeDo from './WhatWeDo';
import Achievements from './Achievements';
import Pembina from './Pembina';
import Pengurus from './Pengurus';


// Sample images (you can replace these with actual images)


function About() {
  return (
    <div className="bg-gradient-to-r from-blue-800 via-blue-500 to-purple-500 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-8">
          Tentang Yayasan Sirih Pinang Kebaikan
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
              <h2 className="text-3xl font-semibold mb-4 text-black">Apa itu Yayasan Sirih Pinang Kebaikan?</h2>
              <p className="leading-relaxed text-lg text-gray-800">
                Yayasan Sirih Pinang Kebaikan, disingkat YaSiPiKan, adalah sebuah yayasan yang bergerak di bidang kemanusiaan, percetakan, pendidikan, dan religi. Yayasan ini bertujuan untuk membangun gereja dan negara dengan menebarkan kebaikan Allah melalui berbagai program yang ditawarkan.
              </p>
              
              <p className='leading-relaxed text-lg mt-4 text-gray-800'>
              Sirih Pinang Kebaikan merupakan nama yayasan yang dibentuk di Kupang – Ibukota Provinsi Nusa Tenggara Timur, <strong> tanggal 22 Desember 2023, sesuai tanggal terbitnya akta notaris </strong>. Dalam profil singkat ini sebutan bagi Yayasan Sirih Pinag Kebaikan akan diperpendek menjadi SiPiKan.
              </p>
            </div>
          </div>
        </Card>

        {/* Page Title */}
            {/* Apa yang Kami Buat? */}
        <h1 className="text-4xl font-bold text-center mb-8">
            Apa yang Kami Buat ?
        </h1>


        <WhatWeDo/>

        <h1 className="text-4xl font-bold text-center mb-8">
            Apa yang Sudah Kami Buat?
        </h1>
        {/* Apa yang Sudah Kami Buat? */}
        <Achievements/>


        <Pembina/>

        <Pengurus/>

        {/* Call to Action */}
        <Card className="mb-8 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={joinUsImg}
              alt="Mari Bergabung Bersama Kami"
              className="md:w-1/2 w-full h-64 object-cover rounded-l-lg"
            />
            <div className="p-6 text-center md:text-left text-black">
              <h2 className="text-3xl font-semibold mb-4 ">Mari Bergabung Bersama Kami!</h2>
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
