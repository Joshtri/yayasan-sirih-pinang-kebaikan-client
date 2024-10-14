// src/utils/Auth.js
export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    
    // Tambahkan validasi apakah token kosong atau tidak valid
    if (!token || token === 'undefined' || token === 'null') {
      console.warn('Token tidak valid atau tidak ditemukan.');
      return false;
    }
    
    console.log('Token ditemukan:', token); // Debugging
    return true;
  };
  