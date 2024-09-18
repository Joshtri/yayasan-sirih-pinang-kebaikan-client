// import { useState } from 'react'

// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Layout from './pages/Layout'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Publish from './pages/Publishing/Publish'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/daftar-penulis-buku' element={<Publish/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
