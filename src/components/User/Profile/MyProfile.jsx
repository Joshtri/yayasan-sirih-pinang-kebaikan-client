import React, { useEffect, useState } from 'react';

const MyProfile = () => {
  const [showNotification, setShowNotification] = useState(true);
  const [editMode, setEditMode] = useState(false); // Menyimpan state apakah dalam mode edit atau tidak

  // const [username, setUsername] = useState('ericwu');
  const [role, setRole] = useState('');
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');


  useEffect(() => {
    const storedFirstName = localStorage.getItem('firstName');
    const storedLastName = localStorage.getItem('lastName');
    const storedEmail = localStorage.getItem('email');
    const storedRole = localStorage.getItem('role');
    // const penulisId = localStorage.getItem('id'); // Ambil ID penulis

    if (storedFirstName && storedLastName && storedRole ) {
      setFirstName(storedFirstName);
      setLastName(storedLastName);
      setEmail(storedEmail);
      setRole(storedRole);
    }

    // if (penulisId) {
    //   fetchTotalArticles(penulisId); // Ambil total artikel
    //   fetchTotalComments(penulisId); // Ambil total komentar
    //   fetchTotalArticlesDraft(penulisId);
    // }
  }, []);

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  const handleEditProfile = () => {
    setEditMode(true);
  };

  const handleSaveProfile = () => {
    // Simpan perubahan profil di sini (misal kirim ke API atau simpan ke local storage)
    setEditMode(false);
  };

  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus akun Anda?');
    if (confirmDelete) {
      // Logika untuk menghapus akun, misal panggil API atau hapus data dari local storage
      console.log('Akun dihapus');
    }
  };

  return (
    <div className="bg-gray-100 p-8 min-h-screen">
      {/* Notification */}
      {showNotification && (
        <div className="bg-green-500 text-white font-bold px-4 py-2 rounded-md mb-6">
          <div className="flex justify-between items-center">
            <span>Notifikasi: Data ini hanya dilihat oleh anda dan hanya bisa diubah oleh anda</span>
            <button className="text-white" onClick={handleCloseNotification}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-6.293a1 1 0 111.414 1.414L10 11.414l2.293 2.293a1 1 0 11-1.414 1.414L10 12.828l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 011.414-1.414L10 8.586l2.293-2.293a1 1 0 111.414 1.414L10 10l2.293 2.293z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Profile */}
      <div className="bg-white shadow-md rounded-md p-6">
        <h2 className="text-2xl font-bold mb-4">Profil Saya</h2>

        {!editMode ? (
          <>
            <div className="mb-4">
              <p><strong>Nama:</strong> {firstName} {lastName}</p>
            </div>
            <div className="mb-4">
              <p><strong>Email:</strong> {email}</p>
            </div>
            {/* <div className="mb-4">
              <p><strong>Username:</strong> {username}</p>
            </div> */}
            {/* <div className="mb-4">
              <p><strong>Akses Sebagai:</strong> {role}</p>
            </div> */}
          </>
        ) : (
          <>
            <div className="mb-4">
              <label htmlFor="firstName" className="block font-bold">Nama:</label>
              <input
                type="text"
                id="firstName"
                className="border p-2 rounded w-full"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-bold">Email:</label>
              <input
                type="email"
                id="email"
                className="border p-2 rounded w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="block font-bold">Username:</label>
              <input
                type="text"
                id="username"
                className="border p-2 rounded w-full"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            {/* <div className="mb-4">
              <label htmlFor="role" className="block font-bold">Akses Sebagai:</label>
              <input
                type="text"
                id="role"
                className="border p-2 rounded w-full"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div> */}
          </>
        )}

        {/* Buttons */}
        <div className="flex gap-4">
          {!editMode ? (
            <>
              <button
                className="bg-green-500 text-white font-semibold px-4 py-2 rounded-md opacity-50 cursor-not-allowed"
                // onClick={handleEditProfile}
              >
                Edit Profil (under constructor)
              </button>
              <button
                className="bg-pink-500 text-white font-semibold px-4 py-2 rounded-md opacity-50 cursor-not-allowed"
                // onClick={handleDeleteAccount}
              >
                Hapus Akun (under constructor)
              </button>
            </>
          ) : (
            <>
              <button
                className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md"
                onClick={handleSaveProfile}
              >
                Simpan Profil
              </button>
              <button
                className="bg-gray-500 text-white font-semibold px-4 py-2 rounded-md"
                onClick={() => setEditMode(false)}
              >
                Batal
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
