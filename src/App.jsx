// import { useState } from 'react'

// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Layout from './pages/Layout'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
