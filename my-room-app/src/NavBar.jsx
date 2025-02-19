import './styles/navBar.css';
import logo from './assets/logo.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes

const NavBar = ({ isAuthenticated }) => {
  return (
    <div className="nav-container">
      <div className="nav-logo"><img src={logo} alt="Logo" /></div>
      <div className="nav-contents">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/review">Review</Link></li>
          <li><a>Dashboard</a></li>
          <li><a>Contact us</a></li>
        </ul>
      </div>
      <button className="primary-btn">
        {isAuthenticated ? (
          <Link to="/profile">Profile</Link>
        ) : (
          <Link to="/loginSignup">Sign Up</Link>
        )}
      </button>
    </div>
  );
};

// Add PropTypes validation
NavBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired, // Ensure isAuthenticated is a boolean and required
};

export default NavBar;
