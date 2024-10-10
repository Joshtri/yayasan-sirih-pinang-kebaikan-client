// import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="text-sm text-gray-600 mb-4">
      {items.map((item, index) => (
        <span key={index}>
          {item.link ? (
            <Link to={item.link} className="text-red-500">
              {item.label}
            </Link>
          ) : (
            <span className="text-red-500">{item.label}</span>
          )}
          {index < items.length - 1 && <span> / </span>}
        </span>
      ))}
    </nav>
  );
};

// Validasi prop types
Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string, // Jika tidak ada link, berarti item ini adalah teks biasa
    })
  ).isRequired,
};

export default Breadcrumbs;
