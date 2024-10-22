import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { Dropdown, Navbar as FlowbiteNavbar, Button } from 'flowbite-react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icon for mobile menu

function NavbarAuthor() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state
  const mobileMenuRef = useRef(null); // Ref for handling outside clicks

  useEffect(() => {
    const storedFirstName = localStorage.getItem('firstName');
    const storedLastName = localStorage.getItem('lastName');
    const storedRole = localStorage.getItem('role');

    if (storedFirstName && storedLastName && storedRole) {
      setFirstName(storedFirstName);
      setLastName(storedLastName);
      setRole(storedRole);
    }

    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('role');
    navigate('/'); // Redirect to login page after logout
  };

  if (role !== 'author') {
    return null; // Render nothing if the role is not 'author'
  }

  return (
    <FlowbiteNavbar className="shadow-md bg-white w-full">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Left: Brand Logo */}
        <Link
          to="/my/author/dashboard"
          className="text-xl font-semibold text-blue-600 hover:text-blue-800"
        >
          YaSiPiKan |
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <Button
            className="text-gray-100 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />} {/* Larger icon */}
          </Button>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <div className="hidden lg:flex items-center space-x-6">
          <NavLink
            to="/my/author/dashboard"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-700 font-semibold'
                : 'text-gray-600 hover:text-blue-500'
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/my/author/posted-article"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-700 font-semibold'
                : 'text-gray-600 hover:text-blue-500'
            }
          >
            Posting Artikel
          </NavLink>

          {/* User Dropdown (Desktop) */}
          <Dropdown label={`${firstName} ${lastName}`} inline={true} arrowIcon={false}>
            <Dropdown.Item onClick={() => navigate('/my/author/profile')}>
              My Profile
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </Dropdown>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden flex flex-col items-start space-y-4 px-6 py-6 bg-white border-t"
        >
          <NavLink
            to="/my/author/dashboard"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-700 font-semibold w-full'
                : 'text-gray-600 hover:text-blue-500 w-full'
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/my/author/posted-article"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-700 font-semibold w-full'
                : 'text-gray-600 hover:text-blue-500 w-full'
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Posting Artikel
          </NavLink>

          {/* User Profile & Logout */}
          <button
            onClick={() => navigate('/profile')}
            className="text-gray-600 hover:text-blue-500 w-full text-left"
          >
            Profile
          </button>
          <button
            onClick={handleLogout}
            className="text-gray-600 hover:text-red-500 w-full text-left"
          >
            Logout
          </button>
        </div>
      )}
    </FlowbiteNavbar>
  );
}

export default NavbarAuthor;
