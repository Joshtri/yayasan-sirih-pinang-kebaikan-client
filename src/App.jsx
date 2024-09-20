// import { useState } from 'react'

// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Layout from './pages/Layout'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Publish from './pages/Publishing/Publish'
import LoginUser from './pages/LoginUser'
import SignUpUser from './pages/SignUpUser'
// import ProtectedRoute from './components/Auth/ProtectedRoute'

import FormAuthorPublish from './pages/Publishing/FormAuthorPublish'
import ProgressCek from './pages/Service/ProgressCek'
import ScrollToTop from './components/ScrollToUp'; // Import the ScrollToTop component
import AboutPage from './pages/About/AboutPage'

function App() {
  // const user = localStorage.getItem("token");

  return (
    <>
      <BrowserRouter>
      <ScrollToTop /> {/* Include ScrollToTop here */}

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<AboutPage/>} />


          {/* Protected routes */}
          <Route path='/daftar-penulis-buku' element={<Publish/>}/>
          
          <Route path='/formulir-daftar' element={<FormAuthorPublish/>}/>
          <Route path='/cek-progress' element={<ProgressCek/>}/>

          <Route path='/login' element={<LoginUser/>}/>
          <Route path='/sign-up' element={<SignUpUser/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
