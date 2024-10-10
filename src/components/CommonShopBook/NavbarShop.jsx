import { useState } from 'react';
import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

const NavbarShop = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <header className="fixed w-full top-0 z-50">
      <Navbar fluid={true} rounded={true} className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-800">
        {/* Logo with Brand Name */}
        <Navbar.Brand href="/toko-buku">
          <span className="text-xl font-bold p-2 text-white">YaSiPikan store</span>
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle onClick={toggleNavbar} />

        {/* Navbar Links */}
        <Navbar.Collapse className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/" className="text-white text-sm px-3 py-2 hover:bg-blue-800 rounded">KATEGORI</Link>
          <Link to="/penghasilan-tambahan" className="text-white text-sm px-3 py-2 hover:bg-blue-800 rounded">PENGHASILAN TAMBAHAN</Link>
          <Link to="/promo" className="text-white text-sm px-3 py-2 hover:bg-blue-800 rounded">PROMO</Link>
          <Link to="/penerbitan" className="text-white text-sm px-3 py-2 hover:bg-blue-800 rounded">PENERBITAN</Link>
          <Link to="/pembelian-buku" className="text-white text-sm px-3 py-2 hover:bg-blue-800 rounded">PEMBELIAN BUKU</Link>
          <Link to="/blog" className="text-white text-sm px-3 py-2 hover:bg-blue-800 rounded">BLOG</Link>
          <Link to="/ebook-reseller" className="text-white text-sm px-3 py-2 hover:bg-blue-800 rounded">EBOOK RESELLER</Link>
          <Link to="/cek-resi" className="text-white text-sm px-3 py-2 hover:bg-blue-800 rounded">CEK RESI</Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default NavbarShop;
