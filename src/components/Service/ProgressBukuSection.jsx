// import React from "react";

// Main ProgressBukuSection function
const ProgressBukuSection = () => {
  const progressItems = [
    { title: "Naskah", date: "11-09-2020" },
    { title: "Cek Administrasi", date: "11-09-2020" },
    { title: "Antrian layout & desain", date: "15-09-2020" },
    {
      title: "Proses layout dan proses desain cover",
      date:
        "Cover\n(dikerjakan) - 30-09-2020\n(revisi) - 15-10-2020\n(dikirim) - 20-10-2020\n(selesai) - 02-11-2021\n\nLayout\n(dikerjakan) - 22-09-2020\n(dikirim) - 22-09-2020\n(selesai) - 02-11-2021",
    },
    { title: "Informasi Harga", date: "" },
  ];

  return (
    <div className="bg-gray-200 flex justify-center items-center min-h-screen pt-10 pb-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-center text-2xl font-semibold mb-6">
          Cari Progress Buku
        </h1>
        <div className="mb-6">
          <select className="w-full p-2 border border-gray-300 rounded">
            <option>Algoritma Dan Pemrograman</option>
          </select>
        </div>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-300"></div>
          <div className="space-y-4">
            {progressItems.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="relative z-10">
                  <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center">
                    <i className="fas fa-leaf"></i>
                  </div>
                </div>
                <div className="ml-8 p-4 bg-white border border-gray-300 rounded shadow-sm w-full">
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-gray-600 whitespace-pre-line">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBukuSection;
