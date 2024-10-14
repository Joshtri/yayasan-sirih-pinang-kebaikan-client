import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Dropdown, Navbar as FlowbiteNavbar, Button } from 'flowbite-react';

function NavbarAuthor() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    // Fetch the firstName, lastName, and role from localStorage when the component mounts
    const storedFirstName = localStorage.getItem('firstName');
    const storedLastName = localStorage.getItem('lastName');
    const storedRole = localStorage.getItem('role');

    if (storedFirstName && storedLastName && storedRole) {
      setFirstName(storedFirstName);
      setLastName(storedLastName);
      setRole(storedRole);
    }
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
    <FlowbiteNavbar className="shadow-md bg-white">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link to="/my/author/dashboard" className="text-xl font-semibold text-blue-600 hover:text-blue-800">
          YaSiPiKan |
        </Link>

        {/* Center: Navigation Links */}
        <div className="flex items-center space-x-6">
          <NavLink 
            to="/my/author/dashboard" 
            className={({ isActive }) =>
              isActive ? 'text-blue-700 font-semibold' : 'text-gray-600 hover:text-blue-500'
            }
          >
            Dashboard
          </NavLink>

          <NavLink 
            to="/my/author/posted-article" 
            className={({ isActive }) =>
              isActive ? 'text-blue-700 font-semibold' : 'text-gray-600 hover:text-blue-500'
            }
          >
            Posting Artikel
          </NavLink>
        </div>

        {/* Right: User Dropdown & Logout */}
        <Dropdown label={`${firstName} ${lastName}`} inline={true} arrowIcon={false}>
          <Dropdown.Item onClick={() => navigate('/profile')}>
            Profile
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogout}>
            Logout
          </Dropdown.Item>
        </Dropdown>
      </div>
    </FlowbiteNavbar>
  );
}

export default NavbarAuthor;
