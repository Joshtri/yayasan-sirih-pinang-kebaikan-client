import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Breadcrumb, Button, Label, TextInput, Textarea } from 'flowbite-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function EditArticle() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    judul: '',
    konten: '',
    deskripsiSingkat: '',
    coverImage: null,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Fetch article data by ID
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const url = `${import.meta.env.VITE_BASE_URL}/api/v1/article/${id}`;
        const response = await axios.get(url);
        const { judul, konten, deskripsiSingkat } = response.data.data;
        setFormData({ judul, konten, deskripsiSingkat });
      } catch (error) {
        console.error(error);
        setError('Terjadi kesalahan saat mengambil artikel.');
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle content change with Quill.js
  const handleContentChange = (value) => {
    setFormData({ ...formData, konten: value });
  };

  // Handle image file change
  const handleFileChange = (e) => {
    setFormData({ ...formData, coverImage: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${import.meta.env.VITE_BASE_URL}/api/v1/article/${id}`;
      const form = new FormData();
      form.append('judul', formData.judul);
      form.append('konten', formData.konten);
      form.append('deskripsiSingkat', formData.deskripsiSingkat);
      if (formData.coverImage) {
        form.append('coverImage', formData.coverImage);
      }

      await axios.put(url, form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      alert('Artikel berhasil diperbarui.');
      navigate('/my/author/posted-article');
    } catch (error) {
      console.error(error);
      setError('Terjadi kesalahan saat memperbarui artikel.');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="text-lg font-medium">Memuat data artikel...</span>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 mt-8">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-6">
        <Breadcrumb.Item href="/my/author/dashboard">Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item href="/my/author/posted-article">Posted Article</Breadcrumb.Item>
        <Breadcrumb.Item>Edit Posted Article</Breadcrumb.Item>
      </Breadcrumb>



    {/* Button Back */}   
      <div className="mb-5">
        <Link
          to="/my/author/posted-article"
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md"
        >
          Kembali
        </Link>
      </div>
      
      {/* <h2 className="text-3xl font-semibold mb-4">Edit Artikel</h2> */}
      <hr className="mb-6" />

        {/* <Button
            type="button"
            color="gray"
            onClick={() => navigate('/my/author/posted-article')}
          >
            Batal
        </Button> */}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="judul" value="Judul" />
          <TextInput
            id="judul"
            name="judul"
            value={formData.judul}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="deskripsiSingkat" value="Deskripsi Singkat" />
          <Textarea
            id="deskripsiSingkat"
            name="deskripsiSingkat"
            rows={2}
            value={formData.deskripsiSingkat}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="konten" value="Konten" />
          <ReactQuill
            value={formData.konten}
            onChange={handleContentChange}
            theme="snow"
            placeholder="Tulis konten artikel di sini..."
          />
        </div>

        <div>
          <Label htmlFor="coverImage" value="Gambar Sampul" />
          <TextInput
            id="coverImage"
            type="file"
            onChange={handleFileChange}
          />
        </div>

        <div className="flex space-x-4">
          <Button type="submit" className='bg-blue-500' >
            Simpan Perubahan
          </Button>
        </div>
      </form>
    </div>
  );
}

export default EditArticle;
