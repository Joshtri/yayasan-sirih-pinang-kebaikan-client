// src/FileUploadForm.js
import { useState } from 'react';
import axios from 'axios';
import { Card } from 'flowbite-react';
import { FaEnvelope, FaPrint, FaUniversity, FaUser } from 'react-icons/fa';
import { FaSquarePhone } from 'react-icons/fa6';
import { MdOutlineWork } from 'react-icons/md';
import { GiWhiteBook } from 'react-icons/gi';
import { SiPowerpages } from 'react-icons/si';

const FileUploadForm = () => {
    const [file, setFile] = useState(null);
    const [namaPenulis, setNamaPenulis] = useState('');
    const [namaDepan, setNamaDepan] = useState('');
    const [namaBelakang, setNamaBelakang] = useState('');
    const [gelarDepan, setGelarDepan] = useState('');
    const [gelarBelakang, setGelarBelakang]= useState('');
    const [nomorTelepon, setNomorTelepon] = useState('');
    const [email, setEmail] = useState('');
    const [usia, setUsia] = useState('');
    const [jenisKelamin, setJenisKelamin] = useState('');
    const [institusi, setInstitusi] = useState('');
    const [pekerjaan, setPekerjaan] = useState('');
    const [pekerjaanLain, setpekerjaanLain] = useState('');
    const [alamat, setAlamat] = useState('');
    const [layananTerpilih, setLayananTerpilih] = useState('');
    const [judulBuku, setJudulBuku] = useState('');
    const [ukuranBuku, setUkuranBuku] = useState('');
    const [jumlahHalaman, setJumlahHalaman] = useState('');
    const [jumlahCetak, setJumlahCetak]= useState('');
    const [pernahDiterbitkan, setPernahDiterbitkan]= useState('');
    const [komunikasiDenganKonsultan, setKomunikasiDenganKonsultan] = useState('');
    const [jenisBuku, setJenisBuku] = useState('');
    const [kesiapanNaskah, setKesiapanNaskah] = useState('');

    // const [judulBuku,setJudulBuku]= useState('');
    

    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile && selectedFile.type === 'application/pdf') {
            setFile(selectedFile);
            setError(null);
        } else {
            setError('Please upload a valid PDF file.');
            setFile(null);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!file) {
            setError('Please select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('fileBuku', file); // 'fileBuku' should match the multer field name
        // formData.append('judulBuku', jud ulBuku);
        formData.append('namaDepan', namaDepan);
        formData.append('namaBelakang', namaBelakang);
        formData.append('gelarDepan', gelarDepan);
        formData.append('gelarBelakang', gelarBelakang);
        formData.append('jenisKelamin', jenisKelamin);
        formData.append('nomorTelepon', nomorTelepon);
        formData.append('email', email);
        formData.append('usia', usia);
        formData.append('institusi', institusi);
        formData.append('pekerjaan', pekerjaan);
        formData.append('pekerjaanLain', pekerjaanLain);
        formData.append('alamat', alamat);
        formData.append('layananTerpilih', layananTerpilih);
        formData.append('judulBuku', judulBuku);
        formData.append('ukuranBuku', ukuranBuku);
        formData.append('jumlahHalaman', jumlahHalaman);
        formData.append('jumlahCetak', jumlahCetak);
        formData.append('pernahDiterbitkan', pernahDiterbitkan);
        formData.append('komunikasiDenganKonsultan', komunikasiDenganKonsultan);
        formData.append('jenisBuku', jenisBuku);
        formData.append('kesiapanNaskah', kesiapanNaskah);

        try {
            const response = await axios.post('http://localhost:5000/api/v1/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setSuccessMessage(response.data.message);
            setFile(null);
            setJudulBuku(''); // Reset the title input
            setNamaPenulis(''); // Reset the author input
        } catch (error) {
            setError('Error uploading file: ' + error.response?.data || 'Internal Server Error');
        }
    };

    return (
      <div className="flex justify-center items-center pt-10 pb-10 min-h-screen bg-gray-100">
      <Card className="w-full max-w-2xl p-6 shadow-lg">
        <h1 className="text-2xl font-bold mb-2 text-center">FORMULIR DAFTAR MENJADI PENULIS</h1>

        {/* <div className="p-10"> */}
            {/* <h1 className="text-3xl font-bold mb-4">Upload File Book</h1> */}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">


                <div className='flex flex-col'>
                    <label className="mb-1 flex items-center">
                      <FaUser className="mr-2 text-blue-800" /> Nama Depan
                    </label>
                    <input 
                      type="text" 
                      placeholder="Nama Depan" 
                      value={namaDepan}
                      onChange={(e) => setNamaDepan(e.target.value)}
                      className="border rounded p-2 mb-2"
                      required
                    />
                </div>

                <div className='flex flex-col'>
                    <label className="mb-1 flex items-center">
                      <FaUser className="mr-2 text-blue-800" /> Nama Belakang
                    </label>
                    <input 
                      type="text" 
                      placeholder="Nama Depan" 
                      value={namaBelakang}
                      onChange={(e) => setNamaBelakang(e.target.value)}
                      className="border rounded p-2 mb-2"
                      required
                    />
                </div>


                <div className='flex flex-col'>
                    <label className="mb-1 flex items-center">
                      <FaUser className="mr-2 text-blue-800" /> Gelar Depan
                    </label>
                    <input 
                      type="text" 
                      placeholder="Masukkan Gelar Depan jika ada" 
                      value={gelarDepan}
                      onChange={(e) => setGelarDepan(e.target.value)}
                      className="border rounded p-2 mb-2"
                      
                    />
                </div>
                <div className='flex flex-col'>
                    <label className="mb-1 flex items-center">
                      <FaUser className="mr-2 text-blue-800" /> Gelar Belakang
                    </label>
                    <input 
                      type="text" 
                      placeholder="Masukkan Gelar Belakang jika ada" 
                      value={gelarBelakang}
                      onChange={(e) => setGelarBelakang(e.target.value)}
                      className="border rounded p-2 mb-2"
                      
                    />
                </div>

                <div className='flex flex-col'>
                  <label className="mb-1 flex items-center">
                    <FaUser className="mr-2 text-blue-800" /> Jenis Kelamin
                  </label>
                  <select 
                    value={jenisKelamin} 
                    onChange={(e) => setJenisKelamin(e.target.value)}
                    className="border rounded p-2 mb-2"
                    required
                  >
                    <option value="" disabled>Pilih Jenis Kelamin</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div className='flex flex-col'>
                    <label className="mb-1 flex items-center">
                      <FaSquarePhone   className="mr-2 text-blue-800" /> No Telepon
                    </label>
                    <input 
                      type="text" 
                      placeholder="Nomor Telepon" 
                      value={nomorTelepon}
                      onChange={(e) => setNomorTelepon(e.target.value)}
                      className="border rounded p-2 mb-2"
                      required
                    />
                </div>
                <div className='flex flex-col'>
                    <label className="mb-1 flex items-center">
                    <FaEnvelope className="mr-2 text-blue-800" /> Email
                    </label>
                    <input 
                      type="email" 
                      placeholder="E-Mail" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border rounded p-2 mb-2"
                      required
                    />
                </div>

                <div className='flex flex-col'>
                  <label className="mb-1 flex items-center">
                    <FaUser className="mr-2 text-blue-800" /> Usia
                  </label>
                  <select
                    value={usia}
                    onChange={(e) => setUsia(e.target.value)}
                    className="border rounded p-2 mb-2"
                    required
                  >
                    <option value="" disabled>Pilih Salah Satu</option>
                    <option value="18-24">18–24</option>
                    <option value="25-34">25–34</option>
                    <option value="35-44">35–44</option>
                    <option value="45-54">45–54</option>
                    <option value="55-64">55–64</option>
                    <option value="65+">65+</option>
                  </select>
                </div>


               
                <div className='flex flex-col'>
                    <label className="mb-1 flex items-center">
                      <FaUniversity className="mr-2 text-blue-800" /> Institusi
                    </label>
                    <input 
                      type="text" 
                      placeholder="Institusi" 
                      value={institusi}
                      onChange={(e) => setInstitusi(e.target.value)}
                      className="border rounded p-2 mb-2"
                      required
                    />
                </div>
                <div className='flex flex-col'>
                    <label className="mb-1 flex items-center">
                      <FaUser className="mr-2 text-blue-800" /> Alamat
                    </label>
                    <input 
                      type="text" 
                      placeholder="Alamat" 
                      value={alamat}
                      onChange={(e) => setAlamat(e.target.value)}
                      className="border rounded p-2 mb-2"
                      required
                    />
                </div>



                <div className='flex flex-col'>
                  <label className="mb-1 flex items-center">
                    <MdOutlineWork className="mr-2 text-blue-800" /> Pekerjaan
                  </label>
                  <select
                    value={pekerjaan}
                    onChange={(e) => setPekerjaan(e.target.value)}
                    className="border rounded p-2 mb-2"
                    required
                  >
                    <option value="" disabled>Pilih Salah Satu</option>
                    <option value="Dosen">Dosen</option>
                    <option value="Guru">Guru</option>
                    <option value="Wirausaha">Wirausaha</option>
                    <option value="Pengajar">Pengajar</option>
                    <option value="Mahasiswa S2/S3">Mahasiswa S2/S3</option>
                    <option value="PNS">PNS</option>
                    <option value="Profesi Hukum">Profesi Hukum</option>
                    <option value="Perawat">Perawat</option>
                    <option value="Dokter Ahli">Dokter Ahli</option>
                    <option value="Pejabat">Pejabat</option>
                    <option value="Perpolitikan">Perpolitikan</option>
                    <option value="Motivator">Motivator</option>
                    <option value="Widyaiswara">Widyaiswara</option>
                    <option value="Lain-lain">Lain-lain</option>
                  </select>
                </div>


                <div className='flex flex-col'>
                    <label className="mb-1 flex items-center">
                      <FaUser className="mr-2 text-blue-800" /> Pekerjaan Lain
                    </label>
                    <input 
                      type="text" 
                      placeholder="Lainnya" 
                      value={pekerjaanLain}
                      onChange={(e) => setpekerjaanLain(e.target.value)}
                      className="border rounded p-2 mb-2"
                      required
                    />
                </div>


                <div className='flex flex-col'>
                  <label className="mb-1 flex items-center">
                    <FaUser className="mr-2 text-blue-800" /> Layanan Terpilih
                  </label>
                  <select
                    value={layananTerpilih}
                    onChange={(e) => setLayananTerpilih(e.target.value)}
                    className="border rounded p-2 mb-2"
                    required
                  >
                    <option value="" disabled>Pilih Salah Satu</option>
                    <option value="Menerbitkan Buku">Menerbitkan Buku</option>
                    <option value="Mencetak Buku">Mencetak Buku</option>
                  </select>
                </div>
                

                <div className='flex flex-col'>
                  <label className="mb-1 flex items-center">
                    <FaUser className="mr-2 text-blue-800" /> Judul Buku
                  </label>
                  <input
                      type="text" 
                      placeholder="Judul Buku" 
                      value={judulBuku}
                      onChange={(e) => setJudulBuku(e.target.value)}
                      className="border rounded p-2 mb-2"
                      required
                    />
                </div>


                <input 
                    type="file" 
                    accept="application/pdf" 
                    onChange={handleFileChange} 
                    className="border rounded p-2"
                    required
                />
                

                <div className='flex flex-col'>
                  <label className="mb-1 flex items-center">
                    <GiWhiteBook className="mr-2 text-blue-800" /> Ukuran Buku
                  </label>
                  <select
                    value={ukuranBuku}
                    onChange={(e) => setUkuranBuku(e.target.value)}
                    className="border rounded p-2 mb-2"
                    required
                  >
                    <option value="" disabled>Pilih Salah Satu</option>
                    <option value="A5 (14x20)">A5 (14×20)</option>
                    <option value="Unesco (15.5x23)">Unesco (15.5×23)</option>
                    <option value="B5 (18x25)">B5 (18×25)</option>
                  </select>
                </div>


                <div className='flex flex-col'>
                  <label className="mb-1 flex items-center">
                    <SiPowerpages  className="mr-2 text-blue-800" /> Jumlah Halaman
                  </label>
                  <input
                      type="number" 
                      placeholder="Ukuran Buku" 
                      value={jumlahHalaman}
                      onChange={(e) => setJumlahHalaman(e.target.value)}
                      className="border rounded p-2 mb-2"
                      min="0" // Ensure value cannot be less than 0

                      required
                    />
                </div>


                <div className='flex flex-col'>
                  <label className="mb-1 flex items-center">
                    <FaPrint className="mr-2 text-blue-800" /> Jumlah Cetak
                  </label>
                  <input
                      type="number" 
                      placeholder="Jumlah Cetak Buku" 
                      value={jumlahCetak}
                      onChange={(e) => setJumlahCetak(e.target.value)}
                      className="border rounded p-2 mb-2"
                      required
                      min="0" // Ensure value cannot be less than 0

                    />
                </div>

                <div className='flex flex-col'>
                  <label className="mb-1 flex items-center">
                    <FaUser className="mr-2 text-blue-800" /> Pernah Diterbitkan
                  </label>
                  <input
                      type="text" 
                      placeholder="Jumlah Cetak Buku" 
                      value={pernahDiterbitkan}
                      onChange={(e) => setPernahDiterbitkan(e.target.value)}
                      className="border rounded p-2 mb-2"
                      required
                    />
                </div>


                <div className='flex flex-col'>
                  <label className="mb-1 flex items-center">
                    <FaUser className="mr-2 text-blue-800" /> Apakah Anda sudah pernah menerbitkan buku atau berkomunikasi dengan konsultan di Penerbit Yayasan Sirih Pinang Kebaikan?
                  </label>
                  <select
                    value={komunikasiDenganKonsultan}
                    onChange={(e) => setKomunikasiDenganKonsultan(e.target.value)}
                    className="border rounded p-2 mb-2"
                    required
                  >
                    <option value="" disabled>Pilih Salah Satu</option>
                    <option value="Sudah, pernah menerbitkan buku di deepublish">Sudah, pernah menerbitkan buku di deepublish</option>
                    <option value="Belum, pernah menerbitkan buku di deepublish">Belum, pernah menerbitkan buku di deepublish</option>
                    <option value="Sudah, pernah berkomunikasi dengan konsultan Deepublish">Sudah, pernah berkomunikasi dengan konsultan Deepublish</option>
                    <option value="Belum, pernah berkomunikasi dengan konsultan Deepublish">Belum, pernah berkomunikasi dengan konsultan Deepublish</option>
                  </select>
                </div>


                <div className='flex flex-col'>
                  <label className="mb-1 flex items-center">
                    <FaUser className="mr-2 text-blue-800" /> Jenis Buku
                  </label>
                  <select
                    value={jenisBuku}
                    onChange={(e) => setJenisBuku(e.target.value)}
                    className="border rounded p-2 mb-2"
                    required
                  >
                    <option value="" disabled>Pilih Salah Satu</option>
                    <option value="Non Fiksi">Non Fiksi</option>
                    <option value="Fiksi">Fiksi</option>
                  </select>
                </div>


                <div className='flex flex-col'>
                  <label className="mb-1 flex items-center">
                    <FaUser className="mr-2 text-blue-800" /> Kesiapan Naskah
                  </label>
                  <select
                    value={kesiapanNaskah}
                    onChange={(e) => setKesiapanNaskah(e.target.value)}
                    className="border rounded p-2 mb-2"
                    required
                  >
                    <option value="" disabled>Pilih Salah Satu</option>
                    <option value="Naskah 0-50 %">Naskah 0-50 %</option>
                    <option value="Naskah lebih dari 50%">Naskah lebih dari 50%</option>
                    <option value="Naskah lebih dari 80 %">Naskah lebih dari 80 %</option>
                    <option value="Naskah Selesai">Naskah Selesai</option>
                  </select>
                </div>

                <p>
                  Silakan CEK KEMBALI data diri Anda. Apabila data diri yang Anda masukkan sudah benar, silakan Anda KLIK TOMBOL DAFTAR di bawah ini.
                </p>

                </div>
                {error && <p className="text-red-500">{error}</p>}
                {successMessage && <p className="text-green-500">{successMessage}</p>}

                <button type="submit" className="bg-blue-600 w-full hover:bg-blue-700 text-white py-2 px-4 rounded">
                    DAFTAR
                </button>
            </form>
        {/* </div> */}
        </Card>
      </div>
    );
};

export default FileUploadForm;
