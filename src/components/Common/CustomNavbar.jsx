import { useState } from 'react';
import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import yayasanPublisherLogo from '../../assets/logo.png'

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <header className="fixed w-full top-0 z-50">
      <Navbar fluid={true} rounded={true} className="bg-gradient-to-r from-gray-900 to-gray-700">
        {/* Logo with Brand Name */}
        <Navbar.Brand href="/">
          {/* <img
            src={yayasanPublisherLogo} // Replace with your logo path
            className="mr-3 h-8 sm:h-10"
            alt="Logo"
          /> */}
          <span className="text-2xl font-bold p-2 text-white">E-Publisher Yayasan Sirih Pinang Kebaikan</span>
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle onClick={toggleNavbar} />

        {/* Navbar Links */}
        <Navbar.Collapse className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
          <Link
            to="/"
            className='text-white text-lg px-3 py-2 hover:bg-gray-600 rounded'
          >
            Home
          </Link>
          <Link
            to="/about"
            className='text-white text-lg px-3 py-2 hover:bg-gray-600 rounded'
          >
            About
          </Link>
          <Link
            to="/contact"
            className='text-white text-lg px-3 py-2 hover:bg-gray-600 rounded'
          >
            Contact
          </Link>
          <Link
            to="/service"
            className='text-white text-lg px-3 py-2 hover:bg-gray-600 rounded'
          >
            Service
          </Link>
          {/* <Link
            to="/education"
            className='text-white text-lg px-3 py-2 hover:bg-gray-600 rounded'
          >
            Education
          </Link>
          <Link
            to="/contact"
            className='text-white text-lg px-3 py-2 hover:bg-gray-600 rounded'
          >
            Contact
          </Link> */}
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default CustomNavbar;
