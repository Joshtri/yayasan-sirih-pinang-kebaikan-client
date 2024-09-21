import React, { useState } from 'react';
import axios from 'axios';

const AuthorPublisherForm = () => {
    const [formData, setFormData] = useState({
        namaDepan: '',
        namaBelakang: '',
        gelarDepan: '',
        gelarBelakang: '',
        nomorTelepon: '',
        email: '',
        umur: '',
        institusi: '',
        pekerjaanLain: '',
        alamat: '',
        layananTerpilih: '',
        judulBuku: '',
        ukuranBuku: '',
        jumlahHalaman: '',
        jumlahCetak: '',
        pernahDiterbitkan: '',
        komunikasiDenganKonsultan: '',
        jenisBuku: '',
        kesiapanNaskah: '',
    });

    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();

        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        if (file) {
            formDataToSend.append('fileBuku', file);
        } else {
            setError('File buku is required');
            return;
        }

        try {
            const response = await axios.post('/api/author-publisher', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setSuccessMessage(response.data.message);
            setFormData({
                namaDepan: '',
                namaBelakang: '',
                gelarDepan: '',
                gelarBelakang: '',
                nomorTelepon: '',
                email: '',
                umur: '',
                institusi: '',
                pekerjaanLain: '',
                alamat: '',
                layananTerpilih: '',
                judulBuku: '',
                ukuranBuku: '',
                jumlahHalaman: '',
                jumlahCetak: '',
                pernahDiterbitkan: '',
                komunikasiDenganKonsultan: '',
                jenisBuku: '',
                kesiapanNaskah: '',
            });
            setFile(null);
            setError('');
        } catch (error) {
            console.error(error);
            setError('Failed to upload data');
        }
    };

    return (
        <div className="max-w-xl mx-auto p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Upload Author and Publisher Data</h2>
            {error && <p className="text-red-600">{error}</p>}
            {successMessage && <p className="text-green-600">{successMessage}</p>}
            <form onSubmit={handleSubmit}>
                {Object.keys(formData).map((key) => (
                    <div key={key} className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">{key.replace(/([A-Z])/g, ' $1')}</label>
                        <input
                            type={key === 'umur' || key === 'jumlahHalaman' || key === 'jumlahCetak' ? 'number' : 'text'}
                            name={key}
                            placeholder={key.replace(/([A-Z])/g, ' $1')}
                            value={formData[key]}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            required
                        />
                    </div>
                ))}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">File Buku</label>
                    <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200">
                    Upload
                </button>
            </form>
        </div>
    );
};

export default AuthorPublisherForm;
