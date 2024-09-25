// VisiMisi.js
import React from 'react';

function VisiMisi() {
  return (
    <div className="flex justify-center mt-10 mb-7">
      <div className="max-w-lg bg-gradient-to-r from-blue-400 to-blue-600 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 bg-white rounded-lg">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Visi SiPiKan</h2>
          <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
            Menjadi Lembaga Pelayanan Sosial di Indonesia yang Aktif Melakukan Pelayanan Cinta Kasih Tuhan kepada Sesama yang Membutuhkannya.
          </p>

          <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Misi SiPiKan</h2>
          <ol className="list-decimal ml-5 text-gray-700 dark:text-gray-400">
            <li className="mb-2">Melakukan Pengajaran dan Pendidikan Kemanusiaan kepada Sesama, terutama dari golongan ekonomi menengah ke bawah;</li>
            <li className="mb-2">Melakukan Pendampingan kepada Pelaku-pelaku Ekonomi Mikro atau Home Industri supaya mereka mandiri;</li>
            <li className="mb-2">Menghasilkan Karya Tulis yang bersifat Penyadaran Hukum yang bisa dipakai sebagai Pembelajaran Masyarakat.</li>
          </ol>

          
        </div>
      </div>
    </div>
  );
}

export default VisiMisi;
