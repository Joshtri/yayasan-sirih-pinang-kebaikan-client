// src/components/PostDetailComp.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Card } from "flowbite-react";
import { MdDateRange, MdArrowBack } from "react-icons/md";
import { FiShare2, FiCopy } from "react-icons/fi";
import { format } from "date-fns";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CommentArticle from "./CommentArticle";
import CommentList from "./CommentList";

function ReadArticle() {
  const [article, setArticle] = useState(null);
  const [penulisId, setPenulisId] = useState(''); // State untuk penulisId
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const [newComment, setNewComment] = useState(null);

  const handleCommentAdded = (comment) => {
    setNewComment(comment); // Set komentar baru untuk diperbarui di CommentList
    toast.success("Komentar berhasil ditambahkan!"); // Notifikasi berhasil
  };

  useEffect(() => {
    document.title = "Detail Artikel";
    fetchArticle();
  }, []);

  const fetchArticle = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/article/${id}`);
      setArticle(response.data.data);
      setPenulisId(response.data.data.penulisId); // Set penulisId dari respons API

      // console.log(`ID dari penulis : ` , penulisId);
      setLoading(false);
    } catch (error) {
      console.error("Gagal memuat artikel:", error);
      setError("Gagal memuat artikel.");
      setLoading(false);
    }
  };

  const handleShareWhatsApp = () => {
    const url = window.location.href;
    const message = encodeURIComponent(`Lihat artikel ini: ${url}`);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url)
      .then(() => toast.info("Link artikel berhasil disalin!")) // Notifikasi copy link
      .catch((err) => console.error("Gagal menyalin:", err));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
        <Card className="max-w-4xl w-full p-4 mt-8 mb-7 animate-pulse">
          <div className="p-4">
            <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>
            <div className="h-40 bg-gray-300 rounded mb-4"></div>
          </div>
        </Card>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 mt-8">{error}</div>;
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} /> {/* Komponen Toastify */}
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs dan Button Kembali */}
        <div className="flex justify-between items-center mb-6 ms-20">
          <nav className="text-sm">
            <ol className="list-reset flex text-gray-500 space-x-2">
              <li>
                <Link to="/article" className="text-blue-600 hover:underline">Artikel</Link>
              </li>
              <li><span className="mx-2">/</span></li>
              <li className="text-gray-700">Baca artikel ({article?.judul})</li>
            </ol>
          </nav>

          <button
            onClick={() => navigate(-1)}
            className="px-2 py-1 text-sm rounded-md bg-blue-700 text-white hover:bg-blue-500 transition flex items-center space-x-1"
          >
            <MdArrowBack />
            <span>Kembali</span>
          </button>
        </div>

        {/* Article Card */}
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
          <Card className="max-w-3xl w-full p-4 mt-4 mb-7">
            {/* Buttons at the Top */}
            <div className="flex justify-end items-center space-x-2 mb-4">
              <button
                className="px-3 py-1 text-sm rounded-md bg-green-600 text-white hover:bg-green-500 flex items-center space-x-1 transition"
                onClick={handleShareWhatsApp}
              >
                <FiShare2 />
                <span>Bagikan</span>
              </button>
              <button
                className="px-3 py-1 text-sm rounded-md bg-gray-200 hover:bg-gray-300 flex items-center space-x-1 transition"
                onClick={handleCopyLink}
              >
                <FiCopy />
                <span>Salin</span>
              </button>
            </div>

            {/* Article Content */}
            <div className="p-4">
              <h1 className="text-3xl font-bold text-center mb-2">{article?.judul}</h1>
              <p className="text-center text-gray-600 mt-2">
                <MdDateRange className="inline-block mr-2" />
                {article?.createdAt && format(new Date(article.createdAt), "MMMM dd, yyyy")}
              </p>
              <div className="flex justify-center mt-4">
                <img
                  src={article?.coverImageUrl || "https://placehold.co/400x300"}
                  alt={article?.judul}
                  className="w-full max-w-lg h-auto rounded-lg"
                />
              </div>
              <div className="mt-4 text-justify" dangerouslySetInnerHTML={{ __html: article?.konten }} />
            </div>
          </Card>
        </div>

        {/* Komponen Form Tambah Komentar */}
        <CommentArticle penulisId={penulisId} artikelId={id} onCommentAdded={handleCommentAdded} />
        <CommentList artikelId={id} newComment={newComment} />
      </div>
    </>
  );
}

export default ReadArticle;
