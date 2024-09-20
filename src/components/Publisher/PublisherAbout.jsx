import { Link } from 'react-router-dom';
import publisherImg from '../../assets/publisherImg.jpg';

function PublisherAbout() {
    return (
        <section id="home" className="relative py-16 bg-gradient-to-r from-slate-200 via-zinc-50 to-slate-200 text-white animate-gradient-x">
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Introduction */}
                <div className="w-1/2 p-2 pl-7"> {/* Added padding-right to give some space */}
                    <h1 className="text-5xl font-bold mb-4">Tentang Penerbit Buku</h1>
                    <h1 className="text-4xl font-bold mb-4 pt-3">Yayasan Sirih Pinang Kebaikan</h1>
                    <p className="text-xl mb-6">
                        Selamat datang di Yayasan Sirih Pinang Kebaikan. Kami berkomitmen untuk membantu penulis dan penerbit dalam proses penerbitan buku serta pembuatan ISBN yang resmi.
                        Bersama kami, karya Anda akan terwujud dan tersebar luas untuk membawa kebaikan dan pengetahuan bagi semua.
                    </p>

                    {/* Call to Action */}
                    <div className="mt-8">
                        <Link to='/daftar-penulis-buku' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Daftar Sekarang
                        </Link>
                    </div>
                </div>
                {/* Image */}
                <div className="w-1/2 p-10 pl-0"> {/* Removed padding-left to keep the image aligned */}
                    <img
                        src={publisherImg}
                        alt="Yayasan Sirih Pinang Kebaikan"
                        className="rounded-lg shadow-lg w-full h-auto"
                    />
                </div>
            </div>
        </section>
    );
}

export default PublisherAbout;
