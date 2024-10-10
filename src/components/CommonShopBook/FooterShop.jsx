// import React from 'react';

const FooterShop = () => {
  return (
    <div className="p-10 bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <img src="https://placehold.co/50x50" alt="Deepublish Store Logo" className="mr-2" />
            <span className="text-orange-500 font-bold text-xl">YaSiPiKan store</span>
          </div>
          <p className="mb-4">YaSiPikan Store adalah toko buku online dengan berbagai pilihan buku kuliah berkualitas dan terlengkap.</p>
          <h2 className="text-orange-500 mb-2">Ikuti Kami</h2>
          <div className="flex space-x-2 mb-4">
            <i className="fab fa-facebook-f bg-gray-800 p-2 rounded-full"></i>
            <i className="fab fa-youtube bg-gray-800 p-2 rounded-full"></i>
            <i className="fab fa-twitter bg-gray-800 p-2 rounded-full"></i>
            <i className="fab fa-instagram bg-gray-800 p-2 rounded-full"></i>
          </div>
          <p className="mb-4">© 2024 All Right Reserved. Toko Buku Yayasan Sirih Pinang Kebaikan</p>
          <h2 className="text-orange-500 mb-2">Jam Pelayanan</h2>
          <p>Senin - Jumat pukul 08.00 - 17.00 WIB<br />(Pesan Sabtu/Minggu akan diproses Hari Senin)</p>
        </div>
        <div>
          <h2 className="text-orange-500 mb-2">Terbitkan Buku Anda</h2>
          <ul className="mb-4">
            <li>Menerbitkan Buku</li>
            <li>Instansi</li>
          </ul>
          <h2 className="text-orange-500 mb-2">Alamat</h2>
          <p className="mb-4">Jl. El Tari No. 23, Kel. Oebobo, Kec. Oebobo</p>
          <h2 className="text-orange-500 mb-2">Kontak Kami</h2>
          <ul className="mb-4">
            <li><i className="fab fa-whatsapp"></i> CS </li>
            {/* <li><i className="fab fa-whatsapp"></i> CS Pembelian Retail : 081-1286-3655 (WA)</li>
            <li><i className="fab fa-whatsapp"></i> CS Marketplace : 0811-2845-901 (WA)</li>
            <li><i className="fab fa-whatsapp"></i> CS Reseller 1 : 0858-7818-8344 (WA)</li>
            <li><i className="fab fa-whatsapp"></i> CS Reseller 2 : 081-1286-3654 (WA)</li>
            <li><i className="fab fa-whatsapp"></i> CS Pengadaan Buku 1: 0812-8630-4188 (WA)</li>
            <li><i className="fab fa-whatsapp"></i> CS Pengadaan Buku 2: 0811-2868-743 (WA)</li> */}
          </ul>
        </div>
        <div>
          <h2 className="text-orange-500 mb-2">Belanja</h2>
          <ul className="mb-4">
            <li>Testimoni</li>
            <li>Cara Belanja</li>
            <li>Cara Bayar</li>
            <li>Proses Pengiriman</li>
            <li>PROMO <i className="fas fa-bolt"></i></li>
          </ul>
          <h2 className="text-orange-500 mb-2">Tentang Kami</h2>
          <ul className="mb-4">
            <li>FAQ</li>
            <li>Karir</li>

          </ul>
          <h2 className="text-orange-500 mb-2">Pengiriman</h2>
          <div className="mb-4">
            <img src="https://placehold.co/100x50" alt="Wahana Logo" className="inline-block mr-2" />
            <img src="https://placehold.co/100x50" alt="JNE Logo" className="inline-block" />
          </div>
          <h2 className="text-orange-500 mb-2">Pembayaran</h2>
          <div>
            <img src="https://placehold.co/100x50" alt="BCA Logo" className="inline-block mr-2" />
            <img src="https://placehold.co/100x50" alt="Mandiri Logo" className="inline-block mr-2" />
            <img src="https://placehold.co/100x50" alt="BSI Logo" className="inline-block mr-2" />
            <img src="https://placehold.co/100x50" alt="BRI Logo" className="inline-block mr-2" />
            <img src="https://placehold.co/100x50" alt="BNI Logo" className="inline-block mr-2" />
            <img src="https://placehold.co/100x50" alt="QRIS Logo" className="inline-block mr-2" />
            <img src="https://placehold.co/100x50" alt="Dana Logo" className="inline-block mr-2" />
            <img src="https://placehold.co/100x50" alt="LinkAja Logo" className="inline-block mr-2" />
            <img src="https://placehold.co/100x50" alt="OVO Logo" className="inline-block" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default FooterShop;