// import React from 'react'

function DescriptionContact() {
  return (
    <section id="home" className="relative py-16 bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 text-white animate-gradient-x">
    {/* Overlay for readability */}
    <div className="absolute inset-0 bg-black opacity-50"></div>

    {/* Content */}
    <div className="relative max-w-6xl mx-auto justify-center px-4 sm:px-6 lg:px-8">
      {/* Introduction */}
      <div className="text-center mb-8">
        {/* <h1 className="text-3xl font-bold mb-4">Yayasan Sirih Pinang Kebaikan</h1> */}
        <p className="text-xl p-3">
        Jika Anda ingin bertanya ataupun mengetahui tentang Penerbit Buku lebih lanjut, silakan email ke marketing yasipikan@gmail.com
        </p>
      </div>

      {/* Call to Action */}
      {/* <div className="flex justify-center mt-8">
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Daftar Sekarang
        </button>
      </div> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
                <h3 className="text-2xl font-semibold mb-4">Office Address</h3>
                <p className="text-lg mb-4">1234 Main Street, City, Country</p>
                <a href="mailto:info@example.com" className="text-blue-400 hover:underline">info@example.com</a>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
                <h3 className="text-2xl font-semibold mb-4">No. Handphone</h3>
                <p className="text-lg mb-2">085237555490</p>
                <p className="text-lg mb-2">085237555490</p>
                <a href="tel:+12345678900" className="text-blue-400 hover:underline">Call Us</a>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
                <h3 className="text-2xl font-semibold mb-4">Support</h3>
                <p className="text-lg mb-4">For support, please contact us at:</p>
                <a href="mailto:support@example.com" className="text-blue-400 hover:underline">support@example.com</a>
            </div>
        </div>
    </div>
  </section>
  )
}

export default DescriptionContact