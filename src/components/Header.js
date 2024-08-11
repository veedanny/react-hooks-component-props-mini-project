import React from 'react';
import PropTypes from 'prop-types';

// Functional component for the Header
const Header = ({ name }) => {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
};

// Define prop types for the Header component
Header.propTypes = {
  name: PropTypes.string.isRequired, // name is a required string prop
};

export default Header;
