// import { useState } from 'react'

// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Layout from './pages/Layout'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Publish from './pages/Publishing/Publish'
// import LoginUser from './pages/LoginUser'
// import SignUpUser from './pages/SignUpUser'
import ProtectedRoute from './components/Auth/ProtectedRoute'

import FormAuthorPublish from './pages/Publishing/FormAuthorPublish'
import ProgressCek from './pages/Service/ProgressCek'
import ScrollToTop from './components/ScrollToUp'; // Import the ScrollToTop component
import AboutPage from './pages/About/AboutPage'
import ProgressSection from './pages/Service/ProgressSection'
import TokoOnlinePage from './pages/TokoOnline/TokoOnlinePage'
import VisiMisiPage from './pages/About/VisiMisiPage'
import SejarahPage from './pages/About/SejarahPage'
import BerandaBookShop from './pages/TokoOnline/BerandaBookShop'
import DetailBookPage from './pages/TokoOnline/DetailBookPage'
import ArticlePage from './pages/Article/ArticlePage'
import ReadArticlePage from './pages/Article/ReadArticlePage'
import LoginPage from './pages/Auth/LoginPage'
import MainDashboard from './components/User/Dashboard/MainDashboard'
import UserDashboardPage from './pages/UserAuthor/UserDashboardPage'
import SignUpPage from './pages/Auth/SignUpPage'
import ListArticle from './components/User/ArticleData/ListArticle'
import ListArticlePage from './pages/UserAuthor/ListArticlePage'
import { element } from 'prop-types'
import AddArticlePage from './pages/UserAuthor/AddArticlePage'
import PreviewArticlePage from './pages/UserAuthor/PreviewArticlePage'
import EditArticlePage from './pages/UserAuthor/EditArticlePage'

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
          <Route path='/visi-misi' element={<VisiMisiPage/>} />
          <Route path='/sejarah' element={<SejarahPage/>} />


          {/* Protected routes */}
          <Route path='/daftar-penulis-buku' element={<Publish/>}/>
          <Route path='/toko-online-buku' element={<TokoOnlinePage/>}/>
          
          <Route path='/formulir-daftar' element={<FormAuthorPublish/>}/>
          <Route path='/cek-progress' element={<ProgressCek/>}/>

          <Route path='/section-cek-progress' element={<ProgressSection/>}/>


          <Route path='/toko-buku' element={<BerandaBookShop/>}/>
          <Route path='/produk-buku/:id' element={<DetailBookPage/>}/>
          <Route path='/article/:id' element={<ReadArticlePage/>}/>
          <Route path='/article' element={<ArticlePage/>}/>

          <Route path='/auth/login' element={<LoginPage/>}/>
          <Route path='/auth/signup' element={<SignUpPage/>}/>


                  {/* Rute Create Article, hanya bisa diakses author */}
          {/* <Route
            path="/create-article"
            element={<ProtectedRoute element={MainDashboard} allowedRoles={['author']} />}
          /> */}

          <Route path='/my/author/dashboard' element={<ProtectedRoute element={UserDashboardPage} allowedRoles={['author']}/>}/>

          <Route path='/my/author/posted-article' element={<ProtectedRoute element={ListArticlePage} allowedRoles={['author']}/>}/>

          <Route path='/my/author/add-article' element={<ProtectedRoute element={AddArticlePage}allowedRoles={['author']}/> }/> 
          <Route path='/my/author/posted-article/:id' element={<ProtectedRoute element={PreviewArticlePage} allowedRoles={['author']}/>}/>

          <Route path='/my/author/edit/posted-article/:id' element={<ProtectedRoute element={EditArticlePage} allowedRoles={['author']}/>}/>
          {/* <Route path='/login' element={<LoginUser/>}/>
          <Route path='/sign-up' element={<SignUpUser/>}/> */}
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
